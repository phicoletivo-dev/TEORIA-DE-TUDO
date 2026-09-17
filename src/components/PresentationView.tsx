import React, { useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Volume2, Sparkles, Copy } from 'lucide-react';
import { MagazinePageData } from '../types';
import { CosmicVisualizer } from './CosmicVisualizer';
import { cosmicAudio } from '../utils/cosmicAudio';

interface PresentationViewProps {
  page: MagazinePageData;
  customImageUrl?: string;
  onPrev: () => void;
  onNext: () => void;
  onClose: () => void;
  onOpenPrompt: () => void;
  currentPage: number;
  totalPages: number;
}

export const PresentationView: React.FC<PresentationViewProps> = ({
  page,
  customImageUrl,
  onPrev,
  onNext,
  onClose,
  onOpenPrompt,
  currentPage,
  totalPages,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        onNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        onPrev();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onPrev, onNext, onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-[#060509] flex flex-col text-white select-none">
      {/* Top Floating Bar */}
      <div className="absolute top-4 inset-x-6 z-20 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-3 pointer-events-auto bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
          <span className="font-mono text-xs text-[#f3d178] font-bold">
            SLIDE {currentPage} / {totalPages}
          </span>
          <span className="font-serif text-sm text-white hidden sm:inline">
            {page.title} ({page.moduleCode})
          </span>
        </div>

        <div className="flex items-center gap-2 pointer-events-auto">
          <button
            onClick={onOpenPrompt}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-mono transition-colors cursor-pointer"
          >
            <Copy size={14} />
            <span className="hidden sm:inline">Prompt</span>
          </button>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors cursor-pointer"
            title="Sair do Modo Apresentação (Esc)"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Main Slide Stage */}
      <div className="flex-1 relative flex items-center justify-center p-4 sm:p-12 overflow-hidden">
        {/* Full Background Visualizer / Artwork */}
        <div className="w-full h-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-[#f3d178]/25 shadow-2xl relative bg-black flex items-center justify-center">
          <CosmicVisualizer
            type={page.visualizationType}
            pageNumber={page.pageNumber}
            customImageUrl={customImageUrl}
          />

          {/* Glassmorphic Presentation HUD Overlay */}
          <div className="absolute bottom-6 inset-x-6 bg-[#0c0a14]/85 backdrop-blur-md p-6 rounded-2xl border border-white/15 max-h-[38%] overflow-y-auto custom-scrollbar shadow-2xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-[#f3d178] tracking-widest uppercase">
                {page.moduleCode} • {page.subtitle || 'PRANCHA CÓSMICA'}
              </span>
              {page.frequencies && page.frequencies.length > 0 && (
                <button
                  onClick={() => cosmicAudio.playTone(page.frequencies![0].hz, 3.5)}
                  className="flex items-center gap-1 text-[11px] font-mono text-cyan-300 hover:underline cursor-pointer"
                >
                  <Volume2 size={12} />
                  <span>Sintonizar {page.frequencies[0].hz} Hz</span>
                </button>
              )}
            </div>

            <h2 className="text-xl sm:text-2xl font-serif text-white font-medium mb-2">
              {page.title}
            </h2>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              {page.text[0]}
            </p>

            {page.equations && page.equations.length > 0 && (
              <div className="mt-3 inline-block px-3 py-1.5 rounded-lg bg-black/60 border border-white/10 font-mono text-xs text-amber-200">
                {page.equations[0]}
              </div>
            )}
          </div>
        </div>

        {/* Side Navigation Arrows */}
        {currentPage > 1 && (
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/10 hover:border-amber-400 transition-all cursor-pointer z-20"
            title="Prancha Anterior (Seta Esquerda)"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        {currentPage < totalPages && (
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/10 hover:border-amber-400 transition-all cursor-pointer z-20"
            title="Próxima Prancha (Seta Direita / Espaço)"
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>

      {/* Bottom Hint */}
      <div className="py-2 text-center text-[11px] font-mono text-gray-500 border-t border-white/5 bg-black/40">
        Navegue com as setas do teclado [←] [→] ou barra de espaço. Pressione [Esc] para sair.
      </div>
    </div>
  );
};
