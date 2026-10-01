import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappText = encodeURIComponent(
      `*Nouveau message depuis le Portfolio*\n\n*Nom:* ${formData.name}\n*Email:* ${formData.email}\n*Message:* ${formData.message}`
    );
    window.open(`https://wa.me/237690309313?text=${whatsappText}`, '_blank');

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 5000);
  };

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent("Bonjour Daniel, je te contacte depuis ton portfolio pour discuter d'un projet !");
    window.open(`https://wa.me/237690309313?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
          <Mail size={14} />
          <span>Restons en contact</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white">
          Parlons de votre projet
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Envoyez-moi un message direct ou contactez-moi via mes réseaux.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 space-y-6 border border-slate-200 dark:border-slate-800 shadow-xl">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Coordonnées Directes</h3>

            <a href="mailto:kengnetachagod@gmail.com" className="flex items-center gap-4 p-4 rounded-xl transition-all hover:bg-indigo-500/5 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/30">
              <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-500">
                <Mail size={20} />
              </div>
              <div>
                <span className="text-xs text-slate-500 dark:text-slate-400 block">Email principal</span>
                <span className="font-semibold text-sm text-slate-900 dark:text-white">kengnetachagod@gmail.com</span>
              </div>
            </a>

            <button onClick={handleDirectWhatsApp} className="w-full flex items-center gap-4 p-4 rounded-xl transition-all hover:bg-emerald-500/5 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/30 text-left">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500">
                <MessageSquare size={20} />
              </div>
              <div>
                <span className="text-xs text-slate-500 dark:text-slate-400 block">WhatsApp direct</span>
                <span className="font-semibold text-sm text-slate-900 dark:text-white">+237 690 309 313</span>
              </div>
            </button>

            <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-500">
                <MapPin size={20} />
              </div>
              <div>
                <span className="text-xs text-slate-500 dark:text-slate-400 block">Localisation</span>
                <span className="font-semibold text-sm text-slate-900 dark:text-white">Yaoundé, Ngousso / Melen, Cameroun</span>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Dispo pour missions & stages</span>
              <button onClick={handleDirectWhatsApp} className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-500 transition-all flex items-center gap-2">
                <MessageSquare size={14} />
                <span>Discuter</span>
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 rounded-2xl p-8 space-y-6 border border-slate-200 dark:border-slate-800 shadow-xl">
            {submitted && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center gap-3 text-sm font-semibold">
                <CheckCircle size={20} />
                <span>Message transmis avec succès sur WhatsApp !</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold mb-2 text-slate-600 dark:text-slate-400">Votre Nom</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ex: Paul Mbia"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold mb-2 text-slate-600 dark:text-slate-400">Votre Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Ex: paul@gmail.com"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold mb-2 text-slate-600 dark:text-slate-400">Votre Message</label>
              <textarea
                rows="4"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Parlez-moi de votre besoin ou de votre projet..."
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-all resize-none"
              ></textarea>
            </div>

            <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-indigo-500/25 transition-all">
              <Send size={18} />
              <span>Envoyer sur WhatsApp</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
