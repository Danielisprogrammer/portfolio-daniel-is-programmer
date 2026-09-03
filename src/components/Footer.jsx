import React from 'react';
import { MessageSquare, Heart, Code2 } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: 'var(--card-border)', background: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-black text-xs font-mono">
            DK
          </div>
          <div>
            <span className="font-bold text-sm block">Daniel Vahid Kengne</span>
            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Junior Fullstack Developer • Yaoundé, Cameroun</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/Danielisprogrammer" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl transition-colors hover:text-indigo-400 flex items-center gap-2 text-xs font-mono px-4" style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <Code2 size={16} />
            <span>GitHub</span>
          </a>
          <a href="https://wa.me/237690309313" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl transition-colors hover:text-emerald-400 flex items-center gap-2 text-xs font-mono px-4" style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <MessageSquare size={16} />
            <span>WhatsApp</span>
          </a>
        </div>

        <div className="text-xs text-center sm:text-right" style={{ color: 'var(--text-muted)' }}>
          <p className="flex items-center justify-center sm:justify-end gap-1">
            Conçu avec <Heart size={14} className="text-pink-500 fill-pink-500" /> et Ubuntu
          </p>
          <p className="font-mono mt-1">© {new Date().getFullYear()} — Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
