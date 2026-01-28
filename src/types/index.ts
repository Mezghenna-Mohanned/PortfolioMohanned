export interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string;
  icon: string;
}

export interface Skill {
  id: number;
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'language';
  icon: string;
}

export interface Experience {
  id: number;
  position: string;
  company: string;
  period: string;
  description: string[];
  type: 'work' | 'internship';
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageColor: string;
}

export interface Language {
  id: number;
  name: string;
  level: string;
  flag: string;
}