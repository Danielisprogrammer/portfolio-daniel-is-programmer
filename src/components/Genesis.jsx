import React from 'react';
import { Sparkles, Globe, Award, Rocket } from 'lucide-react';

export const Genesis = () => {
  return (
    <section id="genesis" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ background: 'rgba(236, 72, 153, 0.1)', color: '#ec4899', border: '1px solid rgba(236, 72, 153, 0.2)' }}>
          <Sparkles size={14} />
          <span>Vision & Initiative</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6">
          L'Initiative Genesy Academy
        </h2>
        <p className="text-lg" style={{ color: 'var(--text-muted)' }}>
          Bien plus qu'un projet : une vision technologique et sociale née à Yaoundé pour encardrer, éduquer et connecter les talents de demain.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="custom-card p-8 space-y-6" style={{ background: 'var(--card-bg)' }}>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-pink-500/20 text-pink-400">
                <Rocket size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Pourquoi Genesis ?</h3>
                <span className="text-xs text-pink-400 font-mono">Innovation & Impact Local</span>
              </div>
            </div>

            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Genesis Academy incarne ma volonté d'utiliser mes competences tant sur le plan .......
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t" style={{ borderColor: 'var(--card-border)' }}>
              <div className="flex items-start gap-3">
                <Award size={20} className="text-indigo-400 shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold">Mentorat & Tuteur</h4>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Préparation rigoureuse aux examens officiels et formation pratique.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe size={20} className="text-emerald-400 shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold">Ancrage Culturel</h4>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Outils numériques pensés pour nos réalités locales et linguistiques.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center">
          <div className="custom-card p-6 w-full max-w-sm rounded-3xl text-center relative overflow-hidden group border border-pink-500/20" style={{ background: 'var(--card-bg)' }}>
            <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 via-transparent to-purple-500/10 pointer-events-none"></div>

            <div className="relative z-10 space-y-4">
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-pink-500/20 text-pink-300">
                OFFICIEL • FLYER GENESIS
              </span>

              <div className="h-80 w-full rounded-2xl bg-gradient-to-br from-slate-900 via-purple-950 to-indigo-950 border border-white/10 flex flex-col items-center justify-center p-6 relative overflow-hidden shadow-inner">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-500/10 via-transparent to-transparent"></div>
                
                <div className="relative z-10 space-y-3">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-pink-500 to-indigo-500 flex items-center justify-center text-white shadow-xl font-black text-xl">
                    G
                  </div>
                  <h4 className="text-lg font-black text-white tracking-wide">GENESIS INITIATIVE</h4>
                  <p className="text-xs text-pink-200 font-mono">Innover, Entreprendre, Réussir.</p>
                  <div className="pt-2">
                    <span className="inline-block text-[10px] bg-black/40 px-3 py-1 rounded-full text-indigo-300 border border-white/10">
                      Yaoundé • Ngousso
                    </span>
                  </div>
                </div>
              </div>

              <a href="#contact" className="w-full btn-primary py-3 flex items-center justify-center gap-2 text-xs font-bold">
                <Sparkles size={16} />
                <span>Rejoindre ou Collaborer</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
