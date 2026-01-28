export const aboutInfo = {
  name: "Mezghenna Mohanned",
  title: "Full-stack Web Developer & Software Engineer",
  email: "mezghenna.mohanned@example.com",
  location: "Algiers, Algeria",
  tagline: "Passionné par la création de solutions web innovantes",
  description: "Je suis un développeur full-stack passionné avec plus de 3 ans d'expérience dans la création d'applications web modernes et scalables. Spécialisé dans React, TypeScript, Node.js et les technologies cloud."
};

export const languages = [
  { id: 1, name: "Arabe", level: "Langue maternelle", flag: "🇩🇿" },
  { id: 2, name: "Français", level: "Courant", flag: "🇫🇷" },
  { id: 3, name: "Anglais", level: "Courant", flag: "🇬🇧" },
];

export const educations = [
  {
    id: 1,
    degree: "Master en Génie Logiciel",
    institution: "École Nationale Supérieure d'Informatique (ESI)",
    period: "2022 - 2024",
    description: "Spécialisation en développement web, architecture logicielle et intelligence artificielle.",
    icon: "🎓"
  },
  {
    id: 2,
    degree: "Licence en Informatique",
    institution: "Université des Sciences et de la Technologie Houari Boumediene",
    period: "2019 - 2022",
    description: "Formation en programmation, bases de données, réseaux et systèmes d'exploitation.",
    icon: "🎓"
  },
  {
    id: 3,
    degree: "Baccalauréat Scientifique",
    institution: "Lycée Mohamed Boudiaf",
    period: "2018 - 2019",
    description: "Option mathématiques avec mention Très Bien.",
    icon: "📚"
  }
];

export const skills = [
  // Frontend
  { id: 1, name: "React", level: 95, category: "frontend" as const, icon: "⚛️" },
  { id: 2, name: "TypeScript", level: 90, category: "frontend" as const, icon: "📘" },
  { id: 3, name: "Next.js", level: 88, category: "frontend" as const, icon: "▲" },
  { id: 4, name: "Tailwind CSS", level: 92, category: "frontend" as const, icon: "🎨" },
  { id: 5, name: "Vue.js", level: 80, category: "frontend" as const, icon: "💚" },
  
  // Backend
  { id: 6, name: "Node.js", level: 90, category: "backend" as const, icon: "🟢" },
  { id: 7, name: "Express", level: 88, category: "backend" as const, icon: "🚂" },
  { id: 8, name: "MongoDB", level: 85, category: "backend" as const, icon: "🍃" },
  { id: 9, name: "PostgreSQL", level: 82, category: "backend" as const, icon: "🐘" },
  { id: 10, name: "GraphQL", level: 78, category: "backend" as const, icon: "◈" },
  
  // Tools
  { id: 11, name: "Git", level: 93, category: "tools" as const, icon: "📚" },
  { id: 12, name: "Docker", level: 85, category: "tools" as const, icon: "🐳" },
  { id: 13, name: "AWS", level: 75, category: "tools" as const, icon: "☁️" },
  { id: 14, name: "Linux", level: 88, category: "tools" as const, icon: "🐧" },
  
  // Languages
  { id: 15, name: "JavaScript", level: 95, category: "language" as const, icon: "💛" },
  { id: 16, name: "Python", level: 85, category: "language" as const, icon: "🐍" },
  { id: 17, name: "Java", level: 80, category: "language" as const, icon: "☕" },
  { id: 18, name: "C++", level: 75, category: "language" as const, icon: "⚙️" },
];

export const experiences = [
  {
    id: 1,
    position: "Développeur Full-Stack Senior",
    company: "Tech Solutions Algeria",
    period: "2023 - Présent",
    type: "work" as const,
    description: [
      "Développement d'applications web avec React, TypeScript et Node.js",
      "Mise en place d'architectures microservices scalables",
      "Optimisation des performances et amélioration de l'expérience utilisateur",
      "Mentorat d'équipe de 3 développeurs juniors"
    ]
  },
  {
    id: 2,
    position: "Développeur Full-Stack",
    company: "Digital Agency DZ",
    period: "2022 - 2023",
    type: "work" as const,
    description: [
      "Création de sites web et applications e-commerce",
      "Intégration de systèmes de paiement et APIs tierces",
      "Gestion de bases de données PostgreSQL et MongoDB",
      "Collaboration avec designers et chefs de projet"
    ]
  },
  {
    id: 3,
    position: "Stage de Développement Web",
    company: "StartUp Innovation Hub",
    period: "2021 - 2022",
    type: "internship" as const,
    description: [
      "Développement de features frontend avec React",
      "Participation aux code reviews et méthodologies Agile",
      "Apprentissage des bonnes pratiques de développement",
      "Contribution à des projets open-source"
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Plateforme de commerce électronique complète avec panier, paiement en ligne et tableau de bord admin.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    imageColor: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Social Media Dashboard",
    description: "Tableau de bord d'analytics pour réseaux sociaux avec graphiques interactifs et rapports en temps réel.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Chart.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    imageColor: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "Application de gestion de tâches collaborative avec fonctionnalités temps réel et notifications.",
    technologies: ["React", "Firebase", "Tailwind", "Socket.io"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    imageColor: "from-green-500 to-emerald-500"
  },
  {
    id: 4,
    title: "Weather Forecast App",
    description: "Application météo moderne avec prévisions détaillées et géolocalisation.",
    technologies: ["Vue.js", "Express", "OpenWeather API"],
    githubUrl: "https://github.com",
    imageColor: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    title: "Portfolio CMS",
    description: "Système de gestion de contenu pour portfolios avec éditeur visuel et templates personnalisables.",
    technologies: ["React", "Node.js", "MongoDB", "AWS S3"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    imageColor: "from-indigo-500 to-purple-500"
  },
  {
    id: 6,
    title: "Booking System",
    description: "Système de réservation en ligne pour hôtels avec calendrier interactif et gestion des disponibilités.",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "Stripe"],
    githubUrl: "https://github.com",
    imageColor: "from-pink-500 to-rose-500"
  }
];