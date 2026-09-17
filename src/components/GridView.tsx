import React from 'react';
import { MAGAZINE_PAGES } from '../data/magazineData';
import { CosmicVisualizer } from './CosmicVisualizer';

interface GridViewProps {
  onSelectPage: (pageNumber: number) => void;
  customImages: Record<number, string>;
}

export const GridView: React.FC<GridViewProps> = ({ onSelectPage, customImages }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <span className="font-mono text-xs text-[#f3d178] uppercase tracking-widest">
          ÍNDICE VISUAL DAS 16 PRANCHAS
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif text-white font-medium mt-1">
          Estrutura Completa da Φ_FUD 11.9-BS/NF
        </h2>
        <p className="text-xs text-gray-400 mt-1 max-w-xl mx-auto">
          Clique em qualquer prancha para ler os fundamentos, equações e copiar os prompts de geração de imagem.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {MAGAZINE_PAGES.map((page) => {
          return (
            <div
              key={page.pageNumber}
              onClick={() => onSelectPage(page.pageNumber)}
              className="group relative rounded-xl bg-[#0b0911] border border-white/10 hover:border-[#f3d178]/60 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col shadow-lg hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1"
            >
              {/* Thumbnail Stage */}
              <div className="relative aspect-video w-full overflow-hidden bg-black">
                <CosmicVisualizer
                  type={page.visualizationType}
                  pageNumber={page.pageNumber}
                  customImageUrl={customImages[page.pageNumber]}
                />
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm border border-white/10 text-[10px] font-mono text-[#f3d178]">
                  PÁG. {page.pageNumber.toString().padStart(2, '0')}
                </div>
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/40 text-[10px] font-mono text-cyan-300">
                  {page.moduleCode}
                </div>
              </div>

              {/* Info Card */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-sm font-semibold text-white group-hover:text-[#f3d178] transition-colors line-clamp-1">
                    {page.title}
                  </h3>
                  {page.subtitle && (
                    <p className="text-[11px] text-gray-400 italic line-clamp-1 mt-0.5">
                      {page.subtitle}
                    </p>
                  )}
                  <p className="text-xs text-gray-400 mt-2 line-clamp-2 leading-relaxed">
                    {page.text[0]}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-cyan-400">
                  <span>Abrir Prancha</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
