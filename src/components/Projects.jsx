import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { translations } from '../data/translations';
import { ExternalLink, Download, Code, ChevronDown, ChevronUp } from 'lucide-react';

export const Projects = () => {
  const [lang] = useState(() => localStorage.getItem('lang') || 'fr');
  const [showAll, setShowAll] = useState(false);
  const t = translations[lang].projects;

  const INITIAL_COUNT = 3;
  const displayedProjects = showAll ? projectsData : projectsData.slice(0, INITIAL_COUNT);
  const hasMore = projectsData.length > INITIAL_COUNT;

  return (
    <section id="projects" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ background: 'rgba(99, 102, 241, 0.1)', color: 'var(--accent)', border: '1px solid rgba(99, 102, 241, 0.2)' }}>
          <Code size={14} />
          <span>Réalisations & Code ({projectsData.length})</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
          {t.title}
        </h2>
        <p className="text-lg" style={{ color: 'var(--text-muted)' }}>
          {t.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProjects.map((project) => (
          <div 
            key={project.id} 
            className="custom-card rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group relative overflow-hidden"
            style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
          >
            <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${project.gradient}`}></div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono opacity-60">PROJET #{project.id}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>

              <h3 className="text-xl font-bold tracking-tight group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.techs.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="text-[11px] font-mono px-2.5 py-1 rounded-lg"
                    style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--card-border)', color: 'var(--text-primary)' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t flex items-center justify-between gap-2" style={{ borderColor: 'var(--card-border)' }}>
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold py-2 px-3 rounded-xl transition-colors hover:bg-indigo-500/10 hover:text-indigo-400"
                style={{ color: 'var(--text-primary)' }}
              >
                <Code size={16} />
                <span>Code</span>
              </a>

              <a 
                href={project.downloadUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold py-2 px-3 rounded-xl transition-colors hover:bg-purple-500/10 hover:text-purple-400"
                style={{ color: 'var(--text-primary)' }}
                title="Télécharger l'archive ZIP"
              >
                <Download size={16} />
                <span>ZIP</span>
              </a>

              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-bold py-2 px-4 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/20"
              >
                <span>Demo</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="mt-16 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-lg shadow-indigo-500/10"
            style={{ 
              background: 'var(--card-bg)', 
              border: '1px solid var(--card-border)',
              color: 'var(--text-primary)' 
            }}
          >
            <span>{showAll ? "Voir moins de projets" : `Voir tous les projets (${projectsData.length})`}</span>
            {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
      )}
    </section>
  );
};
