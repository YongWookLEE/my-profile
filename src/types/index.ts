export interface Contact {
  email: string;
  phone: string;
  github: string;
}

export interface TechStack {
  backend: string[];
  frontend: string[];
  devops: string[];
  database: string[];
  geospatial: string[];
}

export interface Profile {
  name: string;
  title: string;
  yearsOfExperience: number;
  summary: string;
  techStack: TechStack;
  contact: Contact;
}

export interface Period {
  start: string;
  end: string;
}

export interface Project {
  id: number;
  title: string;
  role: string;
  period: Period;
  description: string;
  achievements: string[];
  tags: string[];
  category?: string; // 'web' | 'gis' | 'infra' 등
  url?: string;      // 프로젝트 링크
}
