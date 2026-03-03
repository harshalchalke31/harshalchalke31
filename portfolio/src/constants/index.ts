/**
 * Types
 */
import type {
  ExperienceType,
  LinksType,
  ProjectType,
  ToolsType,
} from '@/types';

/**
 * Assets
 */
import {
  Briefcase,
  FileText,
  Home,
  Mail,
  MessageCircle,
  Settings,
  User,
} from 'lucide-react';
import { DiJavascript } from 'react-icons/di';
import { FaGithub, FaLinkedin, FaMedium, FaNodeJs, FaPython, FaReact } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import { FiFigma } from 'react-icons/fi';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress, SiGmail, SiMongodb, SiPytorch } from 'react-icons/si';


const navLinks: LinksType[] = [
  { label: 'Home', link: '/', icon: Home },
  {
    label: 'projects',
    link: '/projects',
    icon: Briefcase,
  },
  { label: 'About', link: '/about', icon: User },
  {
    label: 'Services',
    link: '/services',
    icon: Settings,
  },
  { label: 'Resume', link: '/resume', icon: FileText },
  {
    label: 'Reviews',
    link: '/testimonials',
    icon: MessageCircle,
  },
  { label: 'Contact', link: '/contact', icon: Mail },
];

const socialLinks: LinksType[] = [
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/harshalchalke31/',
  },
  {
    icon: FaGithub,
    label: 'Github',
    link: 'https://github.com/harshalchalke31',
  },
  {
    icon: FaX,
    label: 'X.com',
    link: 'https://x.com/harshalchalke08',
  },
  {
    icon: FaMedium,
    label: 'Medium',
    link: 'https://medium.com/@harshalchalke31',
  },
  {
    icon: SiGmail,
    label: 'Gmail',
    link: 'mailto:harshal.chalke2001@gmail.com',
  },
];

const projectsData: ProjectType[] = [
  {
    imgSrc: '/project.jpeg',
    title: 'Full Healthcare System',
    tags: ['API', 'Development'],
    projectLink: 'https://harshalchalke31.github.io/fullstack_healthcare_system/#/',
  },
  {
    imgSrc: '/project.jpeg',
    title: 'Full stack music app',
    tags: ['API', 'Development'],
    projectLink: 'https://harshalchalke31.github.io/fullstack_healthcare_system/#/',
  },
  {
    imgSrc: '/project.jpeg',
    title: 'Full stack music app',
    tags: ['API', 'Development'],
    projectLink: 'https://harshalchalke31.github.io/fullstack_healthcare_system/#/',
  },
  {
    imgSrc: '/project.jpeg',
    title: 'Full stack music app',
    tags: ['API', 'Development'],
    projectLink: 'https://harshalchalke31.github.io/fullstack_healthcare_system/#/',
  },
];

const education: ExperienceType[] = [
  {
    year: 'August 2023 – May 2025',
    title: 'Master of Science in Artificial Intelligence',
    institute: 'Rochester Institute of Technology',
    desc: 'Focused on Machine Learning, Natural Language Processing, Visual Analytics, Ethics of AI, Mathematical Methods for AI, and ML for Difficult Data. Graduated with 3.60 GPA.',
  },
  {
    year: 'August 2019 – May 2023',
    title: 'Bachelor of Technology in Information Technology',
    institute: 'NMIMS University',
    desc: 'Built strong foundations in software engineering, data structures, databases, and full stack development. Graduated with 3.47 GPA.',
  },
];

const experience: ExperienceType[] = [
  {
    year: 'June 2025 – Present',
    title: 'AI Engineer',
    institute: 'Cardio AI',
    desc: 'Developing deep learning models for echocardiogram and ECG analysis using PyTorch. Converting models to ONNX and deploying scalable inference endpoints on GCP Vertex AI. Building FastAPI backend modules for agentic clinical decision support workflows.',
  },
];

const tools: ToolsType[] = [
  {
    label: 'Python',
    imgSrc: FaPython,
  },
    {
    label: 'PyTorch',
    imgSrc: SiPytorch,
  },
  {
    label: 'JavaScript',
    imgSrc: DiJavascript,
  },
  {
    label: 'Tailwind CSS',
    imgSrc: RiTailwindCssFill,
  },
  {
    label: 'React',
    imgSrc: FaReact,
  },

  {
    label: 'Node.js',
    imgSrc: FaNodeJs,
  },
  {
    label: 'Express.js',
    imgSrc: SiExpress,
  },
  {
    label: 'Mongodb',
    imgSrc: SiMongodb,
  },
];


export {
  socialLinks,
  projectsData,
  education,
  experience,
  tools,
  navLinks,
};