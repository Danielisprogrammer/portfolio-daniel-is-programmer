import React from 'react';
import { Terminal, Cpu, BookOpen, Award, MapPin, Briefcase } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
          <Terminal size={14} />
          <span>Parcours & Formation</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white">
          À Propos de Moi
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Passionné par l'innovation logicielle, l'algorithmique et le développement web haut de gamme.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Carte Avatar / Badge visuel style terminal */}
        <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-2xl p-8 relative group overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl">
          <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="flex items-center gap-3 pb-6 mb-6 border-b border-slate-200 dark:border-slate-800">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <span className="text-xs font-mono ml-2 text-slate-500 dark:text-slate-400">ubuntu@daniel-latitude:~</span>
          </div>

          <div className="space-y-4 font-mono text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            <p><span className="text-indigo-500">const</span> profile = &#123;</p>
            <p className="pl-4">name: <span className="text-emerald-500">"Kengne Tachago Daniel Vahid"</span>,</p>
            <p className="pl-4">role: <span className="text-emerald-500">"Fullstack Developer Junior"</span>,</p>
            <p className="pl-4">university: <span className="text-emerald-500">"Université de Yaoundé 1"</span>,</p>
            <p className="pl-4">os: <span className="text-emerald-500">"Linux Ubuntu"</span>,</p>
            <p className="pl-4">focus: <span className="text-emerald-500">["React", "Node.js", "TypeScript", "PostgreSQL"]</span></p>
            <p>&#125;;</p>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-3">
            <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">L2 Informatique</span>
            <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">Fullstack Trainee</span>
            <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">Yaoundé, CM</span>
          </div>
        </div>

        {/* Description textuelle */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl">
            <p className="text-base sm:text-lg leading-relaxed mb-6 text-slate-700 dark:text-slate-300">
              Je suis <strong className="text-slate-900 dark:text-white">Kengne Tachago Daniel Vahid</strong>, étudiant en
              Licence 2 d'Informatique à l'Université de Yaoundé 1. En parallèle de mon cursus académique, je développe
              mes compétences en tant que développeur fullstack junior chez <strong className="text-indigo-500">LesCracks</strong> et
              tuteur académique à <strong className="text-pink-500">Genesis Academy</strong>.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              J'utilise Linux Ubuntu au quotidien, m'appuyant sur un écosystème robuste pour concevoir des applications
              web performantes avec React, Node.js, TypeScript et PostgreSQL, tout en valorisant la culture locale à
              travers des projets technologiques comme LexiGhomala'.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-slate-900 rounded-xl p-4 text-center border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-all">
              <Cpu className="mx-auto mb-2 text-indigo-500" size={24} />
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">Clean Code</h4>
              <span className="text-xs text-slate-500 dark:text-slate-400">Architecture robuste</span>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-xl p-4 text-center border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-all">
              <BookOpen className="mx-auto mb-2 text-purple-500" size={24} />
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">Tutorat</h4>
              <span className="text-xs text-slate-500 dark:text-slate-400">Examens officiels</span>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-xl p-4 text-center border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-all col-span-2 sm:col-span-1">
              <Award className="mx-auto mb-2 text-emerald-500" size={24} />
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">Open Source</h4>
              <span className="text-xs text-slate-500 dark:text-slate-400">GitHub Active</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <MapPin size={20} className="text-emerald-500" />
              <div>
                <span className="text-xs text-slate-500 dark:text-slate-400 block">Localisation</span>
                <span className="font-semibold text-sm text-slate-900 dark:text-white">Yaoundé, Cameroun</span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <Briefcase size={20} className="text-indigo-500" />
              <div>
                <span className="text-xs text-slate-500 dark:text-slate-400 block">Statut</span>
                <span className="font-semibold text-sm text-slate-900 dark:text-white">Dev Fullstack Junior</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
