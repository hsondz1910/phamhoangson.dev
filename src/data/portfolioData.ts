import { SkillType, ExperienceType, ProjectType, CertificationType, LanguageType, SocialLinkType } from '../types';

export const personalInfo = {
  name: 'PHẠM HOÀNG SƠN',
  role: 'Software Engineering Student',
  about:
      'I\'m a Software Engineering student at Ton Duc Thang University (2021–2026), currently focusing on full-stack development with strong skills in Java, JavaScript, and modern frameworks like React.\n\n' +
      'Beyond writing clean code, I’m passionate about building meaningful digital products that combine technical precision with user empathy. I’ve also gained real-world experience through FPT Software’s Mentoring Program, where I learned agile collaboration and scalable architecture principles.\n\n' +
      'My goal is to grow into a developer who not only writes efficient systems, but also brings value to users and contributes to impactful tech solutions.',
  email: 'hsondz1910@gmail.com',
  phone: '+84-914-037-057',
  location: 'District Nha Be, Ho Chi Minh City',
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
  { name: 'Bootstrap', category: 'technical' },
  // Soft Skills
  { name: 'Problem Solving', category: 'soft' },
  { name: 'Teamwork & Collaboration', category: 'soft' },
  { name: 'Communication', category: 'soft' },
  { name: 'Time Management', category: 'soft' },
  { name: 'Adaptability', category: 'soft' },
];

export const experiences: ExperienceType[] = [
  {
    title: 'ONEBILLION Medical Monitoring Platform',
    organization: 'Team Project (15 members)',
    date: '2024',
    description:
        'As part of the Front-end Mentoring Program by FPT Software, collaborated with a 15-member team to build a real-world medical monitoring platform, allowing users to track health indicators, visualize data, and schedule doctor appointments.',
    technologies: ['Next.js', 'Nest.js', 'PostgreSQL', 'Tailwind CSS', 'Shadcn'],
    tools: ['Scrum', 'Jira (Atlassian)', 'GitHub'],
    role: [
      'Developed cardiovascular UI with table chart, heart rate & SpO₂ diagrams.',
      'Built RESTful APIs for user ratings and appointments, ensuring smooth front-end/backend integration.',
      'Applied advanced JavaScript features such as callback functions, async/await, and adhered to SOLID principles for scalable architecture.',
      'Collaborated via Jira board to manage tasks, track sprint progress, and resolve bugs using Scrum methodology in a professional workflow.',
      'Utilized Swagger for exploring and testing team-developed RESTful APIs during integration and debugging.'
    ],
    website: 'https://locsmentee.xyz'
  }
];

export const projects: ProjectType[] = [
  {
    id: 'techmart',
    title: 'TECHMART E-commerce Platform',
    description: 'Developed a full-stack e-commerce platform using Node.js (Express.js). The system includes key features such as user authentication, product management (with categories, variants, and inventory), advanced search and filtering, shopping cart, checkout, order management, product ratings, and discount codes. Built an admin dashboard for analytics, order processing, and user management. Deployed the project via public cloud hosting or containerized with Docker Compose.\n',
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'Docker', 'JWT', 'Bootstrap'],
    role: 'Backend Developer',
    githubLink: 'https://github.com/hsondz1910/techmart',
    image: 'https://i.postimg.cc/QxNn0h6Z/techmart.png',
  },
  {
    id: 'roomsync',
    title: 'ROOMSYNC – Room Management & Rental App',
    description: 'The app integrates key features such as property listing, advanced room search, appointment scheduling, contract management, and online payment. Additionally, the system supports user reviews, issue reporting, reminder notifications, and displays surrounding area information to enhance the overall user experience.',
    techStack: ['Java', 'Android Studio', 'Firebase Realtime Database', 'Gradle'],
    role: 'Lead Developer',
    githubLink: 'https://github.com/hsondz1910/room-manager',
    image: 'https://i.postimg.cc/dQjx2Lj9/roomsync.png',
  }
];

export const certifications: CertificationType[] = [
  {
    title: 'Aptis ESOL - General English Proficiency Assessment',
    issuer: 'British Council',
    date: '18 May 2025',
    description: 'CEFR Level: B2 | Overall Scale Score: 164/200',
    link: 'https://credentials.britishcouncil.org/ebf71059-a081-470e-9b6d-a5fdd87cc52d?key=0a0f951d4844681bedfa5cfa98eb4f0863d9e01078e0bdd54e8bdfff9bd2b5d6',
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
    platform: 'Phone',
    url: 'tel:+84914037057',
    icon: 'Phone',
  },
  {
    platform: 'Email',
    url: 'mailto:hsondz1910@gmail.com',
    icon: 'Mail',
  },
];