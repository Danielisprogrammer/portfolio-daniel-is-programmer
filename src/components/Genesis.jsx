import React from 'react';
import { Sparkles, MapPin, Phone, BookOpen, Users, Award } from 'lucide-react';

const contacts = [
  { number: '690 30 93 13', wa: '690309313' },
  { number: '683 93 44 89', wa: '683934489' },
  { number: '656 13 29 42', wa: '656132942' },
];

export const Genesis = () => {
  return (
    <section id="genesis" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4 bg-pink-500/10 text-pink-500 dark:text-pink-400 border border-pink-500/20">
          <Sparkles size={14} />
          <span>Impact Social & Pédagogique</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white">
          Genesis Academy
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Centre d'Accompagnement Scolaire — « Crainte de Dieu • Discipline • Excellence »
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Carte principale */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white">
              <Sparkles size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">Genesis Academy</h3>
              <p className="text-sm text-pink-500 dark:text-pink-400 font-mono">Centre d'Accompagnement Scolaire</p>
            </div>
          </div>

          <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
            Fondé le <strong className="text-slate-900 dark:text-white">14 septembre 2026</strong> au{' '}
            <strong className="text-slate-900 dark:text-white">Groupe Scolaire God's Time</strong> (sis à la Fabrique Ngousso),
            Genesis Academy est un centre de répétition d'excellence. J'y encadre personnellement une équipe d'élèves
            de la 6e en Terminale, alliant rigueur mathématique et transmission de savoirs technologiques.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <BookOpen size={20} className="text-indigo-500 mt-0.5" />
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">Premier Cycle (6e à 3e)</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Prise en charge de toutes les matières.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <Award size={20} className="text-purple-500 mt-0.5" />
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">Second Cycle (2nde en Terminale)</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Mathématiques, Physique, Chimie, Informatique, et SVT (uniquement 1ère D & Tle D).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <MapPin size={20} className="text-emerald-500 mt-0.5" />
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">Lieu des cours</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Groupe Scolaire God's Time, Derrière la fabrique, Ngousso.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Carte contacts */}
        <div className="bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-indigo-500/10 dark:from-pink-500/5 dark:via-purple-500/5 dark:to-indigo-500/5 rounded-3xl p-8 border border-pink-500/20 dark:border-pink-500/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-pink-500/20 text-pink-500">
              <Users size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Contacts WhatsApp</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Contactez-nous directement</p>
            </div>
          </div>

          <div className="space-y-4">
            {contacts.map((contact, idx) => (
              <a
                key={idx}
                href={`https://wa.me/237${contact.wa}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500">
                    <Phone size={18} />
                  </div>
                  <span className="font-bold text-slate-900 dark:text-white">{contact.number}</span>
                </div>
                <span className="text-xs font-mono text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  Ouvrir WhatsApp →
                </span>
              </a>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
            <p className="text-xs text-slate-600 dark:text-slate-400 text-center">
              <strong className="text-slate-900 dark:text-white">Genesis Academy</strong> — Former la relève camerounaise avec excellence et discipline.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
