# Portfolio de Daniel Vahid Kengne

> Portfolio web moderne et interactif de **Kengne Tachago Daniel Vahid** — Étudiant L2 Informatique à l'Université de Yaoundé 1, Développeur Fullstack Junior chez LesCracks, et Fondateur de Genesis Academy.

---

## Aperçu

![Portfolio Overview](./screenshots/overview.png)

Un portfolio web ultra-moderne, vivant et dynamique avec :
- **Thème sombre/clair** persistant
- **4 thèmes de couleur** personnalisables (Rouge, Émeraude, Violet, Bleu)
- **Système bilingue** FR / EN
- **Backend API REST** avec base de données SQLite (Prisma)
- **Panneau d'administration** protégé par mot de passe
- **Animations fluides** et effets de survol
- **Design responsive** (mobile, tablette, desktop)

---

## Technologies Utilisées

### Frontend
- **React 19** — Bibliothèque UI
- **Vite 8** — Build tool ultra-rapide
- **Tailwind CSS 4** — Framework CSS utility-first
- **Lucide React** — Icônes modernes

### Backend
- **Node.js** — Runtime JavaScript
- **Express 5** — Framework web
- **Prisma 6** — ORM moderne
- **SQLite** — Base de données légère

### Outils
- **Git & GitHub** — Versioning
- **VS Code** — Éditeur de code
- **Ubuntu Linux** — Système d'exploitation

---

## Structure du Projet

```
portfolio-daniel/
├── backend/                 # API REST
│   ├── prisma/
│   │   ├── schema.prisma   # Modèles de données
│   │   └── dev.db          # Base SQLite
│   ├── server.js           # Serveur Express
│   ├── seed.js             # Données initiales
│   └── .env                # Variables d'environnement
├── src/
│   ├── components/         # Composants React
│   │   ├── AdminPanel.jsx  # Panneau admin
│   │   ├── Navbar.jsx      # Navigation
│   │   ├── Hero.jsx        # Section héro
│   │   ├── About.jsx       # À propos
│   │   ├── Skills.jsx      # Compétences
│   │   ├── Projects.jsx    # Projets
│   │   ├── Genesis.jsx     # Genesis Academy
│   │   ├── Contact.jsx     # Contact
│   │   ├── Footer.jsx      # Pied de page
│   │   └── Icons.jsx       # Icônes SVG
│   ├── context/
│   │   └── ThemeContext.jsx # Gestion du thème
│   ├── hooks/
│   │   └── useApi.js       # Hook API
│   ├── data/
│   │   └── translations.js  # Traductions FR/EN
│   ├── App.jsx             # Composant principal
│   ├── main.jsx            # Point d'entrée
│   └── index.css           # Styles globaux
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## Installation et Démarrage

### Prérequis
- Node.js 18+
- npm ou yarn

### 1. Cloner le projet
```bash
git clone https://github.com/Danielisprogrammer/portfolio-daniel.git
cd portfolio-daniel
```

### 2. Installer les dépendances
```bash
# Frontend
npm install

# Backend
cd backend
npm install
```

### 3. Configurer la base de données
```bash
cd backend
npx prisma db push
node seed.js
```

### 4. Démarrer le backend
```bash
cd backend
node server.js
```
Le serveur démarre sur `http://localhost:5000`

### 5. Démarrer le frontend
```bash
npm run dev
```
Le site est accessible sur `http://localhost:5173`

---

## Fonctionnalités

### Thème Sombre/clair
- Bascule entre mode sombre et clair
- Persistance dans localStorage
- Mode sombre par défaut

### Thèmes de Couleur
- **Rouge Passion** — `from-rose-500 to-red-600`
- **Émeraude Hacker** — `from-emerald-400 to-cyan-500`
- **Cyberpunk Violet** — `from-purple-500 to-indigo-500`
- **Bleu Océan** — `from-blue-500 to-cyan-400`

### Système Bilingue
- Français / Anglais
- Persistance de la langue
- Traductions complètes

### Panneau d'Administration
- Accès protégé par mot de passe (`admin2026`)
- Ajout de compétences en temps réel
- Ajout de projets en temps réel
- Suppression d'éléments
- Synchronisation avec la base de données

### API REST
- `GET /api/skills` — Liste des compétences
- `POST /api/skills` — Ajouter une compétence
- `DELETE /api/skills/:id` — Supprimer une compétence
- `GET /api/projects` — Liste des projets
- `POST /api/projects` — Ajouter un projet
- `DELETE /api/projects/:id` — Supprimer un projet

---

## Captures d'Écran

### Mode Sombre (par défaut)
![Dark Mode](./screenshots/dark-mode.png)

### Mode Clair
![Light Mode](./screenshots/light-mode.png)

### Section Projets
![Projects](./screenshots/projects.png)

### Section Genesis Academy
![Genesis](./screenshots/genesis.png)

### Panneau d'Administration
![Admin](./screenshots/admin.png)

---

## Scripts Disponibles

### Frontend
```bash
npm run dev       # Serveur de développement
npm run build     # Build de production
npm run preview   # Prévisualiser le build
npm run lint      # Linter le code
```

### Backend
```bash
node server.js    # Démarrer le serveur
node seed.js      # Peupler la base de données
```

---

## Contact

- **Email** : kengned776@gmail.com
- **WhatsApp** : +237 690 309 313
- **GitHub** : [@Danielisprogrammer](https://github.com/Danielisprogrammer)
- **Localisation** : Yaoundé, Cameroun

---

## Licence

© 2026 Kengne Tachago Daniel Vahid. Tous droits réservés.

---

> Conçu et développé avec passion à Yaoundé, Cameroun
