import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaCode,
  FaRocket,
  FaUsers,
  FaRegLightbulb,
  FaMobileAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTailwindcss,
  SiPostgresql,
  SiFramer,
  SiExpo,
} from "react-icons/si";

import sidebarImg from "./../assets/sidebarImg/profile2.png";
import resumeFile from "./../assets/resume/jerry_resume_PDF.pdf";
import manticareImg from "./../assets/works/HMSD.png";
import hmsImg from "./../assets/works/HMS.png";
import GIGS from "./../assets/works/GIGS.png";
import artsImg from "./../assets/works/ARTS2.png";





export const personalInfo = {
  name: "Hi, I'm Jerry",
  title: "Software & Mobile App Developer",
  tagline:
    "You need a responsive, scalable web or mobile application for your startup or business? Let's start a conversation.",
  shortBio:
    "Based in Abuja, I help brands, founders, and teams turn ideas into responsive web and mobile products with clean code, strong UX, and reliable architecture.",
  location: "Abuja, Nigeria",
  email: "jerry.dev134@gmail.com",
  phone: "+234 704 508 6900",
  image: sidebarImg,
  resume: resumeFile,
  socials: {
    github: "https://github.com/Jerry-Tekh",
    linkedin: "https://www.linkedin.com/in/jerry-chinonso-7a7b672a1/",
    twitter: "https://x.com/jtekh134?t=MRpbKjzdZGqUOsVWB5gX0g&s=08",
  },
};

export const highlightStats = [
  { value: "3+", label: "Years building web & mobile experiences" },
  { value: "12+", label: "Projects delivered across frontend, full stack & mobile" },
  { value: "100%", label: "Responsive, mobile-first implementation mindset" },
];

export const serviceCards = [
  {
    title: "Frontend Development (React)",
    text: "Modern, responsive user interfaces built with React, optimized for performance, accessibility, and great user experience.",
    icon: FaCode,
  },
  {
    title: "Mobile App Development",
    text: "Cross-platform iOS & Android apps built with React Native and Expo — fast, native-feeling, and production-ready.",
    icon: FaMobileAlt,
  },
  {
    title: "Backend Development (Node.js & APIs)",
    text: "Scalable backend systems, REST APIs, authentication, and database architecture using Node.js, Express, and PostgreSQL.",
    icon: FaDatabase,
  },
  {
    title: "Full-Stack Web Application Development",
    text: "End-to-end product development from idea to deployment, helping businesses launch reliable and maintainable web applications.",
    icon: FaRocket,
  },
];

export const homeFeatures = [
  {
    eyebrow: "What I bring",
    heading: "Modern builds with personality, clarity, and momentum.",
    text: "I care about more than getting pages on a screen. I shape the experience so it feels smooth, premium, and trustworthy from the first interaction.",
  },
  {
    eyebrow: "How I work",
    heading: "Clear communication and detail-focused execution.",
    text: "From early discovery to polished delivery, I make sure the product not only works well but also feels aligned with your brand and audience.",
  },
];

export const timeline = [
  {
    period: "Foundation",
    title: "Frontend craftsmanship",
    text: "Started by building responsive interfaces and learning how layout, motion, and clarity shape a user's trust in a product.",
  },
  {
    period: "Growth",
    title: "Full-stack & mobile delivery",
    text: "Expanded into APIs, authentication, databases, and React Native so I could own the full product journey — web and mobile — end to end.",
  },
  {
    period: "Now",
    title: "Premium product thinking",
    text: "Focused on building digital experiences that feel modern, useful, and memorable while staying maintainable under the hood.",
  },
];

export const valueCards = [
  {
    title: "User-focused development",
    text: "I build web and mobile applications that are intuitive, accessible, and designed for real users.",
    icon: FaUsers,
  },
  {
    title: "Scalable code architecture",
    text: "Clean, maintainable code using modern JavaScript, React, React Native, and backend best practices.",
    icon: FaRegLightbulb,
  },
  {
    title: "Production-ready delivery",
    text: "I ship fast, reliable, and SEO-friendly web apps and mobile apps ready for real-world use.",
    icon: FaRocket,
  },
];

export const skills = [
  { name: "React", icon: FaReact },
  { name: "React Native", icon: FaMobileAlt },
  { name: "Expo", icon: SiExpo },
  { name: "Node.js", icon: FaNodeJs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Express", icon: SiExpress },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Framer Motion", icon: SiFramer },
  { name: "Git / GitHub", icon: FaGitAlt },
];

export const projectsData = [
  {
    id: 1,
    title: "MantiCare App",
    category: "Fullstack",
    type: "Web",
    summary:
      "A telemedicine platform that connects patients and doctors through appointments, consultations, and a streamlined care experience.",
    description:
      "Built with the MERN stack to support a smooth healthcare workflow, including responsive dashboards, secure data handling, and user-focused interactions.",
    image: manticareImg,
    tech: ["React", "Node.js", "MongoDB", "Express"],
    outcome: "Focused on trust, clarity, and accessible care workflows.",
    live: "https://hospitalmanagementsystem-react-2.onrender.com/",
    github: "https://github.com/Jerry-Tekh",
    featured: true,
  },
  {
    id: 2,
    title: "Art Gallery Website",
    category: "Frontend",
    type: "Web",
    summary:
      "A brand-forward gallery experience designed to present artwork with elegance and strong visual pacing.",
    description:
      "Built in React with animation and responsive layout decisions that help the work stand out while keeping navigation light and intuitive.",
    image: artsImg,
    tech: ["React", "Framer Motion", "CSS Modules"],
    outcome: "Balanced immersive visuals with fast, user-friendly browsing.",
    live: "https://johnixarts.netlify.app/",
    github: "https://github.com/Jerry-Tekh",
    featured: true,
  },
  {
    id: 3,
    title: "Hospital Management Dashboard",
    category: "Backend",
    type: "Web",
    summary:
      "A structured backend-focused build for handling authenticated workflows, records, and scalable service logic.",
    description:
      "Designed around maintainable API architecture, modular services, and clean integration points for frontend consumption.",
    image: hmsImg,
    tech: ["Node.js", "Express", "MongoDB", "React"],
    outcome: "Created a solid base for secure, organized product growth.",
    live: "#",
    github: "https://github.com/Jerry-Tekh",
    featured: true,
  },
  {
    id: 4,
    title: "GIGs Impact Website",
    category: "Fullstack",
    type: "Web",
    summary:
      "A structured backend-focused build for handling authenticated workflows, records, and scalable service logic.",
    description:
      "Designed around maintainable API architecture, modular services, and clean integration points for frontend consumption.",
    image: GIGS,
    tech: ["Node.js", "Express", "PostgreSql", "React"],
    outcome: "Created a solid base for secure, organized product growth.",
    live: "#",
    github: "https://github.com/Jerry-Tekh",
    featured: true,
  },
];

export const processSteps = [
  {
    title: "Discover",
    text: "Understand the idea, audience, goals, and the feeling the product should leave behind.",
  },
  {
    title: "Design in code",
    text: "Translate direction into interactive layouts, motion, and structure that feel premium and usable.",
  },
  {
    title: "Build and refine",
    text: "Ship responsive pages, tune details, and improve the experience until it feels complete.",
  },
];

export const contactReasons = [
  "Need a portfolio, business site, or custom web app",
  "Looking to build a cross-platform mobile app with React Native",
  "Want to refresh an existing product with a stronger user experience",
  "Looking for a dependable frontend, full-stack, or mobile developer to collaborate with",
];
