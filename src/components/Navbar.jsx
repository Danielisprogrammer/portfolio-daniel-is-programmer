import React, { useState } from 'react';
import { Sun, Moon, Menu, X, Terminal, Sparkles, Shield } from 'lucide-react';
import { translations } from '../data/translations';
import { useTheme } from '../context/ThemeContext';

export const Navbar = ({ onAdminClick }) => {
  const { darkMode, toggleTheme } = useTheme();
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'fr');
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[lang].nav;

  const toggleLang = () => {
    const newLang = lang === 'fr' ? 'en' : 'fr';
    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-all duration-300 bg-white/80 dark:bg-slate-950/80 border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform">
            <Terminal size={20} />
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-sm sm:text-base text-slate-900 dark:text-white">Daniel Vahid Kengne</span>
            <span className="text-[10px] font-mono text-indigo-500 dark:text-indigo-400">L2 Informatique • UY1</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#about" className="transition-colors hover:text-indigo-500 dark:hover:text-indigo-400 text-slate-600 dark:text-slate-300">{t.about}</a>
          <a href="#skills" className="transition-colors hover:text-indigo-500 dark:hover:text-indigo-400 text-slate-600 dark:text-slate-300">Skills</a>
          <a href="#projects" className="transition-colors hover:text-indigo-500 dark:hover:text-indigo-400 text-slate-600 dark:text-slate-300">{t.projects}</a>
          <a href="#genesis" className="transition-colors hover:text-pink-500 dark:hover:text-pink-400 flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
            <Sparkles size={14} className="text-pink-500" />
            <span>Genesis</span>
          </a>
          <a href="#contact" className="transition-colors hover:text-indigo-500 dark:hover:text-indigo-400 text-slate-600 dark:text-slate-300">{t.contact}</a>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all hover:scale-105 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
          >
            {lang.toUpperCase()}
          </button>

          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl transition-all hover:scale-105 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-indigo-600" />}
          </button>

          <button
            onClick={onAdminClick}
            className="p-2.5 rounded-xl transition-all hover:scale-105 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
            title="Admin"
          >
            <Shield size={18} />
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-xl transition-all bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-b px-4 py-6 space-y-4 bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800">
          <a href="#about" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-medium text-slate-700 dark:text-slate-200">{t.about}</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-medium text-slate-700 dark:text-slate-200">Skills</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-medium text-slate-700 dark:text-slate-200">{t.projects}</a>
          <a href="#genesis" onClick={() => setIsOpen(false)} className="flex items-center gap-2 py-2 text-sm font-medium text-pink-500">
            <Sparkles size={16} />
            <span>Genesis</span>
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-medium text-slate-700 dark:text-slate-200">{t.contact}</a>
        </div>
      )}
    </nav>
  );
};
