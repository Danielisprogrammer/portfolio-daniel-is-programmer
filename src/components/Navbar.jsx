import React, { useState } from 'react';
import { Sun, Moon, Menu, X, Code, Terminal, Sparkles, Mail } from 'lucide-react';
import { translations } from '../data/translations';

export const Navbar = ({ darkMode, setDarkMode }) => {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'fr');
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[lang].nav;

  const toggleLang = () => {
    const newLang = lang === 'fr' ? 'en' : 'fr';
    setLang(newLang);
    localStorage.setItem('lang', newLang);
    window.location.reload();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300" style={{ background: 'var(--nav-bg)', borderColor: 'var(--card-border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#about" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <Terminal size={20} />
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-sm sm:text-base">Daniel Kengne</span>
            <span className="text-[10px] font-mono text-indigo-400">L3 Informatique • UY1</span>
          </div>
        </a>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#about" className="transition-colors hover:text-indigo-400" style={{ color: 'var(--text-muted)' }}>{t.about}</a>
          <a href="#projects" className="transition-colors hover:text-indigo-400" style={{ color: 'var(--text-muted)' }}>{t.projects}</a>
          <a href="#genesis" className="transition-colors hover:text-indigo-400 flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
            <Sparkles size={14} className="text-pink-400" />
            <span>Genesis</span>
          </a>
          <a href="#contact" className="transition-colors hover:text-indigo-400" style={{ color: 'var(--text-muted)' }}>{t.contact}</a>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={toggleLang} 
            className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all hover:scale-105"
            style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', color: 'var(--text-primary)' }}
          >
            {lang.toUpperCase()}
          </button>

          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="p-2.5 rounded-xl transition-all hover:scale-105"
            style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', color: 'var(--text-primary)' }}
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-indigo-600" />}
          </button>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2.5 rounded-xl transition-all"
            style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', color: 'var(--text-primary)' }}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-b px-4 py-6 space-y-4" style={{ background: 'var(--bg-primary)', borderColor: 'var(--card-border)' }}>
          <a href="#about" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{t.about}</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{t.projects}</a>
          <a href="#genesis" onClick={() => setIsOpen(false)} className="flex items-center gap-2 py-2 text-sm font-medium text-pink-400">
            <Sparkles size={16} />
            <span>Genesis</span>
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{t.contact}</a>
        </div>
      )}
    </nav>
  );
};
