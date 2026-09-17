import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  RotateCcw,
  Layers,
  Sparkles,
} from 'lucide-react';
import { MAGAZINE_PAGES } from '../data/magazineData';

interface MagazineFooterProps {
  currentPage: number;
  onPageChange: (page: number) => void;
  isAutoPlaying: boolean;
  onToggleAutoPlay: () => void;
}

export const MagazineFooter: React.FC<MagazineFooterProps> = ({
  currentPage,
  onPageChange,
  isAutoPlaying,
  onToggleAutoPlay,
}) => {
  const total = MAGAZINE_PAGES.length;
  const activePage = MAGAZINE_PAGES[currentPage - 1];

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < total) onPageChange(currentPage + 1);
  };

  return (
    <nav className="fixed bottom-0 inset-x-0 z-30 bg-[#08070d]/95 backdrop-blur-md border-t border-[#f3d178]/20 px-4 py-3 no-print">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Current Page Title & Module */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#f3d178] font-bold">
              PÁG. {currentPage}/{total}
            </span>
            <span className="hidden md:inline text-xs text-gray-400 font-mono">
              • {activePage.title}
            </span>
          </div>

          {/* Autoplay toggle */}
          <button
            onClick={onToggleAutoPlay}
            className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
              isAutoPlaying
                ? 'bg-amber-500 text-black font-semibold shadow-lg shadow-amber-500/30'
                : 'bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10'
            }`}
          >
            {isAutoPlaying ? <Pause size={13} /> : <Play size={13} />}
            <span className="text-[11px]">{isAutoPlaying ? 'Pausar' : 'Apresentar'}</span>
          </button>
        </div>

        {/* 16 Page Pills / Mini Scrubber */}
        <div className="flex items-center gap-1 overflow-x-auto max-w-full py-1 custom-scrollbar">
          {MAGAZINE_PAGES.map((p) => {
            const isSelected = p.pageNumber === currentPage;
            return (
              <button
                key={p.pageNumber}
                onClick={() => onPageChange(p.pageNumber)}
                title={`Página ${p.pageNumber}: ${p.title} (${p.moduleCode})`}
                className={`relative flex-shrink-0 w-7 h-7 rounded-lg text-xs font-mono transition-all cursor-pointer flex items-center justify-center ${
                  isSelected
                    ? 'bg-[#f3d178] text-black font-bold shadow-md shadow-amber-500/30 scale-110'
                    : 'bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white border border-white/5'
                }`}
              >
                {p.pageNumber}
              </button>
            );
          })}
        </div>

        {/* Prev / Next Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none text-xs text-gray-200 border border-white/10 transition-colors cursor-pointer"
          >
            <ChevronLeft size={16} />
            <span className="hidden sm:inline">Anterior</span>
          </button>

          <button
            onClick={handleNext}
            disabled={currentPage === total}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#f3d178]/20 hover:bg-[#f3d178]/30 disabled:opacity-30 disabled:pointer-events-none text-xs text-[#f3d178] font-medium border border-[#f3d178]/40 transition-colors cursor-pointer"
          >
            <span className="hidden sm:inline">Próxima</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </nav>
  );
};
