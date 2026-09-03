import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Genesis } from './components/Genesis';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) return JSON.parse(saved);
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark-theme' : 'light-theme'}`} style={{
      background: darkMode ? '#0f172a' : '#f8fafc',
      color: darkMode ? '#f8fafc' : '#0f172a',
      '--bg-primary': darkMode ? '#0f172a' : '#f8fafc',
      '--text-primary': darkMode ? '#f8fafc' : '#0f172a',
      '--text-muted': darkMode ? '#94a3b8' : '#64748b',
      '--card-bg': darkMode ? 'rgba(30, 41, 59, 0.7)' : 'rgba(255, 255, 255, 0.8)',
      '--card-border': darkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
      '--nav-bg': darkMode ? 'rgba(15, 23, 42, 0.8)' : 'rgba(248, 250, 252, 0.8)',
    }}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Genesis />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
