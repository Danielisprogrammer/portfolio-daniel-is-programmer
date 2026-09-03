import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { translations } from '../data/translations';
import { Sun, Moon, Globe } from 'lucide-react';

export const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'fr');

  const toggleLanguage = () => {
    const newLang = lang === 'fr' ? 'en' : 'fr';
    setLang(newLang);
    localStorage.setItem('lang', newLang);
    window.location.reload();
  };

  const t = translations[lang];

  return (
    <header className="glass-nav sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        <a href="#" className="font-bold text-xl tracking-tight flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
          <span style={{ color: 'var(--accent)' }}>&lt;</span>
          Daniel<span style={{ color: 'var(--accent)' }}>.dev</span>
          <span style={{ color: 'var(--accent)' }}>&gt;</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
          <a href="#projects" className="hover:text-indigo-500 transition-colors">{t.nav.projects}</a>
          <a href="#about" className="hover:text-indigo-500 transition-colors">{t.nav.about}</a>
          <a href="#academy" className="hover:text-indigo-500 transition-colors">{t.nav.academy}</a>
          <a href="#contact" className="hover:text-indigo-500 transition-colors">{t.nav.contact}</a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold cursor-pointer"
            style={{ border: '1px solid var(--card-border)', color: 'var(--text-primary)' }}
          >
            <Globe size={14} style={{ color: 'var(--accent)' }} />
            <span>{lang.toUpperCase()}</span>
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full cursor-pointer flex items-center justify-center"
            style={{ border: '1px solid var(--card-border)' }}
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} />}
          </button>
        </div>

      </div>
    </header>
  );
};