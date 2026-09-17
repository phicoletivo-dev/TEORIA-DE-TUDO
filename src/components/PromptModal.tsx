import React, { useState } from 'react';
import { X, Copy, Check, Sparkles, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { MagazinePageData } from '../types';

interface PromptModalProps {
  page: MagazinePageData;
  isOpen: boolean;
  onClose: () => void;
  onGenerateWithAI?: () => void;
  isGenerating?: boolean;
}

export const PromptModal: React.FC<PromptModalProps> = ({
  page,
  isOpen,
  onClose,
  onGenerateWithAI,
  isGenerating = false,
}) => {
  const [copiedType, setCopiedType] = useState<'EN' | 'PT' | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, type: 'EN' | 'PT') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#0e0c15] border border-[#f3d178]/30 rounded-2xl p-6 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#f59e0b]/10 blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#f3d178] uppercase">
              PROMPT DE ARTE CONCEITUAL • PÁG. {page.pageNumber}
            </span>
            <h3 className="text-xl font-serif text-white mt-1">
              {page.title} ({page.moduleCode})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mt-4 text-sm text-gray-300 space-y-4 overflow-y-auto pr-1 custom-scrollbar flex-1">
          <div className="p-3 bg-[#171422] rounded-xl border border-white/5 text-xs text-amber-200/90 leading-relaxed">
            <span className="font-semibold text-amber-400">Dica de Geração:</span> Gere a imagem pura sem textos nas ferramentas de IA (Meta AI, Midjourney, DALL·E, Leonardo) e adicione as caixas explicativas no Canva ou PowerPoint.
          </div>

          {/* Prompt EN */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                Prompt em Inglês (Midjourney, DALL·E 3, Leonardo)
              </span>
              <button
                onClick={() => handleCopy(page.promptEN, 'EN')}
                className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-all cursor-pointer"
              >
                {copiedType === 'EN' ? (
                  <>
                    <Check size={14} className="text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copiar Prompt EN</span>
                  </>
                )}
              </button>
            </div>
            <div className="p-3.5 bg-black/60 rounded-xl border border-white/10 font-mono text-xs text-gray-200 leading-relaxed select-all">
              {page.promptEN}
            </div>
          </div>

          {/* Prompt PT */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                Prompt em Português (Meta AI, ChatGPT / Bing)
              </span>
              <button
                onClick={() => handleCopy(page.promptPT, 'PT')}
                className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 transition-all cursor-pointer"
              >
                {copiedType === 'PT' ? (
                  <>
                    <Check size={14} className="text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copiar Prompt PT</span>
                  </>
                )}
              </button>
            </div>
            <div className="p-3.5 bg-black/60 rounded-xl border border-white/10 font-mono text-xs text-gray-200 leading-relaxed select-all">
              {page.promptPT}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
          {onGenerateWithAI && (
            <button
              onClick={onGenerateWithAI}
              disabled={isGenerating}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-black font-semibold text-sm shadow-lg shadow-amber-500/20 transition-all cursor-pointer disabled:opacity-50"
            >
              <Sparkles size={16} />
              <span>{isGenerating ? 'Gerando com IA...' : 'Gerar Imagem com Gemini'}</span>
            </button>
          )}
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm transition-colors cursor-pointer ml-auto"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
