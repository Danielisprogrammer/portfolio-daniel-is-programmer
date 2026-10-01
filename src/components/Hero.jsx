import React, { useState, useEffect } from 'react';
import { Terminal, ArrowRight, Sparkles } from 'lucide-react';
import { translations } from '../data/translations';

export const Hero = () => {
  const [lang] = useState(() => localStorage.getItem('lang') || 'fr');
  const t = translations[lang].hero;

  const [typedText, setTypedText] = useState('');
  const fullText = "Daniel Vahid Kengne";
  const [index, setIndex] = useState(0);

  const playBeep = () => {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.03, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.05);
    } catch (e) {}
  };

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
        playBeep();
      }, 120);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section id="about" className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold" style={{ background: 'rgba(99, 102, 241, 0.1)', color: 'var(--accent)', border: '1px solid rgba(99, 102, 241, 0.2)' }}>
            <Terminal size={14} />
            <span>Étudiant L3 Informatique • Université de Yaoundé 1</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
              Salut, je suis <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-mono border-r-4 border-indigo-500 pr-1 animate-pulse">
                {typedText}
              </span>
            </h1>
            <p className="text-lg sm:text-xl font-medium" style={{ color: 'var(--text-muted)' }}>
              Junior Fullstack Developer & Encadreur scolaire. Je conçois des architectures web modernes, j'aide les jeunes eleves dans leurs cursus scolaire.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <a href="#projects" className="btn-primary py-4 px-8 text-sm font-bold flex items-center gap-2">
              <span>Explorer mes projets</span>
              <ArrowRight size={18} />
            </a>
            <a href="#genesis" className="px-8 py-4 rounded-xl text-sm font-bold transition-all hover:scale-105 flex items-center gap-2" style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', color: 'var(--text-primary)' }}>
              <Sparkles size={18} className="text-indigo-400" />
              <span>Découvrir GENESIS ACADEMY</span>
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8 border-t" style={{ borderColor: 'var(--card-border)' }}>
            <div>
              <span className="block text-2xl font-black text-indigo-500">10+</span>
              <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Projets Web</span>
            </div>
            <div>
              <span className="block text-2xl font-black text-purple-500">L3</span>
              <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Informatique UY1</span>
            </div>
            <div>
              <span className="block text-2xl font-black text-emerald-500">100%</span>
              <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Détermination</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-3xl blur-xl opacity-30 transform rotate-3"></div>
            
            <div className="custom-card p-6 relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl" style={{ background: 'var(--card-bg)' }}>
              <div className="flex items-center justify-between mb-4 pb-3 border-b" style={{ borderColor: 'var(--card-border)' }}>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                </div>
                <span className="text-xs font-mono opacity-60">Daniel is Programmer</span>
              </div>

              <div className="relative h-72 w-full rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-950 to-slate-900 flex items-center justify-center group">
                <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>
                
                <div className="relative z-10 text-center p-6 space-y-3">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 p-1 shadow-xl flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-2xl font-mono font-bold text-white">
                      DK
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Daniel Vahid Kengne</h3>
                    <p className="text-xs text-indigo-300 font-mono">Yaoundé, Ngousso — Cameroun</p>
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 right-3 z-20 flex justify-center gap-2">
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-black/60 text-indigo-300 backdrop-blur-md border border-white/10">
                    Ubuntu / Linux
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-black/60 text-purple-300 backdrop-blur-md border border-white/10">
                    Fullstack Dev
                  </span>
                </div>
              </div>

              <div className="mt-4 text-center">
                <p className="text-xs italic" style={{ color: 'var(--text-muted)' }}>
                  "Transformer chaque ligne de code en impact réel."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
