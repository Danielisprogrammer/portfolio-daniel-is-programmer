import React, { useState } from 'react';
import { translations } from '../data/translations';
import { Terminal, Cpu, BookOpen, Award } from 'lucide-react';

export const About = () => {
  const [lang] = useState(() => localStorage.getItem('lang') || 'fr');
  const t = translations[lang].about;

  return (
    <section id="about" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ background: 'rgba(99, 102, 241, 0.1)', color: 'var(--accent)', border: '1px solid var(--card-border-hover)' }}>
          <Terminal size={14} />
          <span>Daniel Vahid Kengne</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
          {t.title}
        </h2>
        <p className="text-lg" style={{ color: 'var(--text-muted)' }}>
          {t.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Carte Avatar / Badge visuel style terminal */}
        <div className="lg:col-span-5 custom-card p-8 relative group overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="flex items-center gap-3 pb-6 mb-6 border-b" style={{ borderColor: 'var(--card-border)' }}>
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <span className="text-xs font-mono ml-2 opacity-60">ubuntu@daniel-latitude:~</span>
          </div>

          <div className="space-y-4 font-mono text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            <p><span className="text-indigo-400">const</span> profile = &#123;</p>
            <p className="pl-4">name: <span className="text-emerald-400">"Daniel Vahid Kengne"</span>,</p>
            <p className="pl-4">role: <span className="text-emerald-400">"Fullstack Developer"</span>,</p>
            <p className="pl-4">university: <span className="text-emerald-400">"Université de Yaoundé 1"</span>,</p>
            <p className="pl-4">os: <span className="text-emerald-400">"Linux Ubuntu / Dual-boot"</span>,</p>
            <p className="pl-4">focus: <span className="text-emerald-400">["React", "Node.js", "TypeScript", "PostgreSQL"]</span></p>
            <p>&#125;;</p>
          </div>

          <div className="mt-8 pt-6 border-t flex flex-wrap gap-3" style={{ borderColor: 'var(--card-border)' }}>
            <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">L2 Informatique</span>
            <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20">Fullstack Trainee</span>
            <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Yaoundé, CM</span>
          </div>
        </div>

        {/* Description textuelle */}
        <div className="lg:col-span-7 space-y-6">
          <div className="custom-card p-8">
            <p className="text-base sm:text-lg leading-relaxed mb-6" style={{ color: 'var(--text-primary)' }}>
              {t.desc1}
            </p>
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              {t.desc2}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="custom-card p-4 text-center">
              <Cpu className="mx-auto mb-2 text-indigo-500" size={24} />
              <h4 className="font-bold text-sm">Clean Code</h4>
              <span className="text-xs opacity-60">Architecture robuste</span>
            </div>
            <div className="custom-card p-4 text-center">
              <BookOpen className="mx-auto mb-2 text-indigo-500" size={24} />
              <h4 className="font-bold text-sm">Tutorat</h4>
              <span className="text-xs opacity-60">Examens officiels</span>
            </div>
            <div className="custom-card p-4 text-center col-span-2 sm:col-span-1">
              <Award className="mx-auto mb-2 text-indigo-500" size={24} />
              <h4 className="font-bold text-sm">Open Source</h4>
              <span className="text-xs opacity-60">GitHub Active</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
