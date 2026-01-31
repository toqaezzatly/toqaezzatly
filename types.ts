
export interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  link?: string;
  grade?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  details?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  description?: string;
}
