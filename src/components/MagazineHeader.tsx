import React, { useState } from 'react';
import {
  BookOpen,
  LayoutGrid,
  Columns2,
  Tv,
  Download,
  HelpCircle,
  Maximize,
  Minimize,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { ViewMode } from '../types';
import { MAGAZINE_METADATA } from '../data/magazineData';

interface MagazineHeaderProps {
  viewMode: ViewMode;
  onChangeViewMode: (mode: ViewMode) => void;
  onOpenExport: () => void;
  onOpenGuide: () => void;
  currentPage: number;
  totalPages: number;
}

export const MagazineHeader: React.FC<MagazineHeaderProps> = ({
  viewMode,
  onChangeViewMode,
  onOpenExport,
  onOpenGuide,
  currentPage,
  totalPages,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#08070d]/90 backdrop-blur-md border-b border-[#f3d178]/20 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand & Author */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#f59e0b] to-[#b45309] flex items-center justify-center font-serif text-black font-bold text-lg shadow-lg shadow-amber-500/20">
            Φ
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-sm sm:text-base font-serif font-bold text-white tracking-wide">
                REVISTA VISUAL — Φ_FUD 11.9-BS/NF
              </h1>
              <span className="hidden md:inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                TEORIA DE TUDO
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs text-gray-400 font-mono">
              <span>{MAGAZINE_METADATA.author}</span>
              <span className="hidden sm:inline opacity-40">•</span>
              <a
                href="https://doi.org/10.5281/zenodo.22800694"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1 text-[#f3d178] hover:underline"
              >
                <span>DOI: 10.5281/zenodo.22800694</span>
                <ExternalLink size={10} />
              </a>
            </div>
          </div>
        </div>

        {/* View Mode Selectors */}
        <div className="flex items-center gap-1 p-1 bg-white/5 rounded-xl border border-white/10 text-xs">
          <button
            onClick={() => onChangeViewMode('single')}
            title="Prancha Única"
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all cursor-pointer ${
              viewMode === 'single'
                ? 'bg-[#f3d178] text-black font-semibold shadow'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            <BookOpen size={14} />
            <span className="hidden sm:inline">Página Única</span>
          </button>

          <button
            onClick={() => onChangeViewMode('spread')}
            title="Prancha Dupla (Formato Revista)"
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all cursor-pointer ${
              viewMode === 'spread'
                ? 'bg-[#f3d178] text-black font-semibold shadow'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            <Columns2 size={14} />
            <span className="hidden sm:inline">Páginas Duplas</span>
          </button>

          <button
            onClick={() => onChangeViewMode('grid')}
            title="Grade de 16 Páginas"
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all cursor-pointer ${
              viewMode === 'grid'
                ? 'bg-[#f3d178] text-black font-semibold shadow'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            <LayoutGrid size={14} />
            <span className="hidden sm:inline">Todas as 16</span>
          </button>

          <button
            onClick={() => onChangeViewMode('presentation')}
            title="Modo Apresentação (Slides)"
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all cursor-pointer ${
              viewMode === 'presentation'
                ? 'bg-[#f3d178] text-black font-semibold shadow'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            <Tv size={14} />
            <span className="hidden sm:inline">Apresentação</span>
          </button>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Guide / How to mount */}
          <button
            onClick={onOpenGuide}
            title="Guia de montagem no Canva / Meta AI"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 text-xs font-medium transition-all cursor-pointer"
          >
            <HelpCircle size={14} className="text-[#f3d178]" />
            <span className="hidden lg:inline">Como Montar</span>
          </button>

          {/* Export Menu */}
          <button
            onClick={onOpenExport}
            title="Exportar PDF, Prompts ou Slides"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:from-[#f59e0b]/90 hover:to-[#d97706]/90 text-black text-xs font-bold shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
          >
            <Download size={14} />
            <span className="hidden sm:inline">Exportar Revista</span>
          </button>

          {/* Fullscreen */}
          <button
            onClick={toggleFullscreen}
            title="Alternar Tela Cheia"
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
          </button>
        </div>
      </div>
    </header>
  );
};
