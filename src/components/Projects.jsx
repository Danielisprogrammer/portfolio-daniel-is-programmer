import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { translations } from '../data/translations';
import { ExternalLink, Code2, Sparkles, Terminal, Globe } from 'lucide-react';

export const Projects = () => {
  const [lang] = useState(() => localStorage.getItem('lang') || 'fr');
  const t = translations[lang].projects;

  return (
    <section id="projects" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ background: 'rgba(99, 102, 241, 0.1)', color: 'var(--accent)', border: '1px solid var(--card-border-hover)' }}>
          <Code2 size={14} />
          <span>GitHub Repository</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6">
          {t.title}
        </h2>
        <p className="text-lg" style={{ color: 'var(--text-muted)' }}>
          {t.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <div key={project.id} className="custom-card flex flex-col justify-between group">
            {/* Miniature stylisée avec gradient dynamique */}
            <div className={`h-44 w-full bg-gradient-to-br ${project.gradient} p-6 relative overflow-hidden flex flex-col justify-between border-b border-white/5`}>
              <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
              
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-black/40 text-white backdrop-blur-md">
                  PROJET 0{project.id}
                </span>
                <Sparkles size={16} className="text-indigo-400 opacity-80" />
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-extrabold text-white group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>

            {/* Contenu et Technos */}
            <div className="p-6 flex flex-col justify-between flex-grow">
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                {project.description}
              </p>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techs.map((tech, index) => (
                    <span key={index} className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: 'rgba(99, 102, 241, 0.08)', color: 'var(--accent)', border: '1px solid rgba(99, 102, 241, 0.15)' }}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'var(--card-border)' }}>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-indigo-500" style={{ color: 'var(--text-primary)' }}>
                    <Terminal size={18} />
                    <span>{t.viewCode}</span>
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 hover:text-indigo-400 transition-colors">
                    <span>{t.viewLive}</span>
                    <Globe size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
