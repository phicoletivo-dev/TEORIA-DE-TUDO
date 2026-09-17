import React, { useState } from 'react';
import {
  Volume2,
  VolumeX,
  Sparkles,
  Copy,
  Upload,
  Radio,
  FileCode,
  Check,
  Maximize2,
  Play,
  Pause,
  ExternalLink,
} from 'lucide-react';
import { MagazinePageData } from '../types';
import { CosmicVisualizer } from './CosmicVisualizer';
import { cosmicAudio } from '../utils/cosmicAudio';

interface MagazinePageCardProps {
  page: MagazinePageData;
  customImageUrl?: string;
  onOpenPrompt: () => void;
  onGenerateAI: () => void;
  onUploadImage: (file: File) => void;
  isGenerating?: boolean;
  layoutMode?: 'single' | 'spread' | 'print';
}

export const MagazinePageCard: React.FC<MagazinePageCardProps> = ({
  page,
  customImageUrl,
  onOpenPrompt,
  onGenerateAI,
  onUploadImage,
  isGenerating = false,
  layoutMode = 'single',
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeFrequencyHz, setActiveFrequencyHz] = useState<number | string | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleToggleNarration = () => {
    if (isPlayingAudio) {
      cosmicAudio.stopSpeech();
      setIsPlayingAudio(false);
    } else {
      const fullNarration = `${page.title}. ${page.subtitle || ''}. ${page.text.join(' ')}`;
      setIsPlayingAudio(true);
      cosmicAudio.speakText(fullNarration, 'pt-BR', () => {
        setIsPlayingAudio(false);
      });
    }
  };

  const handlePlayFrequency = (hz: number | string) => {
    if (activeFrequencyHz === hz) {
      cosmicAudio.stopTone();
      setActiveFrequencyHz(null);
    } else {
      setActiveFrequencyHz(hz);
      cosmicAudio.playTone(hz, 4.0);
      setTimeout(() => {
        setActiveFrequencyHz((current) => (current === hz ? null : current));
      }, 4000);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onUploadImage(e.target.files[0]);
    }
  };

  const isCover = page.pageNumber === 1;
  const isBackCover = page.pageNumber === 16;

  return (
    <article
      id={`magazine-page-${page.pageNumber}`}
      className={`relative w-full rounded-2xl bg-[#0b0911] border border-[#f3d178]/25 shadow-2xl overflow-hidden flex flex-col ${
        layoutMode === 'print' ? 'print-page' : 'min-h-[640px] max-w-6xl mx-auto my-3'
      }`}
    >
      {/* Decorative Golden / Cyan subtle top bar */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#f3d178]/50 to-transparent" />

      {/* Page Header */}
      <header className="px-6 py-4 flex items-center justify-between border-b border-white/10 bg-[#0e0c15]/60 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#f3d178]/10 text-[#f3d178] border border-[#f3d178]/30 font-semibold">
            PÁGINA {page.pageNumber.toString().padStart(2, '0')} / 16
          </span>
          <span className="font-mono text-xs text-cyan-400 tracking-wider">
            {page.moduleCode}
          </span>
        </div>

        {/* Quick Toolbar */}
        <div className="flex items-center gap-2 no-print">
          {/* TTS Narration */}
          <button
            onClick={handleToggleNarration}
            title={isPlayingAudio ? 'Parar leitura' : 'Ouvir leitura da prancha'}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              isPlayingAudio
                ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/30'
                : 'bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10'
            }`}
          >
            {isPlayingAudio ? <VolumeX size={14} /> : <Volume2 size={14} />}
            <span className="hidden sm:inline">{isPlayingAudio ? 'Parar Áudio' : 'Ouvir Prancha'}</span>
          </button>

          {/* Prompt Modal Button */}
          <button
            onClick={onOpenPrompt}
            title="Ver prompts para Meta AI / Midjourney"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-medium transition-all cursor-pointer"
          >
            <Copy size={14} />
            <span className="hidden sm:inline">Prompt IA</span>
          </button>

          {/* Generate AI Art */}
          <button
            onClick={onGenerateAI}
            disabled={isGenerating}
            title="Gerar visual desta prancha com Gemini"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-500/20 to-yellow-500/20 hover:from-amber-500/30 hover:to-yellow-500/30 text-amber-300 border border-amber-500/40 text-xs font-medium transition-all cursor-pointer disabled:opacity-50"
          >
            <Sparkles size={14} />
            <span className="hidden sm:inline">{isGenerating ? 'Gerando...' : 'Gerar com IA'}</span>
          </button>

          {/* Custom Upload */}
          <button
            onClick={() => fileInputRef.current?.click()}
            title="Carregar imagem gerada no Midjourney ou Meta AI"
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <Upload size={14} />
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
      </header>

      {/* Main Content Grid: Visualizer on one side, Editorial Text on the other */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 lg:p-8">
        {/* Visualizer Column (5 or 6 cols) */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="relative aspect-square w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black group">
            <CosmicVisualizer
              type={page.visualizationType}
              pageNumber={page.pageNumber}
              customImageUrl={customImageUrl}
            />

            {/* Overlay hint if using procedural */}
            {!customImageUrl && (
              <div className="absolute top-3 left-3 px-2 py-1 rounded bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-cyan-300 flex items-center gap-1.5 pointer-events-none">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                SIMULADOR CÓSMICO INTERATIVO
              </div>
            )}
          </div>

          {/* Prompt caption preview */}
          <div className="mt-3 flex items-center justify-between text-xs text-gray-400 px-1 font-mono">
            <span className="truncate max-w-[280px] sm:max-w-md opacity-75">
              Arte: {page.promptEN.slice(0, 60)}...
            </span>
            <button
              onClick={onOpenPrompt}
              className="text-[#f3d178] hover:underline cursor-pointer flex-shrink-0 ml-2"
            >
              Ver Prompt Completo →
            </button>
          </div>
        </div>

        {/* Editorial Text Column (6 or 7 cols) */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-5">
          <div>
            {/* Title & Subtitle */}
            <div className="space-y-1.5 mb-4">
              <h2 className="text-2xl sm:text-3xl font-serif tracking-wide text-white font-medium">
                {page.title}
              </h2>
              {page.subtitle && (
                <p className="text-sm font-sans text-[#f3d178]/90 italic tracking-wider">
                  {page.subtitle}
                </p>
              )}
              {page.authorInfo && (
                <p className="text-xs font-mono text-gray-400 pt-1">
                  {page.authorInfo}
                </p>
              )}
            </div>

            {/* Paragraphs */}
            <div className="space-y-3 text-sm text-gray-300 leading-relaxed font-sans">
              {page.text.map((paragraph, idx) => (
                <p key={idx} className="text-justify">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Equations Box */}
            {page.equations && page.equations.length > 0 && (
              <div className="mt-4 p-4 rounded-xl bg-[#060509]/90 border border-[#f3d178]/25 space-y-2">
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#f3d178] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#f3d178]" />
                  EQUAÇÕES FUNDAMENTAIS
                </div>
                {page.equations.map((eq, i) => (
                  <div
                    key={i}
                    className="font-mono text-xs sm:text-sm text-cyan-200/95 py-1 px-2.5 rounded bg-black/50 border border-white/5 overflow-x-auto select-all"
                  >
                    {eq}
                  </div>
                ))}
              </div>
            )}

            {/* Scientific Notes / Breakdown */}
            {page.scientificNotes && page.scientificNotes.length > 0 && (
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {page.scientificNotes.map((note, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-white/5 border border-white/5"
                  >
                    <span className="font-semibold text-amber-300/90 block">
                      {note.label}
                    </span>
                    <span className="text-gray-200">{note.value}</span>
                    {note.detail && (
                      <span className="text-[10px] text-gray-400 block mt-0.5">
                        {note.detail}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Frequencies / Harmonic Resonator */}
          {page.frequencies && page.frequencies.length > 0 && (
            <div className="pt-3 border-t border-white/10">
              <div className="text-xs font-mono text-gray-400 mb-2 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Radio size={13} className="text-cyan-400" />
                  RESSONÂNCIA CÓSMICA / FREQUÊNCIAS (OUVIR)
                </span>
                <span className="text-[10px] text-gray-500">Clique para sintonizar</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {page.frequencies.map((freq, idx) => {
                  const isActive = activeFrequencyHz === freq.hz;
                  return (
                    <button
                      key={idx}
                      onClick={() => handlePlayFrequency(freq.hz)}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono transition-all cursor-pointer ${
                        isActive
                          ? 'bg-cyan-400 text-black font-bold shadow-lg shadow-cyan-400/40 scale-105'
                          : 'bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 hover:border-cyan-400/50'
                      }`}
                    >
                      <Play size={10} className={isActive ? 'fill-black' : ''} />
                      <span>{freq.hz} Hz</span>
                      <span className="text-[10px] opacity-70">({freq.label})</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Page Footer */}
      <footer className="px-6 py-3 border-t border-white/5 bg-[#08070d] flex items-center justify-between text-xs text-gray-500 font-mono">
        <span>Φ_FUD 11.9-BS/NF • Osmar Pontes</span>
        <span>Zenodo DOI: 10.5281/zenodo.22800694</span>
      </footer>
    </article>
  );
};
