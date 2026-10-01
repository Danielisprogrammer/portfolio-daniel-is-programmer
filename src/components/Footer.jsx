import React from 'react';
import { MessageSquare, Heart, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white font-black text-xs font-mono">
            DK
          </div>
          <div>
            <span className="font-bold text-sm block text-slate-900 dark:text-white">Kengne Tachago Daniel Vahid</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">Fullstack Developer • Yaoundé, Cameroun</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a href="https://github.com/Danielisprogrammer" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl transition-all hover:text-indigo-500 flex items-center gap-2 text-xs font-mono px-3 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
            <GithubIcon size={16} />
          </a>
          <a href="https://www.linkedin.com/in/daniel-kengne" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl transition-all hover:text-indigo-500 flex items-center gap-2 text-xs font-mono px-3 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
            <LinkedinIcon size={16} />
          </a>
          <a href="https://wa.me/237690309313" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl transition-all hover:text-emerald-500 flex items-center gap-2 text-xs font-mono px-3 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
            <MessageSquare size={16} />
          </a>
          <a href="mailto:kengnetachagod@gmail.com" className="p-2.5 rounded-xl transition-all hover:text-indigo-500 flex items-center gap-2 text-xs font-mono px-3 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
            <Mail size={16} />
          </a>
        </div>

        <div className="text-xs text-center sm:text-right text-slate-500 dark:text-slate-400">
          <p className="flex items-center justify-center sm:justify-end gap-1">
            Conçu avec <Heart size={14} className="text-pink-500 fill-pink-500" /> et Ubuntu
          </p>
          <p className="font-mono mt-1">© {new Date().getFullYear()} — Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
