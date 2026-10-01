import React, { useState, useEffect } from 'react';
import { Terminal, ArrowRight, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Daniel Vahid Kengne";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section id="hero" className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 dark:bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
            <Terminal size={14} />
            <span>Étudiant L2 Informatique • Université de Yaoundé 1</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight text-slate-900 dark:text-white">
              Salut, je suis <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-mono">
                {typedText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
            <p className="text-lg sm:text-xl font-medium text-slate-600 dark:text-slate-400 max-w-2xl">
              Développeur Fullstack Junior & Tuteur Académique. Je conçois des architectures web modernes
              et j'aide les jeunes élèves dans leur cursus scolaire.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <a href="#projects" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 transition-all">
              <span>Explorer mes projets</span>
              <ArrowRight size={18} />
            </a>
            <a href="#genesis" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-indigo-500/50 hover:scale-105 transition-all shadow-lg">
              <Sparkles size={18} className="text-pink-500" />
              <span>Découvrir Genesis Academy</span>
            </a>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
            <a href="https://github.com/Danielisprogrammer" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-indigo-500 hover:border-indigo-500/50 transition-all">
              <GithubIcon size={20} />
            </a>
            <a href="https://www.linkedin.com/in/daniel-kengne" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-indigo-500 hover:border-indigo-500/50 transition-all">
              <LinkedinIcon size={20} />
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-200 dark:border-slate-800">
            <div>
              <span className="block text-2xl sm:text-3xl font-black text-indigo-500">10+</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">Projets Web</span>
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl font-black text-purple-500">L2</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">Informatique UY1</span>
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl font-black text-emerald-500">100%</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">Détermination</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-3xl blur-xl opacity-30 transform rotate-3"></div>

            <div className="relative bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                </div>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Daniel is Programmer</span>
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
                <p className="text-xs italic text-slate-500 dark:text-slate-400">
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
