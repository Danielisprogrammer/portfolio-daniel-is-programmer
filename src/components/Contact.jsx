import React, { useState } from 'react';
import { translations } from '../data/translations';
import { Mail, MessageSquare, Send, Terminal, Globe, CheckCircle } from 'lucide-react';

export const Contact = () => {
  const [lang] = useState(() => localStorage.getItem('lang') || 'fr');
  const t = translations[lang].contact;

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:kengned776@gmail.com?subject=Contact de ${encodeURIComponent(formData.name)} (${encodeURIComponent(formData.email)})&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Bonjour Daniel Vahid Kengne, je te contacte depuis ton portfolio pour un projet !");
    window.open(`https://wa.me/237690309313?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ background: 'rgba(99, 102, 241, 0.1)', color: 'var(--accent)', border: '1px solid var(--card-border-hover)' }}>
          <Mail size={14} />
          <span>Restons en contact</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
          {t.title}
        </h2>
        <p className="text-lg" style={{ color: 'var(--text-muted)' }}>
          {t.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
        {/* Infos de contact direct & Réseaux */}
        <div className="lg:col-span-5 space-y-6">
          <div className="custom-card p-8 space-y-6">
            <h3 className="text-xl font-bold mb-4">Coordonnées</h3>
            
            <a href="mailto:kengned776@gmail.com" className="flex items-center gap-4 p-4 rounded-xl transition-colors hover:bg-indigo-500/10" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--card-border)' }}>
              <div className="p-3 rounded-lg bg-indigo-500/20 text-indigo-400">
                <Mail size={20} />
              </div>
              <div>
                <span className="text-xs opacity-60 block">Email direct</span>
                <span className="font-semibold text-sm">kengned776@gmail.com</span>
              </div>
            </a>

            <div onClick={handleWhatsApp} className="flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-colors hover:bg-emerald-500/10" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--card-border)' }}>
              <div className="p-3 rounded-lg bg-emerald-500/20 text-emerald-400">
                <MessageSquare size={20} />
              </div>
              <div>
                <span className="text-xs opacity-60 block">WhatsApp</span>
                <span className="font-semibold text-sm">+237 690 309 313</span>
              </div>
            </div>

            <div className="pt-6 border-t flex items-center gap-4" style={{ borderColor: 'var(--card-border)' }}>
              <a href="https://www.linkedin.com/in/daniel-vahid-kengne" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl transition-colors hover:bg-indigo-500/10 hover:text-indigo-500" style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }} aria-label="LinkedIn">
                <Globe size={20} />
              </a>
              <a href="https://github.com/Danielisprogrammer" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl transition-colors hover:bg-indigo-500/10 hover:text-indigo-500" style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }} aria-label="GitHub">
                <Terminal size={20} />
              </a>
              <button onClick={handleWhatsApp} className="flex-grow btn-primary text-xs py-3">
                <MessageSquare size={16} />
                <span>{t.whatsappBtn}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Formulaire de contact fonctionnel */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="custom-card p-8 space-y-6">
            {submitted && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-3 text-sm font-semibold">
                <CheckCircle size={20} />
                <span>{t.successMsg}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--text-muted)' }}>{t.namePlaceholder}</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ex: Jean Dupont" 
                className="w-full px-4 py-3 rounded-xl bg-transparent border text-sm transition-colors focus:border-indigo-500 outline-none"
                style={{ borderColor: 'var(--card-border)', color: 'var(--text-primary)' }}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--text-muted)' }}>{t.emailPlaceholder}</label>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Ex: jean@example.com" 
                className="w-full px-4 py-3 rounded-xl bg-transparent border text-sm transition-colors focus:border-indigo-500 outline-none"
                style={{ borderColor: 'var(--card-border)', color: 'var(--text-primary)' }}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--text-muted)' }}>{t.messagePlaceholder}</label>
              <textarea 
                rows="4" 
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Parlez-moi de votre besoin ou de votre projet..." 
                className="w-full px-4 py-3 rounded-xl bg-transparent border text-sm transition-colors focus:border-indigo-500 outline-none resize-none"
                style={{ borderColor: 'var(--card-border)', color: 'var(--text-primary)' }}
              ></textarea>
            </div>

            <button type="submit" className="w-full btn-primary py-4">
              <Send size={18} />
              <span>{t.sendBtn}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
