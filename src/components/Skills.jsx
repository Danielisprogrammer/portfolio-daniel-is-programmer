import React from 'react';
import { useApi } from '../hooks/useApi';
import { Cpu, Database, Terminal, Code2, Loader2 } from 'lucide-react';

const categoryConfig = {
  frontend: { icon: Code2, label: 'Frontend & UI/UX', color: 'from-blue-500 to-cyan-500' },
  backend: { icon: Cpu, label: 'Backend & API', color: 'from-emerald-500 to-teal-500' },
  database: { icon: Database, label: 'Bases de données', color: 'from-amber-500 to-orange-500' },
  tools: { icon: Terminal, label: 'Outils & DevOps', color: 'from-purple-500 to-pink-500' },
};

export const Skills = () => {
  const { data: skills, loading, error } = useApi('/skills');

  if (loading) {
    return (
      <section id="skills" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-center items-center h-64">
          <Loader2 className="animate-spin text-indigo-500" size={48} />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="skills" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center text-red-500">Erreur de chargement: {error}</div>
      </section>
    );
  }

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4 bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border border-indigo-500/20">
          <Cpu size={14} />
          <span>Expertise Technique</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white">
          Compétences & Technologies
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Un stack technique moderne et varié, du frontend au backend en passant par les bases de données.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(groupedSkills).map(([category, categorySkills]) => {
          const config = categoryConfig[category] || categoryConfig.tools;
          const Icon = config.icon;

          return (
            <div
              key={category}
              className="group relative bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${config.color} rounded-t-2xl`}></div>

              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2.5 rounded-xl bg-gradient-to-r ${config.color} text-white`}>
                  <Icon size={20} />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white">{config.label}</h3>
              </div>

              <div className="space-y-3">
                {categorySkills.map((skill) => (
                  <div key={skill.id} className="flex items-center justify-between">
                    <span className="text-sm text-slate-700 dark:text-slate-300 flex items-center gap-2">
                      <span className="text-base">{skill.icon}</span>
                      {skill.name}
                    </span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-1.5 h-1.5 rounded-full ${
                            i < skill.level
                              ? 'bg-indigo-500'
                              : 'bg-slate-200 dark:bg-slate-700'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
