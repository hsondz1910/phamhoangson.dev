export interface SkillType {
  name: string;
  category: 'technical' | 'soft';
}

export interface ExperienceType {
  title: string;
  organization: string;
  date: string;
  description: string;
  technologies?: string[];
  role?: string;
  website?: string;
}

export interface ProjectType {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  role: string;
  githubLink?: string;
  image: string;
}

export interface CertificationType {
  title: string;
  issuer: string;
  date: string;
  description?: string;
}

export interface LanguageType {
  name: string;
  level: string;
}

export interface SocialLinkType {
  platform: string;
  url: string;
  icon: string;
}