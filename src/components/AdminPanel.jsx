import React, { useState } from 'react';
import { X, Lock, Plus, Trash2, Code2, Cpu, LogOut, Loader2, CheckCircle } from 'lucide-react';
import { useApi } from '../hooks/useApi';

const ADMIN_PASSWORD = 'admin2026';

export const AdminPanel = ({ onClose, onLogout }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState('skills');
  const [showAddForm, setShowAddForm] = useState(false);
  const [newItem, setNewItem] = useState({});
  const [actionLoading, setActionLoading] = useState(false);
  const [actionSuccess, setActionSuccess] = useState('');

  const { data: skills, createItem: createSkill, deleteItem: deleteSkill } = useApi('/skills');
  const { data: projects, createItem: createProject, deleteItem: deleteProject } = useApi('/projects');

  const handleAuth = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Mot de passe incorrect');
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    setActionLoading(true);
    try {
      if (activeTab === 'skills') {
        await createSkill(newItem, ADMIN_PASSWORD);
      } else {
        await createProject(
          { ...newItem, techs: Array.isArray(newItem.techs) ? newItem.techs : [] },
          ADMIN_PASSWORD
        );
      }
      setActionSuccess('Élément ajouté avec succès');
      setNewItem({});
      setShowAddForm(false);
      setTimeout(() => setActionSuccess(''), 3000);
    } catch (err) {
      alert('Erreur: ' + err.message);
    } finally {
      setActionLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cet élément ?')) return;
    setActionLoading(true);
    try {
      if (activeTab === 'skills') {
        await deleteSkill(id, ADMIN_PASSWORD);
      } else {
        await deleteProject(id, ADMIN_PASSWORD);
      }
      setActionSuccess('Élément supprimé avec succès');
      setTimeout(() => setActionSuccess(''), 3000);
    } catch (err) {
      alert('Erreur: ' + err.message);
    } finally {
      setActionLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white dark:bg-slate-900 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500">
              <Lock size={20} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Panneau Admin</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">Gestion du portfolio</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <button
                onClick={onLogout}
                className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold text-red-500 hover:bg-red-500/10 transition-all"
              >
                <LogOut size={14} />
                Déconnexion
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-all"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          {!isAuthenticated ? (
            /* Formulaire de connexion */
            <div className="p-8 flex flex-col items-center justify-center min-h-[400px]">
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6">
                <Lock size={32} className="text-indigo-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Accès Restreint</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Entrez le mot de passe administrateur</p>
              <form onSubmit={handleAuth} className="w-full max-w-sm space-y-4">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mot de passe"
                  className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-all"
                />
                {authError && <p className="text-xs text-red-500 text-center">{authError}</p>}
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-500 transition-all"
                >
                  Se connecter
                </button>
              </form>
            </div>
          ) : (
            /* Contenu admin */
            <div className="p-6">
              {actionSuccess && (
                <div className="mb-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center gap-2 text-sm font-semibold">
                  <CheckCircle size={16} />
                  {actionSuccess}
                </div>
              )}

              {/* Tabs */}
              <div className="flex gap-2 mb-6">
                <button
                  onClick={() => { setActiveTab('skills'); setShowAddForm(false); }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                    activeTab === 'skills'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  <Cpu size={16} />
                  Compétences ({skills.length})
                </button>
                <button
                  onClick={() => { setActiveTab('projects'); setShowAddForm(false); }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                    activeTab === 'projects'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  <Code2 size={16} />
                  Projets ({projects.length})
                </button>
              </div>

              {/* Add button */}
              <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="mb-4 flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold bg-emerald-600 text-white hover:bg-emerald-500 transition-all"
              >
                <Plus size={16} />
                Ajouter {activeTab === 'skills' ? 'une compétence' : 'un projet'}
              </button>

              {/* Add form */}
              {showAddForm && (
                <form onSubmit={handleCreate} className="mb-6 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-3">
                  {activeTab === 'skills' ? (
                    <>
                      <input
                        type="text"
                        placeholder="Nom de la compétence"
                        required
                        value={newItem.name || ''}
                        onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white"
                      />
                      <div className="grid grid-cols-2 gap-3">
                        <select
                          value={newItem.category || 'frontend'}
                          onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                          className="px-3 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white"
                        >
                          <option value="frontend">Frontend</option>
                          <option value="backend">Backend</option>
                          <option value="database">Database</option>
                          <option value="tools">Tools</option>
                        </select>
                        <select
                          value={newItem.level || 3}
                          onChange={(e) => setNewItem({ ...newItem, level: parseInt(e.target.value) })}
                          className="px-3 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white"
                        >
                          <option value={1}>Level 1</option>
                          <option value={2}>Level 2</option>
                          <option value={3}>Level 3</option>
                          <option value={4}>Level 4</option>
                          <option value={5}>Level 5</option>
                        </select>
                      </div>
                      <input
                        type="text"
                        placeholder="Icône (emoji)"
                        value={newItem.icon || ''}
                        onChange={(e) => setNewItem({ ...newItem, icon: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white"
                      />
                    </>
                  ) : (
                    <>
                      <input
                        type="text"
                        placeholder="Titre du projet"
                        required
                        value={newItem.title || ''}
                        onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white"
                      />
                      <textarea
                        placeholder="Description"
                        required
                        value={newItem.description || ''}
                        onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white"
                        rows={3}
                      />
                      <div className="grid grid-cols-2 gap-3">
                        <select
                          value={newItem.category || 'frontend'}
                          onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                          className="px-3 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white"
                        >
                          <option value="frontend">Frontend</option>
                          <option value="backend">Backend</option>
                          <option value="fullstack">Fullstack</option>
                          <option value="data">Data</option>
                        </select>
                        <input
                          type="text"
                          placeholder="Badge"
                          value={newItem.badge || ''}
                          onChange={(e) => setNewItem({ ...newItem, badge: e.target.value })}
                          className="px-3 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="url"
                          placeholder="GitHub URL"
                          value={newItem.githubUrl || ''}
                          onChange={(e) => setNewItem({ ...newItem, githubUrl: e.target.value })}
                          className="px-3 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white"
                        />
                        <input
                          type="url"
                          placeholder="Live URL"
                          value={newItem.liveUrl || ''}
                          onChange={(e) => setNewItem({ ...newItem, liveUrl: e.target.value })}
                          className="px-3 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white"
                        />
                      </div>
                      <input
                        type="text"
                        placeholder="Technologies (séparées par virgule)"
                        value={Array.isArray(newItem.techs) ? newItem.techs.join(', ') : newItem.techs || ''}
                        onChange={(e) => setNewItem({ ...newItem, techs: e.target.value.split(',').map((t) => t.trim()) })}
                        className="w-full px-3 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white"
                      />
                    </>
                  )}
                  <button
                    type="submit"
                    disabled={actionLoading}
                    className="w-full py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-sm hover:bg-indigo-500 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {actionLoading && <Loader2 size={16} className="animate-spin" />}
                    {actionLoading ? 'Ajout en cours...' : 'Ajouter'}
                  </button>
                </form>
              )}

              {/* List */}
              <div className="space-y-2">
                {activeTab === 'skills'
                  ? skills.map((skill) => (
                      <div
                        key={skill.id}
                        className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{skill.icon}</span>
                          <div>
                            <span className="font-semibold text-sm text-slate-900 dark:text-white">{skill.name}</span>
                            <span className="ml-2 text-xs text-slate-500 dark:text-slate-400">{skill.category}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => handleDelete(skill.id)}
                          className="p-2 rounded-lg text-red-500 hover:bg-red-500/10 transition-all"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))
                  : projects.map((project) => (
                      <div
                        key={project.id}
                        className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${project.gradient}`}></div>
                          <div>
                            <span className="font-semibold text-sm text-slate-900 dark:text-white">{project.title}</span>
                            <span className="ml-2 text-xs text-slate-500 dark:text-slate-400">{project.category}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => handleDelete(project.id)}
                          className="p-2 rounded-lg text-red-500 hover:bg-red-500/10 transition-all"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
