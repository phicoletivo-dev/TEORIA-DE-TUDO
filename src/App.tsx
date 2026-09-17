import React, { useState, useEffect, useCallback, useRef } from 'react';
import confetti from 'canvas-confetti';
import { MAGAZINE_PAGES, MAGAZINE_METADATA } from './data/magazineData';
import { MagazinePageData, ViewMode } from './types';
import { MagazineHeader } from './components/MagazineHeader';
import { MagazineFooter } from './components/MagazineFooter';
import { MagazinePageCard } from './components/MagazinePageCard';
import { PromptModal } from './components/PromptModal';
import { ExportModal } from './components/ExportModal';
import { GuideModal } from './components/GuideModal';
import { PresentationView } from './components/PresentationView';
import { GridView } from './components/GridView';
import { SpreadView } from './components/SpreadView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [viewMode, setViewMode] = useState<ViewMode>('single');
  const [customImages, setCustomImages] = useState<Record<number, string>>(() => {
    try {
      const saved = localStorage.getItem('phi_fud_magazine_custom_images');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [promptModalPage, setPromptModalPage] = useState<MagazinePageData | null>(null);
  const [isExportModalOpen, setIsExportModalOpen] = useState<boolean>(false);
  const [isGuideModalOpen, setIsGuideModalOpen] = useState<boolean>(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);
  const [generatingPageNumber, setGeneratingPageNumber] = useState<number | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 4000);
  };

  // Persist custom images
  const saveCustomImage = (pageNumber: number, imageUrl: string) => {
    setCustomImages((prev) => {
      const updated = { ...prev, [pageNumber]: imageUrl };
      try {
        localStorage.setItem('phi_fud_magazine_custom_images', JSON.stringify(updated));
      } catch (e) {
        console.warn('LocalStorage quota reached for images', e);
      }
      return updated;
    });
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode === 'presentation') return; // Handled inside PresentationView

      // If typing in an input, skip
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;

      if (e.key === 'ArrowRight') {
        setCurrentPage((prev) => Math.min(MAGAZINE_PAGES.length, prev + 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentPage((prev) => Math.max(1, prev - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode]);

  // Autoplay loop
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayTimerRef.current = setInterval(() => {
        setCurrentPage((prev) => (prev < MAGAZINE_PAGES.length ? prev + 1 : 1));
      }, 7000);
    } else {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    }
    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isAutoPlaying]);

  // Handle AI Image Generation via Gemini
  const handleGenerateAI = async (pageNumber: number) => {
    const targetPage = MAGAZINE_PAGES[pageNumber - 1];
    setGeneratingPageNumber(pageNumber);
    showToast(`Gerando arte cósmica para Prancha ${pageNumber} com Gemini...`);

    try {
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: targetPage.promptEN,
          style: 'sacred_geometry',
        }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || 'Falha na conexão com o modelo de imagem.');
      }

      const data = await response.json();
      if (data.imageUrl) {
        saveCustomImage(pageNumber, data.imageUrl);
        showToast(`Arte da Página ${pageNumber} gerada com sucesso!`);
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#f59e0b', '#06b6d4', '#ffffff'],
        });
      }
    } catch (err: any) {
      console.error('Generation failed:', err);
      showToast(
        `Aviso: ${err.message || 'Não foi possível gerar via API.'} Você pode copiar o prompt para o Meta AI ou Midjourney.`
      );
      setPromptModalPage(targetPage);
    } finally {
      setGeneratingPageNumber(null);
    }
  };

  // Upload custom rendered image
  const handleUploadImage = (pageNumber: number, file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        saveCustomImage(pageNumber, reader.result);
        showToast(`Imagem personalizada carregada na Página ${pageNumber}!`);
      }
    };
    reader.readAsDataURL(file);
  };

  const activePage = MAGAZINE_PAGES[currentPage - 1];

  // Calculate current spread index
  const currentSpreadIndex =
    currentPage === 1 ? 0 : currentPage === 16 ? 8 : Math.floor(currentPage / 2);

  const handleSpreadChange = (newSpreadIndex: number) => {
    if (newSpreadIndex === 0) setCurrentPage(1);
    else if (newSpreadIndex === 8) setCurrentPage(16);
    else setCurrentPage(newSpreadIndex * 2);
  };

  return (
    <div className="min-h-screen bg-[#060509] text-[#e8e4dc] flex flex-col selection:bg-[#f3d178]/30">
      {/* Magazine Navigation Header */}
      <MagazineHeader
        viewMode={viewMode}
        onChangeViewMode={setViewMode}
        onOpenExport={() => setIsExportModalOpen(true)}
        onOpenGuide={() => setIsGuideModalOpen(true)}
        currentPage={currentPage}
        totalPages={MAGAZINE_PAGES.length}
      />

      {/* Main View Area */}
      <main className="flex-1 pb-24 no-print">
        {viewMode === 'single' && (
          <div className="px-4 py-4 sm:py-6">
            <MagazinePageCard
              page={activePage}
              customImageUrl={customImages[currentPage]}
              onOpenPrompt={() => setPromptModalPage(activePage)}
              onGenerateAI={() => handleGenerateAI(currentPage)}
              onUploadImage={(file) => handleUploadImage(currentPage, file)}
              isGenerating={generatingPageNumber === currentPage}
              layoutMode="single"
            />
          </div>
        )}

        {viewMode === 'spread' && (
          <SpreadView
            currentSpreadIndex={currentSpreadIndex}
            onSpreadChange={handleSpreadChange}
            customImages={customImages}
            onOpenPrompt={(pNum) => setPromptModalPage(MAGAZINE_PAGES[pNum - 1])}
            onGenerateAI={handleGenerateAI}
            onUploadImage={handleUploadImage}
            generatingPageNumber={generatingPageNumber}
          />
        )}

        {viewMode === 'grid' && (
          <GridView
            onSelectPage={(pNum) => {
              setCurrentPage(pNum);
              setViewMode('single');
            }}
            customImages={customImages}
          />
        )}

        {viewMode === 'presentation' && (
          <PresentationView
            page={activePage}
            customImageUrl={customImages[currentPage]}
            onPrev={() => setCurrentPage((p) => Math.max(1, p - 1))}
            onNext={() => setCurrentPage((p) => Math.min(MAGAZINE_PAGES.length, p + 1))}
            onClose={() => setViewMode('single')}
            onOpenPrompt={() => setPromptModalPage(activePage)}
            currentPage={currentPage}
            totalPages={MAGAZINE_PAGES.length}
          />
        )}
      </main>

      {/* Sticky Bottom Footer Navigation (Single & Spread modes) */}
      {viewMode !== 'presentation' && viewMode !== 'grid' && (
        <MagazineFooter
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          isAutoPlaying={isAutoPlaying}
          onToggleAutoPlay={() => setIsAutoPlaying(!isAutoPlaying)}
        />
      )}

      {/* Hidden Print Section for PDF Export: Renders all 16 pages cleanly */}
      <div className="hidden print:block">
        {MAGAZINE_PAGES.map((page) => (
          <div key={`print-page-${page.pageNumber}`} className="print-page">
            <MagazinePageCard
              page={page}
              customImageUrl={customImages[page.pageNumber]}
              onOpenPrompt={() => {}}
              onGenerateAI={() => {}}
              onUploadImage={() => {}}
              layoutMode="print"
            />
          </div>
        ))}
      </div>

      {/* Modals */}
      {promptModalPage && (
        <PromptModal
          page={promptModalPage}
          isOpen={Boolean(promptModalPage)}
          onClose={() => setPromptModalPage(null)}
          onGenerateWithAI={() => handleGenerateAI(promptModalPage.pageNumber)}
          isGenerating={generatingPageNumber === promptModalPage.pageNumber}
        />
      )}

      <ExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        currentPageNumber={currentPage}
      />

      <GuideModal isOpen={isGuideModalOpen} onClose={() => setIsGuideModalOpen(false)} />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 px-4 py-3 rounded-xl bg-[#171422] border border-[#f3d178]/50 text-xs sm:text-sm text-amber-200 shadow-2xl flex items-center gap-3 backdrop-blur-md animate-bounce no-print">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
