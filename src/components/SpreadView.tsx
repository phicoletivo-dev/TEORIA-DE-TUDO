import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MAGAZINE_PAGES } from '../data/magazineData';
import { MagazinePageCard } from './MagazinePageCard';

interface SpreadViewProps {
  currentSpreadIndex: number; // 0 to 8
  onSpreadChange: (index: number) => void;
  customImages: Record<number, string>;
  onOpenPrompt: (pageNumber: number) => void;
  onGenerateAI: (pageNumber: number) => void;
  onUploadImage: (pageNumber: number, file: File) => void;
  generatingPageNumber: number | null;
}

export const SpreadView: React.FC<SpreadViewProps> = ({
  currentSpreadIndex,
  onSpreadChange,
  customImages,
  onOpenPrompt,
  onGenerateAI,
  onUploadImage,
  generatingPageNumber,
}) => {
  // Spreads:
  // 0: Page 1 (Capa)
  // 1: Page 2 & 3
  // 2: Page 4 & 5
  // 3: Page 6 & 7
  // 4: Page 8 & 9
  // 5: Page 10 & 11
  // 6: Page 12 & 13
  // 7: Page 14 & 15
  // 8: Page 16 (Contra-Capa)

  let leftPageNumber: number | null = null;
  let rightPageNumber: number | null = null;

  if (currentSpreadIndex === 0) {
    rightPageNumber = 1; // Cover on the right
  } else if (currentSpreadIndex === 8) {
    leftPageNumber = 16; // Back cover
  } else {
    leftPageNumber = currentSpreadIndex * 2;
    rightPageNumber = currentSpreadIndex * 2 + 1;
  }

  const leftPage = leftPageNumber ? MAGAZINE_PAGES[leftPageNumber - 1] : null;
  const rightPage = rightPageNumber ? MAGAZINE_PAGES[rightPageNumber - 1] : null;

  return (
    <div className="max-w-[1600px] mx-auto px-4 py-6">
      {/* Spread Indicator Bar */}
      <div className="flex items-center justify-between mb-4 px-2 text-xs font-mono text-gray-400">
        <div>
          {currentSpreadIndex === 0 && 'CAPA DA REVISTA • PÁGINA 1'}
          {currentSpreadIndex > 0 &&
            currentSpreadIndex < 8 &&
            `PRANCHA DUPLA: PÁGINAS ${leftPageNumber} & ${rightPageNumber}`}
          {currentSpreadIndex === 8 && 'CONTRA-CAPA • PÁGINA 16'}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onSpreadChange(Math.max(0, currentSpreadIndex - 1))}
            disabled={currentSpreadIndex === 0}
            className="px-3 py-1 rounded bg-white/5 hover:bg-white/10 disabled:opacity-30 text-white cursor-pointer"
          >
            ← Prancha Anterior
          </button>
          <span>{currentSpreadIndex + 1} / 9</span>
          <button
            onClick={() => onSpreadChange(Math.min(8, currentSpreadIndex + 1))}
            disabled={currentSpreadIndex === 8}
            className="px-3 py-1 rounded bg-white/5 hover:bg-white/10 disabled:opacity-30 text-white cursor-pointer"
          >
            Próxima Prancha →
          </button>
        </div>
      </div>

      {/* Facing Pages Container */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
        {leftPage && (
          <div className="w-full">
            <MagazinePageCard
              page={leftPage}
              customImageUrl={customImages[leftPage.pageNumber]}
              onOpenPrompt={() => onOpenPrompt(leftPage.pageNumber)}
              onGenerateAI={() => onGenerateAI(leftPage.pageNumber)}
              onUploadImage={(file) => onUploadImage(leftPage.pageNumber, file)}
              isGenerating={generatingPageNumber === leftPage.pageNumber}
              layoutMode="spread"
            />
          </div>
        )}

        {rightPage && (
          <div className="w-full">
            <MagazinePageCard
              page={rightPage}
              customImageUrl={customImages[rightPage.pageNumber]}
              onOpenPrompt={() => onOpenPrompt(rightPage.pageNumber)}
              onGenerateAI={() => onGenerateAI(rightPage.pageNumber)}
              onUploadImage={(file) => onUploadImage(rightPage.pageNumber, file)}
              isGenerating={generatingPageNumber === rightPage.pageNumber}
              layoutMode="spread"
            />
          </div>
        )}
      </div>
    </div>
  );
};
