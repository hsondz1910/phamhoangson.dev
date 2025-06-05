import { SkillType, ExperienceType, ProjectType, CertificationType, LanguageType, SocialLinkType } from '../types';

export const personalInfo = {
  name: 'SƠN PHẠM HOÀNG',
  role: 'Software Engineering Student',
  about: 'Dedicated Software Engineer with a strong foundation in full-stack development, specializing in Java, JavaScript, and React. Passionate about creating scalable, user-centric solutions to solve real-world problems. Graduating from Ton Duc Thang University in 2026, I aim to contribute my technical skills and leadership to drive innovation in technology.',
  email: 'hsondz1910@gmail.com',
  phone: '+84-914-037-057',
  location: 'District 7, Ho Chi Minh City',
  education: {
    university: 'Ton Duc Thang University',
    degree: 'Bachelor of Software Engineering',
    period: '2021 - 2026',
  },
};

export const skills: SkillType[] = [
  // Technical Skills
  { name: 'Java', category: 'technical' },
  { name: 'JavaScript', category: 'technical' },
  { name: 'TypeScript', category: 'technical' },
  { name: 'Spring Boot', category: 'technical' },
  { name: 'Express.js', category: 'technical' },
  { name: 'React', category: 'technical' },
  { name: 'Next.js', category: 'technical' },
  { name: 'Node.js', category: 'technical' },
  { name: 'PostgreSQL', category: 'technical' },
  { name: 'MongoDB', category: 'technical' },
  { name: 'Git', category: 'technical' },
  { name: 'Docker', category: 'technical' },
  { name: 'RESTful APIs', category: 'technical' },
  // Soft Skills
  { name: 'Problem Solving', category: 'soft' },
  { name: 'Teamwork & Collaboration', category: 'soft' },
  { name: 'Communication', category: 'soft' },
  { name: 'Time Management', category: 'soft' },
  { name: 'Adaptability', category: 'soft' },
];

export const experiences: ExperienceType[] = [
  /*
  {
    title: 'TECHMART E-commerce Platform',
    organization: 'Team Project',
    date: '2023',
    description: 'Built a technology e-commerce site featuring product browsing, user authentication, cart management, and secure payments. Developed back-end services with RESTful APIs for product, user, and order management. Optimized MongoDB schema, integrated payment gateways, and containerized with Docker for seamless deployment.',
  },
  */
  {
    title: 'ONEBILLION Medical Monitoring Platform',
    organization: 'Team Project (15 members)',
    date: '2024',
    description: 'Collaborated with a 15-member team to deliver a medical platform allowing users to track health status via indicators, visualize data through charts, and schedule appointments with doctors. Developed a cardiovascular page UI with table charts and heart rate/SpO2 diagrams, enhancing usability and visual clarity.',
  }
];

export const projects: ProjectType[] = [
  {
    id: 'techmart',
    title: 'TECHMART E-commerce Platform',
    description: 'A full-stack e-commerce platform with product management, user authentication, cart functionality, and secure payment processing.',
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'Docker', 'JWT'],
    role: 'Backend Developer',
    githubLink: 'https://github.com/hsondz1910/techmart',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'roomsync',
    title: 'ROOMSYNC – Room Management & Rental App',
    description: 'An Android application for rental room management with 3 user roles: admin, tenant, and landlord, each with distinct features. Supports posting, searching, user management, and real-time data sync via Firebase.',
    techStack: ['Java', 'Android Studio', 'Firebase Realtime Database', 'Gradle'],
    role: 'Lead Developer',
    githubLink: 'https://github.com/hsondz1910/room-manager',
    image: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  }
];

export const certifications: CertificationType[] = [
  {
    title: 'Aptis ESOL - General English Proficiency Assessment',
    issuer: 'British Council',
    date: '18 May 2025',
    description: 'CEFR Level: B2 | Overall Scale Score: 164/200',
  }
];

export const languages: LanguageType[] = [
  {
    name: 'Vietnamese',
    level: 'Native',
  },
  {
    name: 'English',
    level: 'B2 CEFR',
  },
];

export const socialLinks: SocialLinkType[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/hsondz1910',
    icon: 'Github',
  },
  {
    platform: 'Email',
    url: 'mailto:hsondz1910@gmail.com',
    icon: 'Mail',
  },
  {
    platform: 'Phone',
    url: 'tel:+84914037057',
    icon: 'Phone',
  }
];