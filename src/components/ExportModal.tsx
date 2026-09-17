import React, { useState } from 'react';
import { X, Printer, Download, FileText, Code, Check, Sparkles } from 'lucide-react';
import { MAGAZINE_PAGES, MAGAZINE_METADATA } from '../data/magazineData';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPageNumber: number;
}

export const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose, currentPageNumber }) => {
  const [copiedAll, setCopiedAll] = useState(false);

  if (!isOpen) return null;

  const handlePrintPDF = () => {
    onClose();
    setTimeout(() => {
      window.print();
    }, 300);
  };

  const handleDownloadMarkdown = () => {
    let md = `# ${MAGAZINE_METADATA.title}\n`;
    md += `## ${MAGAZINE_METADATA.subtitle}\n\n`;
    md += `**Autor:** ${MAGAZINE_METADATA.author} | **ORCID:** ${MAGAZINE_METADATA.orcid} | **DOI:** ${MAGAZINE_METADATA.doi}\n\n`;
    md += `> ${MAGAZINE_METADATA.motto}\n\n---\n\n`;

    MAGAZINE_PAGES.forEach((page) => {
      md += `## PÁGINA ${page.pageNumber} — ${page.title} (${page.moduleCode})\n\n`;
      if (page.subtitle) md += `*${page.subtitle}*\n\n`;

      page.text.forEach((p) => {
        md += `${p}\n\n`;
      });

      if (page.equations && page.equations.length > 0) {
        md += `### Equações:\n`;
        page.equations.forEach((eq) => {
          md += `$$\n${eq}\n$$\n\n`;
        });
      }

      if (page.scientificNotes && page.scientificNotes.length > 0) {
        md += `### Notas Científicas:\n`;
        page.scientificNotes.forEach((n) => {
          md += `- **${n.label}:** ${n.value} ${n.detail ? `(${n.detail})` : ''}\n`;
        });
        md += `\n`;
      }

      md += `### Prompts de Geração de Imagem:\n\n`;
      md += `**Prompt EN:**\n\`\`\`\n${page.promptEN}\n\`\`\`\n\n`;
      md += `**Prompt PT:**\n\`\`\`\n${page.promptPT}\n\`\`\`\n\n`;
      md += `---\n\n`;
    });

    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Revista_Visual_Phi_FUD_11.9_Osmar_Pontes.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadPromptsOnly = () => {
    let txt = `======================================================\n`;
    txt += `${MAGAZINE_METADATA.title} — PROMPTS DE ARTE CONCEITUAL\n`;
    txt += `Autor: ${MAGAZINE_METADATA.author} | DOI: ${MAGAZINE_METADATA.doi}\n`;
    txt += `======================================================\n\n`;

    MAGAZINE_PAGES.forEach((page) => {
      txt += `--- PÁGINA ${page.pageNumber} | ${page.title} [${page.moduleCode}] ---\n\n`;
      txt += `[PROMPT EN - Midjourney / Leonardo / DALL-E]:\n${page.promptEN}\n\n`;
      txt += `[PROMPT PT - Meta AI / Bing]:\n${page.promptPT}\n\n`;
      txt += `------------------------------------------------------\n\n`;
    });

    const blob = new Blob([txt], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Prompts_Revista_Phi_FUD_16_Paginas.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleCopyAllPrompts = () => {
    let txt = '';
    MAGAZINE_PAGES.forEach((page) => {
      txt += `Página ${page.pageNumber} (${page.title}):\n${page.promptEN}\n\n`;
    });
    navigator.clipboard.writeText(txt);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-[#0e0c15] border border-[#f3d178]/30 rounded-2xl p-6 shadow-2xl overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#06b6d4]/10 blur-3xl pointer-events-none" />

        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#f3d178] uppercase">
              EXPORTAÇÃO & MONTAGEM DA REVISTA
            </span>
            <h3 className="text-xl font-serif text-white mt-1">Exportar Φ_FUD 11.9-BS</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mt-5 space-y-3 text-sm">
          {/* Option 1: PDF Print */}
          <button
            onClick={handlePrintPDF}
            className="w-full flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-[#f3d178]/10 border border-white/10 hover:border-[#f3d178]/40 transition-all text-left group cursor-pointer"
          >
            <div className="p-3 rounded-lg bg-[#f3d178]/10 text-[#f3d178] group-hover:scale-110 transition-transform">
              <Printer size={22} />
            </div>
            <div>
              <h4 className="font-medium text-white group-hover:text-[#f3d178] transition-colors">
                Imprimir / Salvar como PDF Completo
              </h4>
              <p className="text-xs text-gray-400 mt-0.5">
                Gera layout editorial pronto para impressão ou PDF com as 16 páginas.
              </p>
            </div>
          </button>

          {/* Option 2: Markdown Full */}
          <button
            onClick={handleDownloadMarkdown}
            className="w-full flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/40 transition-all text-left group cursor-pointer"
          >
            <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
              <FileText size={22} />
            </div>
            <div>
              <h4 className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                Exportar Texto & Equações (.md)
              </h4>
              <p className="text-xs text-gray-400 mt-0.5">
                Arquivo Markdown completo com todo o conteúdo para Canva, Notion ou PowerPoint.
              </p>
            </div>
          </button>

          {/* Option 3: Prompts TXT */}
          <button
            onClick={handleDownloadPromptsOnly}
            className="w-full flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-amber-500/10 border border-white/10 hover:border-amber-500/40 transition-all text-left group cursor-pointer"
          >
            <div className="p-3 rounded-lg bg-amber-500/10 text-amber-400 group-hover:scale-110 transition-transform">
              <Download size={22} />
            </div>
            <div>
              <h4 className="font-medium text-white group-hover:text-amber-400 transition-colors">
                Baixar Pacote de Prompts (.txt)
              </h4>
              <p className="text-xs text-gray-400 mt-0.5">
                Os 16 prompts em Português e Inglês para gerar no Meta AI, Midjourney ou Leonardo.
              </p>
            </div>
          </button>

          {/* Option 4: Quick Copy All Prompts */}
          <button
            onClick={handleCopyAllPrompts}
            className="w-full flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-emerald-500/10 border border-white/10 hover:border-emerald-500/40 transition-all text-left group cursor-pointer"
          >
            <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
              {copiedAll ? <Check size={22} /> : <Code size={22} />}
            </div>
            <div>
              <h4 className="font-medium text-white group-hover:text-emerald-400 transition-colors">
                {copiedAll ? 'Todos os Prompts Copiados!' : 'Copiar Todos os Prompts EN para Área de Transferência'}
              </h4>
              <p className="text-xs text-gray-400 mt-0.5">
                Ideal para alimentar geradores em lote e ferramentas de arte generativa.
              </p>
            </div>
          </button>
        </div>

        <div className="mt-5 pt-3 border-t border-white/10 text-center">
          <button
            onClick={onClose}
            className="text-xs text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
