import { Education, Skill, Experience, Project, Language } from '../types';

export const educations: Education[] = [
  {
    id: 1,
    degree: "Ingénierie Logicielle",
    institution: "Université de Technologie",
    period: "2020 - 2024",
    description: "Spécialisation en développement web, architecture logicielle et cloud computing. Formation complète en génie logiciel avec projets pratiques.",
    icon: "🎓"
  },
  {
    id: 2,
    degree: "Développement Full-Stack",
    institution: "Tech Academy",
    period: "2022",
    description: "Programme intensif axé sur les technologies web modernes, les bonnes pratiques et les méthodologies agiles.",
    icon: "💻"
  },
  {
    id: 3,
    degree: "Certification AWS",
    institution: "Amazon Web Services",
    period: "2023",
    description: "Architecture cloud, déploiement et gestion d'infrastructures scalables sur AWS.",
    icon: "☁️"
  }
];

export const skills: Skill[] = [
  // Frontend
  { id: 1, name: "React", level: 95, category: 'frontend', icon: "⚛️" },
  { id: 2, name: "TypeScript", level: 90, category: 'frontend', icon: "📘" },
  { id: 3, name: "Next.js", level: 85, category: 'frontend', icon: "▲" },
  { id: 4, name: "Tailwind CSS", level: 98, category: 'frontend', icon: "🎨" },
  
  // Backend
  { id: 5, name: "Node.js", level: 88, category: 'backend', icon: "🟢" },
  { id: 6, name: "Python", level: 82, category: 'backend', icon: "🐍" },
  { id: 7, name: "PostgreSQL", level: 85, category: 'backend', icon: "🐘" },
  { id: 8, name: "MongoDB", level: 78, category: 'backend', icon: "🍃" },
  
  // Tools
  { id: 9, name: "Git", level: 95, category: 'tools', icon: "📚" },
  { id: 10, name: "Docker", level: 80, category: 'tools', icon: "🐳" },
  { id: 11, name: "AWS", level: 75, category: 'tools', icon: "☁️" },
  { id: 12, name: "Figma", level: 70, category: 'tools', icon: "🎨" },
  
  // Languages
  { id: 13, name: "JavaScript", level: 98, category: 'language', icon: "🟨" },
  { id: 14, name: "TypeScript", level: 92, category: 'language', icon: "🟦" },
  { id: 15, name: "Python", level: 85, category: 'language', icon: "🟩" },
  { id: 16, name: "Java", level: 70, category: 'language', icon: "☕" },
];

export const experiences: Experience[] = [
  {
    id: 1,
    position: "Développeur Full-Stack",
    company: "Tech Solutions Inc.",
    period: "2023 - Présent",
    description: [
      "Développement d'applications web scalables avec React et Node.js",
      "Conception et implémentation d'APIs RESTful avec TypeScript",
      "Optimisation des performances réduisant le temps de chargement de 40%",
      "Collaboration avec l'équipe design pour créer des composants UI modernes"
    ],
    type: 'work'
  },
  {
    id: 2,
    position: "Développeur Frontend (Stage)",
    company: "Digital Innovation Lab",
    period: "2022 - 2023",
    description: [
      "Création d'interfaces utilisateur responsives avec React et Tailwind CSS",
      "Participation au processus de développement agile",
      "Implémentation de tests unitaires avec Jest",
      "Contribution à des projets open-source"
    ],
    type: 'internship'
  },
  {
    id: 3,
    position: "Freelance Developer",
    company: "Indépendant",
    period: "2021 - 2022",
    description: [
      "Développement de sites web pour clients divers",
      "Consultation en architecture logicielle",
      "Formation en développement web",
      "Maintenance et optimisation d'applications existantes"
    ],
    type: 'work'
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Plateforme E-commerce",
    description: "Solution complète de commerce en ligne avec panier, paiements et dashboard administrateur.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind"],
    githubUrl: "#",
    liveUrl: "#",
    imageColor: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Application de Gestion de Projets",
    description: "Outil de gestion collaborative avec mise à jour en temps réel et fonctionnalités d'équipe.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
    githubUrl: "#",
    liveUrl: "#",
    imageColor: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "Dashboard Météo",
    description: "Application météo moderne avec prévisions géolocalisées et cartes interactives.",
    technologies: ["React", "Chart.js", "OpenWeather API", "Leaflet"],
    githubUrl: "#",
    liveUrl: "#",
    imageColor: "from-cyan-500 to-emerald-500"
  },
  {
    id: 4,
    title: "Suivi des Finances Personnelles",
    description: "Application de suivi budgétaire avec catégorisation des dépenses et insights financiers.",
    technologies: ["Vue.js", "Express", "SQLite", "Chart.js"],
    githubUrl: "#",
    liveUrl: "#",
    imageColor: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    title: "Réseau Social pour Développeurs",
    description: "Plateforme de networking pour développeurs avec partage de code et discussions techniques.",
    technologies: ["React", "GraphQL", "MongoDB", "Redis"],
    githubUrl: "#",
    liveUrl: "#",
    imageColor: "from-green-500 to-teal-500"
  },
  {
    id: 6,
    title: "Système de Réservation",
    description: "Système de réservation en ligne avec calendrier, notifications et gestion des ressources.",
    technologies: ["Angular", "NestJS", "MySQL", "SendGrid"],
    githubUrl: "#",
    liveUrl: "#",
    imageColor: "from-indigo-500 to-purple-500"
  }
];

export const languages: Language[] = [
  { id: 1, name: "Arabe", level: "Langue maternelle", flag: "🇩🇿" },
  { id: 2, name: "Français", level: "Courant", flag: "🇫🇷" },
  { id: 3, name: "Anglais", level: "Courant", flag: "🇺🇸" },
  { id: 4, name: "Espagnol", level: "Intermédiaire", flag: "🇪🇸" },
];

export const aboutInfo = {
  name: "Mezghenna Mohanned",
  title: "Étudiant en Ingénierie Logicielle & Développeur Full-Stack",
  description: "Je crée des produits web modernes au design premium et qui scalent proprement. Passionné par le développement de solutions élégantes et performantes, je combine expertise technique et sens du design pour créer des expériences utilisateur exceptionnelles.",
  tagline: "Je transforme des idées en solutions digitales innovantes",
  location: "Algérie",
  email: "contact@mezghenna.dev",
  phone: "+213 XXX XXX XXX"
};