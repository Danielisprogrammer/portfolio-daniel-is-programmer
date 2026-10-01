const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const skills = [
  // Frontend
  { name: 'React.js', category: 'frontend', level: 4, icon: '⚛️' },
  { name: 'Next.js', category: 'frontend', level: 3, icon: '▲' },
  { name: 'Vite', category: 'frontend', level: 4, icon: '⚡' },
  { name: 'Tailwind CSS', category: 'frontend', level: 5, icon: '🎨' },
  { name: 'HTML5', category: 'frontend', level: 5, icon: '🌐' },
  { name: 'CSS3', category: 'frontend', level: 5, icon: '🎯' },
  { name: 'JavaScript (ES6+)', category: 'frontend', level: 4, icon: '📜' },
  { name: 'TypeScript', category: 'frontend', level: 3, icon: '🔷' },
  
  // Backend
  { name: 'Node.js', category: 'backend', level: 4, icon: '🟢' },
  { name: 'Express', category: 'backend', level: 4, icon: '🚀' },
  { name: 'PHP', category: 'backend', level: 3, icon: '🐘' },
  { name: 'Python', category: 'backend', level: 3, icon: '🐍' },
  
  // Database & ORM
  { name: 'PostgreSQL', category: 'database', level: 3, icon: '🐘' },
  { name: 'MySQL', category: 'database', level: 3, icon: '🗄️' },
  { name: 'SQLite', category: 'database', level: 4, icon: '💾' },
  { name: 'Prisma', category: 'database', level: 3, icon: '💎' },
  
  // Tools & DevOps
  { name: 'Ubuntu Linux', category: 'tools', level: 4, icon: '🐧' },
  { name: 'Git', category: 'tools', level: 4, icon: '📦' },
  { name: 'GitHub Flow', category: 'tools', level: 4, icon: '🔄' },
  { name: 'VS Code', category: 'tools', level: 5, icon: '💻' },
  { name: 'Render', category: 'tools', level: 3, icon: '☁️' },
  { name: 'Streamlit', category: 'tools', level: 3, icon: '📊' },
  { name: 'Figma', category: 'tools', level: 3, icon: '🎨' },
  { name: 'Canva', category: 'tools', level: 3, icon: '🖼️' },
];

const projects = [
  {
    title: "LexiGhomala'",
    description: "Dictionnaire web interactif français / Ghomala' pour la préservation de la langue locale camerounaise.",
    category: "frontend",
    badge: "Patrimoine & Langues",
    githubUrl: "https://github.com/Danielisprogrammer/LexiGhomala",
    liveUrl: "https://github.com/Danielisprogrammer/LexiGhomala",
    featured: true,
    gradient: "from-amber-600 via-orange-600 to-yellow-600",
    techs: JSON.stringify(["HTML5", "CSS3", "JavaScript"]),
    startDate: "Jan 2026",
    endDate: "Fév 2026"
  },
  {
    title: "Mon-Blog-Api-Inf222",
    description: "API REST backend Node.js déployée sur Render pour la gestion de blog.",
    category: "backend",
    badge: "API REST",
    githubUrl: "https://github.com/Danielisprogrammer",
    liveUrl: "https://github.com/Danielisprogrammer",
    featured: true,
    gradient: "from-emerald-600 via-teal-600 to-cyan-600",
    techs: JSON.stringify(["Node.js", "Express", "REST API"]),
    startDate: "Mars 2026",
    endDate: "Mars 2026"
  },
  {
    title: "AgroStat Insight",
    description: "Application de suivi de données agricoles intégrée à Google Sheets avec Streamlit.",
    category: "data",
    badge: "Data & Agriculture",
    githubUrl: "https://github.com/Danielisprogrammer/KENGNE_TACHAGO_DANIEL_VAHID__23U2590_AgroStat-Insight",
    liveUrl: "https://kengne-tachago-daniel-vahid-23u2590-agrostat-insight.streamlit.app/",
    featured: true,
    gradient: "from-green-600 via-emerald-600 to-teal-600",
    techs: JSON.stringify(["Python", "Streamlit", "Google Sheets", "Data Analysis"]),
    startDate: "Avril 2026",
    endDate: "Mai 2026"
  },
  {
    title: "SanteScope",
    description: "Application web de santé connectée à l'API Wikipédia pour la recherche d'informations médicales.",
    category: "frontend",
    badge: "Santé Connectée",
    githubUrl: "https://github.com/Danielisprogrammer",
    liveUrl: "https://github.com/Danielisprogrammer",
    featured: true,
    gradient: "from-rose-600 via-red-600 to-orange-600",
    techs: JSON.stringify(["React", "Vite", "Tailwind CSS", "API REST"]),
    startDate: "Juillet 2026",
    endDate: "Juillet 2026"
  },
  {
    title: "Système d'Information Paroissial (EEC Ngousso)",
    description: "Application web complète pour digitaliser la gestion paroissiale.",
    category: "fullstack",
    badge: "Chef-d'œuvre Fullstack",
    githubUrl: "https://github.com/Danielisprogrammer/sip-eec-ngousso",
    liveUrl: "https://sip-eec-ngousso-frontend.onrender.com",
    featured: true,
    gradient: "from-indigo-600 via-purple-600 to-pink-600",
    techs: JSON.stringify(["TypeScript", "React", "Node.js", "PostgreSQL"]),
    startDate: "2025",
    endDate: "2026"
  },
  {
    title: "OptiCash",
    description: "Application web frontend moderne de gestion des dépenses personnelles.",
    category: "frontend",
    badge: "FinTech UI",
    githubUrl: "https://github.com/Danielisprogrammer/OptiCash",
    liveUrl: null,
    featured: false,
    gradient: "from-blue-600 via-indigo-600 to-violet-600",
    techs: JSON.stringify(["HTML5", "CSS3", "JavaScript", "UI/UX"]),
    startDate: "2025",
    endDate: "2025"
  }
];

async function main() {
  console.log('🌱 Seeding database...');

  // Clear existing data
  await prisma.project.deleteMany();
  await prisma.skill.deleteMany();

  // Create skills
  for (const skill of skills) {
    await prisma.skill.create({ data: skill });
  }
  console.log(`✅ Created ${skills.length} skills`);

  // Create projects
  for (const project of projects) {
    await prisma.project.create({ data: project });
  }
  console.log(`✅ Created ${projects.length} projects`);

  console.log('🎉 Seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
