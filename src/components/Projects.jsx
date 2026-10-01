import React, { useState } from 'react';
import { useApi } from '../hooks/useApi';
import { ExternalLink, Code, Loader2, Star, Calendar } from 'lucide-react';

export const Projects = () => {
  const { data: projects, loading, error } = useApi('/projects');
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState('all');

  if (loading) {
    return (
      <section id="projects" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-center items-center h-64">
          <Loader2 className="animate-spin text-indigo-500" size={48} />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center text-red-500">Erreur de chargement: {error}</div>
      </section>
    );
  }

  const categories = ['all', ...new Set(projects.map((p) => p.category))];
  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter);
  const displayed = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section id="projects" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4 bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border border-indigo-500/20">
          <Code size={14} />
          <span>Réalisations ({projects.length})</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white">
          Projets Phares
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Une sélection de mes réalisations techniques, du frontend au backend.
        </p>
      </div>

      {/* Filtres */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filter === cat
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {cat === 'all' ? 'Tous' : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Grille de projets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayed.map((project) => (
          <div
            key={project.id}
            className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10"
          >
            <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">PROJET #{project.id}</span>
                {project.featured && (
                  <span className="flex items-center gap-1 text-xs font-bold text-amber-500 bg-amber-500/10 px-2 py-1 rounded-full">
                    <Star size={12} fill="currentColor" /> Vedette
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                {project.description}
              </p>

              {project.startDate && (
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-4">
                  <Calendar size={14} />
                  <span>{project.startDate} — {project.endDate}</span>
                </div>
              )}

              <div className="flex flex-wrap gap-1.5 mb-6">
                {JSON.parse(project.techs || '[]').map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-indigo-500/10 hover:text-indigo-500 transition-all"
                  >
                    <Code size={14} />
                    <span>Code</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-bold py-2 px-4 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/20"
                  >
                    <span>Demo</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length > 6 && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 hover:scale-105 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-lg"
          >
            {showAll ? 'Voir moins' : `Voir tous les projets (${filtered.length})`}
          </button>
        </div>
      )}
    </section>
  );
};
