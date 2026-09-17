import React from 'react';
import { X, BookOpen, Layers, Sparkles, ExternalLink, CheckCircle } from 'lucide-react';
import { MAGAZINE_METADATA } from '../data/magazineData';

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GuideModal: React.FC<GuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#0e0c15] border border-[#f3d178]/30 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#f3d178] uppercase">
              MANUAL EDITORIAL • Φ_FUD 11.9-BS/NF
            </span>
            <h3 className="text-xl font-serif text-white mt-1">Como Montar a Revista</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="mt-4 space-y-5 text-sm text-gray-300 overflow-y-auto pr-2 custom-scrollbar flex-1">
          {/* Introduction Card */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-amber-500/10 to-cyan-500/5 border border-amber-500/20 space-y-2">
            <h4 className="font-semibold text-amber-300 flex items-center gap-2">
              <Sparkles size={16} />
              Estrutura & Metodologia
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              A revista é composta por 16 páginas independentes e sequenciais. Cada página explica
              uma fração elementar da fórmula unificada. Juntas, formam o mapa visual completo da{' '}
              <strong className="text-white">Φ_FUD 11.9-BS/NF</strong> por Osmar Pontes.
            </p>
          </div>

          {/* 5 Steps */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              Passo a Passo de Produção
            </h4>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#f3d178]/20 text-[#f3d178] font-mono text-xs flex items-center justify-center font-bold">
                  1
                </span>
                <div>
                  <h5 className="font-medium text-white text-xs">Gere cada prancha separadamente</h5>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Utilize os botões de <strong>Prompt IA</strong> em cada página para copiar os
                    prompts em inglês ou português para o Meta AI, Midjourney, DALL·E 3 ou Leonardo.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 font-mono text-xs flex items-center justify-center font-bold">
                  2
                </span>
                <div>
                  <h5 className="font-medium text-white text-xs">Mantenha a coerência estilística</h5>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Fundo espacial cósmico profundo, linhas e filamentos em ciano e dourado,
                    estruturas de geometria sagrada e atmosfera científica 8K.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-300 font-mono text-xs flex items-center justify-center font-bold">
                  3
                </span>
                <div>
                  <h5 className="font-medium text-white text-xs">Monte no Canva, PowerPoint ou Google Slides</h5>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Crie um documento de 16 páginas (formato apresentação 16:9 ou prancha A4). Posicione a
                    arte conceitual como imagem de destaque em cada página.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 text-purple-300 font-mono text-xs flex items-center justify-center font-bold">
                  4
                </span>
                <div>
                  <h5 className="font-medium text-white text-xs">Insira os textos e fórmulas</h5>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Use caixas de texto com fundo escuro semi-transparente para dispor os parágrafos explicativos,
                    as equações de ressonância e as frequências de cada módulo.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-xs flex items-center justify-center font-bold">
                  5
                </span>
                <div>
                  <h5 className="font-medium text-white text-xs">Exporte como PDF ou Apresentação Interativa</h5>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Você também pode usar o botão <strong>Exportar Revista</strong> no topo deste applet para gerar
                    o PDF impresso imediato com todas as 16 páginas diagramadas!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy / Axiom */}
          <div className="p-4 rounded-xl bg-[#060509] border border-white/10 text-center space-y-2">
            <span className="text-xs font-mono text-[#f3d178] uppercase tracking-widest block">
              Princípio Filosófico Unificado
            </span>
            <div className="font-serif text-base text-gray-200 space-y-1">
              <p>Tudo é 1 bit.</p>
              <p>Tudo é nó.</p>
              <p>Tudo é malha.</p>
              <p>Tudo é bolha.</p>
              <p className="text-[#f3d178]">Tudo é fractal.</p>
            </div>
            <div className="font-mono text-xs text-cyan-300 pt-2 border-t border-white/10">
              {MAGAZINE_METADATA.signatureFormula}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-5 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#f3d178] hover:bg-amber-400 text-black font-semibold text-xs transition-colors cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
