import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Genesis } from './components/Genesis';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <Projects />
        <Genesis />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
