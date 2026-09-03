import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { translations } from './data/translations';

function MainContent() {
  const [lang] = useState(() => localStorage.getItem('lang') || 'fr');
  const t = translations[lang];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Effets lumineux d'arrière-plan sophistiqués */}
      <div className="hero-glow top-10 left-1/4"></div>
      <div className="hero-glow bottom-1/3 right-10" style={{ background: 'radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, rgba(0,0,0,0) 70%)' }}></div>

      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="px-4 py-28 sm:py-36 flex items-center justify-center text-center max-w-4xl mx-auto relative">
          <div>
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full font-semibold text-xs sm:text-sm mb-6" style={{ background: 'rgba(99, 102, 241, 0.1)', color: 'var(--accent)', border: '1px solid var(--card-border-hover)' }}>
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              {t.hero.greeting}
            </span>
            <h1 className="text-4xl sm:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              Daniel Vahid <span style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Kengne</span>
            </h1>
            <p className="text-base sm:text-xl mb-12 leading-relaxed max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              {t.hero.tagline}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#projects" className="btn-primary">
                {t.hero.ctaProjects}
              </a>
              <a href="#contact" className="btn-outline">
                {t.hero.ctaContact}
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <About />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 border-t text-center text-xs font-mono" style={{ borderColor: 'var(--card-border)', color: 'var(--text-muted)' }}>
        <p>© 2026 — Daniel Vahid Kengne. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}
