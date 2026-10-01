import React, { useState } from 'react';
import { translations } from '../data/translations';
import { Mail, MessageSquare, Send, CheckCircle } from 'lucide-react';

export const Contact = () => {
  const [lang] = useState(() => localStorage.getItem('lang') || 'fr');
  const t = translations[lang].contact;

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const whatsappText = encodeURIComponent(
      `*Nouveau message depuis le Portfolio*\n\n*Nom:* ${formData.name}\n*Email:* ${formData.email}\n*Message:* ${formData.message}`
    );
    window.open(`https://wa.me/237690309313?text=${whatsappText}`, '_blank');

    const mailtoLink = `mailto:kengned776@gmail.com?subject=Contact Portfolio de ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent("Bonjour Daniel Vahid Kengne, je te contacte depuis ton portfolio pour discuter d'un projet !");
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
        <div className="lg:col-span-5 space-y-6">
          <div className="custom-card p-8 space-y-6" style={{ background: 'var(--card-bg)' }}>
            <h3 className="text-xl font-bold mb-4">Coordonnées Directes</h3>
            
            <a href="mailto:kengned776@gmail.com" className="flex items-center gap-4 p-4 rounded-xl transition-colors hover:bg-indigo-500/10" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--card-border)' }}>
              <div className="p-3 rounded-lg bg-indigo-500/20 text-indigo-400">
                <Mail size={20} />
              </div>
              <div>
                <span className="text-xs opacity-60 block">Email principal</span>
                <span className="font-semibold text-sm">kengned776@gmail.com</span>
              </div>
            </a>

            <div onClick={handleDirectWhatsApp} className="flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-colors hover:bg-emerald-500/10" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--card-border)' }}>
              <div className="p-3 rounded-lg bg-emerald-500/20 text-emerald-400">
                <MessageSquare size={20} />
              </div>
              <div>
                <span className="text-xs opacity-60 block">WhatsApp direct</span>
                <span className="font-semibold text-sm">+237 690 309 313</span>
              </div>
            </div>

            <div className="pt-6 border-t flex items-center justify-between" style={{ borderColor: 'var(--card-border)' }}>
              <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>Dispo pour missions & stages</span>
              <button onClick={handleDirectWhatsApp} className="btn-primary text-xs py-3 px-4">
                <MessageSquare size={16} />
                <span>Discuter</span>
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="custom-card p-8 space-y-6" style={{ background: 'var(--card-bg)' }}>
            {submitted && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-3 text-sm font-semibold">
                <CheckCircle size={20} />
                <span>Message transmis avec succès sur WhatsApp et Email !</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--text-muted)' }}>Votre Nom</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ex: Daniel Tachago" 
                className="w-full px-4 py-3 rounded-xl bg-transparent border text-sm transition-colors focus:border-indigo-500 outline-none"
                style={{ borderColor: 'var(--card-border)', color: 'var(--text-primary)' }}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--text-muted)' }}>Votre Email</label>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Ex: daniel@example.com" 
                className="w-full px-4 py-3 rounded-xl bg-transparent border text-sm transition-colors focus:border-indigo-500 outline-none"
                style={{ borderColor: 'var(--card-border)', color: 'var(--text-primary)' }}
              />
            </div>
            
            <div>
              <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--text-muted)' }}>Votre Message</label>
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

            <button type="submit" className="w-full btn-primary py-4 font-bold flex items-center justify-center gap-2">
              <Send size={18} />
              <span>Envoyer sur WhatsApp & Email</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
