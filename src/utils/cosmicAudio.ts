// Web Audio API frequency oscillator and speech narration for Φ_FUD 11.9-BS

class CosmicAudioManager {
  private audioCtx: AudioContext | null = null;
  private currentOsc: OscillatorNode | null = null;
  private currentGain: GainNode | null = null;
  private ambientOsc: OscillatorNode | null = null;
  private ambientGain: GainNode | null = null;
  public isPlayingFrequency: boolean = false;
  public currentPlayingHz: number | string | null = null;

  private initContext() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      this.audioCtx = new AudioContextClass();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  public playTone(frequency: number | string, durationSeconds: number = 3.5) {
    this.stopTone();
    this.initContext();
    if (!this.audioCtx) return;

    let targetFreq = 432; // Default celestial harmonic
    if (typeof frequency === 'number') {
      if (frequency <= 20) {
        // Sub-audible (e.g. 7.83 Hz Schumann or 8 Hz) -> use audible harmonic carrier (e.g. 136.1 Hz Ohm or 40 Hz * 4) with modulation
        targetFreq = frequency * 16;
      } else if (frequency > 20000) {
        // Ultrasonic (e.g. 25000 Hz or 144000 Hz) -> scale down by musical octaves into audible range (e.g. 144000 / 256 = 562.5 Hz or 432 Hz)
        let f = frequency;
        while (f > 1500) {
          f /= 2;
        }
        targetFreq = f;
      } else {
        targetFreq = frequency;
      }
    } else if (frequency === '∞' || frequency === '∞²') {
      targetFreq = 528; // Love/Creation frequency
    }

    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(targetFreq, this.audioCtx.currentTime);

      // Smooth attack and release envelope
      const now = this.audioCtx.currentTime;
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.2, now + 0.3);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + durationSeconds);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + durationSeconds);

      this.currentOsc = osc;
      this.currentGain = gain;
      this.isPlayingFrequency = true;
      this.currentPlayingHz = frequency;

      setTimeout(() => {
        if (this.currentPlayingHz === frequency) {
          this.isPlayingFrequency = false;
          this.currentPlayingHz = null;
        }
      }, durationSeconds * 1000);
    } catch (e) {
      console.warn('Audio playback error:', e);
    }
  }

  public stopTone() {
    if (this.currentOsc) {
      try {
        this.currentOsc.stop();
        this.currentOsc.disconnect();
      } catch (e) {}
      this.currentOsc = null;
    }
    this.isPlayingFrequency = false;
    this.currentPlayingHz = null;
  }

  // Text to Speech
  public speakText(text: string, lang: string = 'pt-BR', onEnd?: () => void) {
    if (!('speechSynthesis' in window)) {
      console.warn('Speech synthesis not supported');
      return;
    }

    window.speechSynthesis.cancel();

    const cleanText = text.replace(/Φ_/g, 'Phi ').replace(/⊗/g, ' vezes ').replace(/\^/g, ' elevado a ').replace(/[\\_{}]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = lang;
    utterance.rate = 0.95;
    utterance.pitch = 1.0;

    if (onEnd) {
      utterance.onend = onEnd;
      utterance.onerror = onEnd;
    }

    window.speechSynthesis.speak(utterance);
  }

  public stopSpeech() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }
}

export const cosmicAudio = new CosmicAudioManager();
