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
  Contact2Icon,
  Home,
  SchoolIcon,
  Toolbox,
} from 'lucide-react';
import { CgWorkAlt } from 'react-icons/cg';
import { DiJavascript } from 'react-icons/di';
import { FaGithub, FaLinkedin, FaMedium, FaNodeJs, FaPython, FaReact } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress, SiGmail, SiMongodb, SiPytorch } from 'react-icons/si';


const navLinks: LinksType[] = [
  { label: 'Home', link: '#hero', icon: Home },
  { label: 'Education', link: '#education', icon: SchoolIcon },
  {
    label: 'Experience',
    link: '#experience',
    icon: CgWorkAlt,
  },
  { label: 'Skills', link: '#skills', icon: Toolbox },
  {
    label: 'Projects',
    link: '#projects',
    icon: Briefcase,
  },
  { label: 'Contact', link: '#contact', icon: Contact2Icon },
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
    imgSrc: '/project1.png',
    title: 'Full Healthcare System',
    tags: ['MERN', 'Google ADK','AI'],
    projectLink: 'https://harshalchalke31.github.io/fullstack_healthcare_system/#/',
  },
  {
    imgSrc: '/project2.png',
    title: 'MCP Trip Planning Agent',
    tags: ['Next.js', 'MCP'],
    projectLink: 'https://github.com/harshalchalke31/trip_planner',
  },
  {
    imgSrc: '/project3.png',
    title: 'Full stack RAG Chatbot',
    tags: ['MERN', 'RAG'],
    projectLink: 'https://github.com/harshalchalke31/journAI',
  },
  {
    imgSrc: '/project4.png',
    title: 'EchoFrame',
    tags: ['Research', 'Medical Imaging'],
    projectLink: 'https://github.com/harshalchalke31/echoframe_capstone',
  },
];

const education: ExperienceType[] = [
  {
    year: 'August 2023 – May 2025',
    title: 'Master of Science in Artificial Intelligence',
    institute: 'Rochester Institute of Technology',
    desc: 'Focused on Machine Learning, Natural Language Processing, Visual Analytics, Ethics of AI, Mathematical Methods for AI, and ML for Difficult Data. Graduated with 3.60 GPA.',
    courses: ['Mathematics', 'Machine Learning', 'Difficult Data', 'Robustness in ML', 'Ethics']
  },
  {
    year: 'August 2019 – May 2023',
    title: 'Bachelor of Technology in Information Technology',
    institute: 'NMIMS University',
    desc: 'Built strong foundations in software engineering, data structures, databases, and full stack development. Graduated with 3.47 GPA.',
    courses: ['OOPs', 'DSA', 'Computer Networks', 'OS', 'Data Warehousing', 'Machine Learning']
  },
];

const experience: ExperienceType[] = [
  {
    year: 'June 2025 – Present',
    title: 'AI Engineer',
    institute: 'Cardio AI',
    desc: 'Developing deep learning models for echocardiogram and ECG analysis using PyTorch. Converting models to ONNX and deploying scalable inference endpoints on GCP Vertex AI. Building FastAPI backend modules for agentic clinical decision support workflows.',
    courses: ['GCP', 'Python', 'PyTorch', 'FastAPI', 'Agentic AI']
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