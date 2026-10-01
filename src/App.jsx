import React, { useState } from 'react';
import { 
  ExternalLink, Code2, GraduationCap, Briefcase, 
  User, Mail, MapPin, Terminal, Cpu, Database, Award, BookOpen, Layers, ShieldCheck, Sparkles, Send, 
  Palette, Phone, MessageSquare, CheckCircle2, Flame, RefreshCw, Star, Globe
} from 'lucide-react';

import profileImage from './assets/photo-daniel.jpeg';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');
  const [themeColor, setThemeColor] = useState('red'); // 'red', 'emerald', 'violet', 'blue'
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Thèmes dynamiques complets
  const themes = {
    red: {
      name: "Rouge Passion & Puissance",
      primary: "from-rose-500 to-red-600",
      textPrimary: "text-rose-500",
      bgBadge: "bg-rose-500/10 border-rose-500/20 text-rose-400",
      button: "bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white shadow-rose-600/25",
      borderGlow: "hover:border-rose-500/50",
      selection: "selection:bg-rose-500 selection:text-slate-950",
      accentHex: "#f43f5e"
    },
    emerald: {
      name: "Émeraude Hacker",
      primary: "from-emerald-400 to-cyan-500",
      textPrimary: "text-emerald-400",
      bgBadge: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
      button: "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-emerald-600/25",
      borderGlow: "hover:border-emerald-500/50",
      selection: "selection:bg-emerald-500 selection:text-slate-950",
      accentHex: "#10b981"
    },
    violet: {
      name: "Cyberpunk Violet",
      primary: "from-purple-500 to-indigo-500",
      textPrimary: "text-purple-400",
      bgBadge: "bg-purple-500/10 border-purple-500/20 text-purple-400",
      button: "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-purple-600/25",
      borderGlow: "hover:border-purple-500/50",
      selection: "selection:bg-purple-500 selection:text-slate-950",
      accentHex: "#8b5cf6"
    },
    blue: {
      name: "Bleu Océan Pro",
      primary: "from-blue-500 to-cyan-400",
      textPrimary: "text-blue-400",
      bgBadge: "bg-blue-500/10 border-blue-500/20 text-blue-400",
      button: "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-blue-600/25",
      borderGlow: "hover:border-blue-500/50",
      selection: "selection:bg-blue-500 selection:text-slate-950",
      accentHex: "#3b82f6"
    }
  };

  const currentTheme = themes[themeColor];

  const projects = [
    {
      title: "Système d'Information Paroissial (EEC Ngousso)",
      category: "fullstack",
      badge: "Chef-d'œuvre Fullstack",
      description: "Application web complète pour digitaliser la paroisse (gestion, design, architecture TypeScript). Mon projet le plus complet et déployé en production.",
      tags: ["TypeScript", "React", "Node.js", "PostgreSQL"],
      github: "https://github.com/Danielisprogrammer/sip-eec-ngousso",
      demo: "https://sip-eec-ngousso-frontend.onrender.com",
      featured: true
    },
    {
      title: "AgroStat Insight v1.0",
      category: "data",
      badge: "Data & IA",
      description: "Plateforme d'Intelligence Artificielle et de suivi pour l'optimisation des rendements agricoles, intégrée avec Google Sheets.",
      tags: ["Python", "Streamlit", "Data Analysis", "Google Sheets"],
      github: "https://github.com/Danielisprogrammer/KENGNE_TACHAGO_DANIEL_VAHID__23U2590_AgroStat-Insight",
      demo: "https://kengne-tachago-daniel-vahid-23u2590-agrostat-insight.streamlit.app/",
      featured: true
    },
    {
      title: "OptiCash",
      category: "frontend",
      badge: "FinTech UI",
      description: "Application web frontend moderne de gestion des dépenses personnelles avec interface responsive et module de chat IA simulé.",
      tags: ["HTML5", "CSS3", "JavaScript", "UI/UX"],
      github: "https://github.com/Danielisprogrammer/OptiCash",
      demo: null,
      featured: false
    },
    {
      title: "UniLMS — Gestion d'Apprentissage",
      category: "backend",
      badge: "Backend PHP",
      description: "Application de gestion académique légère et performante en PHP natif et Tailwind CSS pour structurer les interactions pédagogiques.",
      tags: ["PHP Natif", "Tailwind CSS", "MySQL"],
      github: "https://github.com/Danielisprogrammer/LMS-Daniel",
      demo: null,
      featured: false
    },
    {
      title: "DanSmartIA",
      category: "frontend",
      badge: "Outils Intelligents",
      description: "Convertisseur multi-unités intelligent, calculatrice mathématique complète et formulaire de contact interactif.",
      tags: ["JavaScript", "HTML5", "CSS3"],
      github: "https://github.com/Danielisprogrammer/DanSmartIA---Projet1",
      demo: null,
      featured: false
    },
    {
      title: "DanEduc",
      category: "frontend",
      badge: "EdTech",
      description: "Plateforme éducative innovante conçue spécifiquement pour les étudiants camerounais (fiches de révision, exercices corrigés).",
      tags: ["React", "Frontend", "Education"],
      github: "https://github.com/Danielisprogrammer/DanEduc",
      demo: null,
      featured: false
    },
    {
      title: "LexiGhomala",
      category: "frontend",
      badge: "Patrimoine & Langues",
      description: "Dictionnaire web front-end traduisant entre le français et le ghomala, promouvant la préservation des langues vernaculaires.",
      tags: ["JavaScript", "HTML/CSS", "Culture"],
      github: "https://github.com/Danielisprogrammer/LexiGhomala",
      demo: null,
      featured: false
    },
    {
      title: "EducManager",
      category: "frontend",
      badge: "Gestion Académique",
      description: "Application web front-end de gestion et de suivi des données d'inscription des étudiants dans une interface intuitive.",
      tags: ["JavaScript", "DOM", "Tailwind"],
      github: "https://github.com/Danielisprogrammer/EducManager",
      demo: null,
      featured: false
    },
    {
      title: "Web-Mini-Projets",
      category: "frontend",
      badge: "Fondations JS",
      description: "Collection de 4 mini-projets robustes (Calculatrice, Tic Tac Toe, Chronomètre, Alarme) en JavaScript pur.",
      tags: ["JavaScript Pur", "DOM API"],
      github: "https://github.com/Danielisprogrammer/Web-Mini-Projets",
      demo: null,
      featured: false
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSent(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setFormSent(false);
    }, 5000);
  };

  return (
    <div className={`min-h-screen bg-slate-950 text-slate-100 font-sans ${currentTheme.selection} transition-colors duration-500`}>
      
      {/* Barre de personnalisation du Thème en haut */}
      <div className="bg-slate-900 border-b border-slate-800 py-2.5 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Palette size={15} className={currentTheme.textPrimary} />
            <span>Personnalise ton thème de couleur :</span>
          </div>
          <div className="flex items-center gap-2">
            {Object.keys(themes).map((key) => (
              <button
                key={key}
                onClick={() => setThemeColor(key)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition border ${
                  themeColor === key 
                    ? 'bg-slate-800 text-white border-slate-600 shadow-md' 
                    : 'bg-slate-950 text-slate-400 border-slate-800 hover:bg-slate-800'
                }`}
              >
                {themes[key].name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Principale */}
      <header className="border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md sticky top-0 z-50 shadow-2xl">
        <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className={`bg-gradient-to-tr ${currentTheme.primary} text-slate-950 p-2.5 rounded-xl font-bold shadow-lg`}>
              <Terminal size={22} />
            </div>
            <div>
              <span className="font-black text-base tracking-tight text-white block">Kengne Tachago Daniel Vahid</span>
              <span className={`text-xs ${currentTheme.textPrimary} font-mono font-bold`}>Daniel is Programmer 🇨🇲</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-white transition">Parcours</a>
            <a href="#genesis" className="hover:text-white transition">Genesis Academy</a>
            <a href="#projects" className="hover:text-white transition">Projets</a>
            <a href="#skills" className="hover:text-white transition">Expertise</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>

          <a 
            href="https://wa.me/237690309313" 
            target="_blank" 
            rel="noreferrer" 
            className={`hidden sm:flex items-center gap-2 ${currentTheme.button} px-4 py-2.5 rounded-xl text-xs font-bold transition shadow-lg`}
          >
            <Phone size={14} /> +237 690 309 313
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-24">
        
        {/* Section Hero Immersive */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-gradient-to-br from-slate-900/95 via-slate-900/50 to-slate-950 p-8 md:p-14 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${currentTheme.primary} opacity-10 rounded-full blur-3xl pointer-events-none`}></div>
          
          <div className="lg:col-span-7 space-y-6 z-10">
            <div className={`inline-flex items-center gap-2 ${currentTheme.bgBadge} text-xs px-3.5 py-1.5 rounded-full border font-bold uppercase tracking-wider`}>
              <Flame size={14} /> Fullstack Developer & EdTech Founder
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Concepteur d'applications <span className={`bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent`}>Web & Systèmes Intelligents</span>.
            </h1>
            
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Étudiant en Informatique Fondamentale à l'Université de Yaoundé 1 (UY1). Formé chez <strong className="text-white">Worketyamo</strong> (UI/UX Figma) et <strong className="text-white">LesCracks</strong> (Frontend avancé). Fondateur de <strong className={currentTheme.textPrimary}>Genesis Academy</strong> pour former la relève camerounaise.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="https://github.com/Danielisprogrammer" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-100 px-6 py-3.5 rounded-xl text-sm font-semibold transition border border-slate-700 shadow-xl">
                <Globe size={18} /> Profil GitHub
              </a>
              <a href="#projects" className={`flex items-center gap-2 ${currentTheme.button} px-6 py-3.5 rounded-xl text-sm font-bold shadow-xl transition`}>
                Voir tous mes projets ({projects.length})
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center z-10">
            <div className="relative group">
              <div className={`absolute -inset-1.5 bg-gradient-to-r ${currentTheme.primary} rounded-3xl blur opacity-40 group-hover:opacity-80 transition duration-500`}></div>
              <div className="relative bg-slate-900 border border-slate-700 p-3 rounded-2xl shadow-2xl">
                <img 
                  src={profileImage} 
                  alt="Kengne Tachago Daniel Vahid" 
                  className="rounded-xl object-cover w-72 h-80 md:w-80 md:h-96"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-slate-950/85 backdrop-blur-md p-3.5 rounded-xl border border-slate-800 text-center shadow-lg">
                  <p className="text-xs font-bold text-white">Kengne Tachago Daniel Vahid</p>
                  <p className={`text-[11px] ${currentTheme.textPrimary} font-mono font-bold`}>@Danielisprogrammer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Parcours Académique */}
        <section id="about" className="space-y-8">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white flex items-center gap-3">
              <GraduationCap className={currentTheme.textPrimary} /> Parcours & Formation d'Excellence
            </h2>
            <p className="text-slate-400 text-sm mt-1">Un cursus rigoureux ancré entre l'Université de Yaoundé 1 et le terrain professionnel.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900/80 border border-slate-800 p-7 rounded-2xl space-y-4 hover:border-slate-700 transition shadow-xl">
              <span className={`text-xs font-mono font-bold ${currentTheme.textPrimary} bg-slate-950 px-3 py-1 rounded-md border border-slate-800`}>Licence Informatique • UY1</span>
              <h3 className="text-lg font-bold text-white">Informatique Fondamentale</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Issu d'un Baccalauréat C solide, je poursuis un cursus rigoureux à la Faculté des Sciences de l'Université de Yaoundé 1, maîtrisant algorithmique, structures de données et architecture logicielle.
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-7 rounded-2xl space-y-4 hover:border-slate-700 transition shadow-xl">
              <span className={`text-xs font-mono font-bold ${currentTheme.textPrimary} bg-slate-950 px-3 py-1 rounded-md border border-slate-800`}>Worketyamo & LesCracks</span>
              <h3 className="text-lg font-bold text-white">Certifications & Formations Web</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                UI/UX Design validé chez Worketyamo (Carrefour Melen). Développement Frontend et méthodologies agiles (Git/GitHub) approfondis au sein de la communauté LesCracks.
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-7 rounded-2xl space-y-4 hover:border-slate-700 transition shadow-xl">
              <span className={`text-xs font-mono font-bold ${currentTheme.textPrimary} bg-slate-950 px-3 py-1 rounded-md border border-slate-800`}>Matériel & Systèmes</span>
              <h3 className="text-lg font-bold text-white">Linux Ubuntu & Réseaux</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Utilisation quotidienne d'un Dell Latitude sous Linux Ubuntu pour un développement bas niveau optimisé. Compétences certifiées en maintenance et câblage réseau.
              </p>
            </div>
          </div>
        </section>

        {/* Section Genesis Academy */}
        <section id="genesis" className={`bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 p-8 md:p-12 rounded-3xl space-y-6 shadow-2xl relative overflow-hidden`}>
          <div className={`absolute -right-20 -bottom-20 w-80 h-80 bg-gradient-to-br ${currentTheme.primary} opacity-10 rounded-full blur-3xl pointer-events-none`}></div>
          <div className="flex items-center gap-4">
            <div className={`p-3.5 bg-slate-950 ${currentTheme.textPrimary} rounded-2xl border border-slate-800 shadow-inner`}>
              <Sparkles size={28} />
            </div>
            <div>
              <span className={`text-xs uppercase tracking-widest ${currentTheme.textPrimary} font-bold`}>Impact Social & Pédagogique</span>
              <h2 className="text-2xl md:text-3xl font-black text-white">Genesis Academy</h2>
            </div>
          </div>
          <p className="text-slate-200 text-sm md:text-base leading-relaxed max-w-4xl">
            Fondé le <strong className="text-white">14 septembre 2026</strong> au <strong className="text-white">Groupe Scolaire God's Time</strong> (sis à la Fabrique Ngousso), <strong className={currentTheme.textPrimary}>Genesis Academy</strong> est mon centre de répétition d'excellence. J'y encadre personnellement une équipe d'élèves de la 6e en Terminale, alliant rigueur mathématique et transmission de savoirs technologiques.
          </p>
        </section>

        {/* Section Projets Remarquable et Propre */}
        <section id="projects" className="space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white flex items-center gap-3">
                <Code2 className={currentTheme.textPrimary} /> Projets Phares & Réalisations
              </h2>
              <p className="text-slate-400 text-sm mt-1">Explore mes applications web, backends et outils open-source hébergés.</p>
            </div>

            {/* Boutons de Filtres Stylés */}
            <div className="flex flex-wrap gap-2 text-xs font-bold">
              <button 
                onClick={() => setFilter('all')} 
                className={`px-4 py-2 rounded-xl transition ${filter === 'all' ? currentTheme.button : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'}`}
              >
                Tous ({projects.length})
              </button>
              <button 
                onClick={() => setFilter('fullstack')} 
                className={`px-4 py-2 rounded-xl transition ${filter === 'fullstack' ? currentTheme.button : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'}`}
              >
                Fullstack
              </button>
              <button 
                onClick={() => setFilter('frontend')} 
                className={`px-4 py-2 rounded-xl transition ${filter === 'frontend' ? currentTheme.button : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'}`}
              >
                Frontend & UI
              </button>
              <button 
                onClick={() => setFilter('backend')} 
                className={`px-4 py-2 rounded-xl transition ${filter === 'backend' ? currentTheme.button : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'}`}
              >
                Backend
              </button>
              <button 
                onClick={() => setFilter('data')} 
                className={`px-4 py-2 rounded-xl transition ${filter === 'data' ? currentTheme.button : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'}`}
              >
                Data & IA
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((proj, idx) => (
              <div key={idx} className={`bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between ${currentTheme.borderGlow} transition-all duration-300 group shadow-xl hover:-translate-y-1`}>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className={`text-[10px] font-mono font-bold ${currentTheme.textPrimary} bg-slate-950 px-3 py-1 rounded-md border border-slate-800`}>
                      {proj.badge}
                    </span>
                    {proj.featured && (
                      <span className="text-[10px] bg-amber-500/10 text-amber-400 px-2.5 py-0.5 rounded-full border border-amber-500/20 font-bold flex items-center gap-1">
                        <Star size={10} fill="currentColor" /> Vedette
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-slate-200 transition">
                    {proj.title}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div className="space-y-4 pt-6">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-mono bg-slate-950 text-slate-300 px-2.5 py-1 rounded border border-slate-800">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                    <a href={proj.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-950 hover:bg-slate-800 px-3.5 py-2.5 rounded-xl transition border border-slate-800 flex-1 justify-center font-medium">
                      <Code2 size={14} /> Code source
                    </a>
                    {proj.demo && (
                      <a href={proj.demo} target="_blank" rel="noreferrer" className={`flex items-center gap-1.5 text-xs ${currentTheme.textPrimary} bg-slate-950 hover:bg-slate-900 px-3.5 py-2.5 rounded-xl transition border border-slate-800 flex-1 justify-center font-bold`}>
                        <ExternalLink size={14} /> Démo Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section Expertise & Skills */}
        <section id="skills" className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-800">
          <div className="bg-slate-900/80 border border-slate-800 p-7 rounded-2xl space-y-3 shadow-xl">
            <Cpu className={currentTheme.textPrimary} size={28} />
            <h3 className="font-bold text-white text-lg">Frontend & UI/UX</h3>
            <p className="text-xs text-slate-300 leading-relaxed">React.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS, Bootstrap, Figma (Worketyamo certified), Canva.</p>
          </div>
          <div className="bg-slate-900/80 border border-slate-800 p-7 rounded-2xl space-y-3 shadow-xl">
            <Database className={currentTheme.textPrimary} size={28} />
            <h3 className="font-bold text-white text-lg">Backend & Données</h3>
            <p className="text-xs text-slate-300 leading-relaxed">Node.js, Express, PHP natif, Python (Streamlit), PostgreSQL, Prisma ORM, MySQL, SQLite.</p>
          </div>
          <div className="bg-slate-900/80 border border-slate-800 p-7 rounded-2xl space-y-3 shadow-xl">
            <Terminal className={currentTheme.textPrimary} size={28} />
            <h3 className="font-bold text-white text-lg">Outils & Systèmes</h3>
            <p className="text-xs text-slate-300 leading-relaxed">Git, GitHub Flow, Ubuntu Linux Dell Latitude, VS Code, Vite, Render, Streamlit Cloud, Maintenance & Réseaux.</p>
          </div>
        </section>

        {/* SECTION CONTACT INTERACTIVE RÉINTÉGRÉE ET ULTRA VIVANTE */}
        <section id="contact" className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-slate-900/90 border border-slate-800 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className={`text-xs uppercase tracking-widest ${currentTheme.textPrimary} font-bold`}>Restons en contact</span>
              <h2 className="text-3xl font-black text-white mt-1">Discutons de ton projet</h2>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Besoin d'un développeur fullstack rigoureux, d'un formateur pour Genesis Academy ou d'une collaboration technique à Yaoundé ou en ligne ? Envoie-moi un message direct !
            </p>

            <div className="space-y-4 pt-2">
              <a href="mailto:kengnetachagod@gmail.com" className="flex items-center gap-3 text-slate-200 bg-slate-950 p-4 rounded-2xl border border-slate-800 hover:border-slate-700 transition">
                <div className={`p-2.5 rounded-xl bg-slate-900 ${currentTheme.textPrimary}`}>
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block font-mono">Email Direct</span>
                  <span className="text-xs font-bold text-white">kengnetachagod@gmail.com</span>
                </div>
              </a>

              <a href="https://wa.me/237690309313" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-200 bg-slate-950 p-4 rounded-2xl border border-slate-800 hover:border-slate-700 transition">
                <div className={`p-2.5 rounded-xl bg-slate-900 ${currentTheme.textPrimary}`}>
                  <Phone size={18} />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block font-mono">WhatsApp & Téléphone</span>
                  <span className="text-xs font-bold text-white">+237 690 309 313</span>
                </div>
              </a>

              <div className="flex items-center gap-3 text-slate-200 bg-slate-950 p-4 rounded-2xl border border-slate-800">
                <div className={`p-2.5 rounded-xl bg-slate-900 ${currentTheme.textPrimary}`}>
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block font-mono">Localisation</span>
                  <span className="text-xs font-bold text-white">Yaoundé, Ngousso / Melen, Cameroun 🇨🇲</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-slate-950 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-xl">
            {formSent ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className={`w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20`}>
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-xl font-bold text-white">Message bien transmis !</h3>
                <p className="text-slate-300 text-xs max-w-sm">
                  Merci Daniel ! Ton message a été pris en compte avec succès. Je te recontacterai dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-white mb-2">Formulaire de Contact Rapide</h3>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Ton Nom / Entreprise</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Ex: Paul Mbia" 
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-slate-600 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Ton Adresse Email</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="Ex: paul@gmail.com" 
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-slate-600 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Ton Message</label>
                  <textarea 
                    rows="4" 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Écris ton message ici..." 
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-slate-600 transition resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className={`w-full ${currentTheme.button} py-3.5 rounded-xl text-xs font-bold shadow-lg transition flex items-center justify-center gap-2`}
                >
                  <Send size={15} /> Envoyer le message
                </button>
              </form>
            )}
          </div>
        </section>

      </main>

      {/* Footer Pro */}
      <footer className="border-t border-slate-800/80 mt-24 py-12 px-6 text-center text-xs text-slate-500 space-y-3">
        <div className="flex justify-center items-center gap-4 text-slate-400 pb-2">
          <a href="https://github.com/Danielisprogrammer" target="_blank" rel="noreferrer" className="hover:text-white transition"><Globe size={18} /></a>
          <a href="https://wa.me/237690309313" target="_blank" rel="noreferrer" className="hover:text-white transition"><Phone size={18} /></a>
          <a href="mailto:kengnetachagod@gmail.com" className="hover:text-white transition"><Mail size={18} /></a>
        </div>
        <p>© 2026 Kengne Tachago Daniel Vahid (Daniel is Programmer). Tous droits réservés.</p>
        <p className="text-slate-600 font-mono">Conçu et développé à Yaoundé, Cameroun 🇨🇲 • Thème actif : {currentTheme.name}</p>
      </footer>
    </div>
  );
}