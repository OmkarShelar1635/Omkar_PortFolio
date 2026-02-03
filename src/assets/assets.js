import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/profile.avif';
import portfolio from '../assets/portfolio.jpeg'
import projects1 from '../assets/project-1.png'
import projects2 from '../assets/project-2.png'
import projects3 from '../assets/project-3.png'
import projects4 from '../assets/project-4.png'
import projects5 from '../assets/project-5.png'


export const assets = {
  profileImg, portfolio
}


export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: 'Innovative',
    description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
    color: 'text-purple'
  },
  {
    icon: FaPaintBrush,
    title: 'Design Oriented',
    description: 'Beautiful design and user experience are at the heart of everything I create.',
    color: 'text-pink'
  },
  {
    icon: FaCode,
    title: 'Clean Code',
    description: 'I write maintainable, efficient code following best practices and modern patterns.',
    color: 'text-blue'
  }
];



// export const skills = [
//   {
//     title: 'Frontend Development',
//     icon: FaReact,
//     description: 'Building responsive and interactive user interfaces with modern frameworks.',
//     tags: ['React', 'Vue.js', 'Angular', 'TypeScript']
//   },
//   {
//     title: 'Backend Development',
//     icon: FaServer,
//     description: 'Creating robust server-side applications and RESTful APIs.',
//     tags: ['Node.js', 'Express', 'Django', 'Laravel']
//   },
//   {
//     title: 'Database Management',
//     icon: FaDatabase,
//     description: 'Designing and optimizing databases for performance and scalability.',
//     tags: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase']
//   },
//   {
//     title: 'Mobile Development',
//     icon: FaMobileAlt,
//     description: 'Building cross-platform mobile applications with modern tools.',
//     tags: ['React Native', 'Flutter', 'Ionic', 'Swift']
//   },
//   {
//     title: 'Cloud & DevOps',
//     icon: FaCloud,
//     description: 'Deploying and managing applications in cloud environments.',
//     tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
//   },
//   {
//     title: 'Tools & Technologies',
//     icon: FaTools,
//     description: 'Essential tools and technologies I use in my development workflow.',
//     tags: ['Git & GitHub', 'Webpack', 'Figma', 'Jest']
//   }
// ];



export const projects = [
  {
    title: "imagify – AI Image Generator",
    description: "An AI-powered platform that transforms text prompts into high-quality images within seconds. Imagify leverages generative AI to help creators, designers, and developers quickly visualize ideas, generate artwork, and explore creative possibilities through simple text inputs.",
    image: projects1,
    tech: ["MongoDB", "Express.js", "React", "Node.js", "AI Image Generation API", "Stripe", "Razorpay", "Tailwind CSS"],
    icons: [FaReact, FaNodeJs, FaDatabase, FaStripe],
    demo: "#",
    code: "#",
  },
 
  {
    title: "DiaGuard AI – Intelligent Diabetes Risk Prediction System",
    description: "An AI-driven healthcare application that predicts the risk of diabetes based on user health parameters. DiaGuard AI uses machine learning models to analyze medical data and provide early risk insights, helping users take preventive actions and make informed health decisions.",
    image: projects3,
    tech: ["Python", "Machine Learning (Scikit-learn)", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Streamlit", "SVM", "RandomForest"],
    icons: [FaReact, FaDatabase],
    demo: "#",
    code: "#",
  },
   {
    title: "Synthesia",
    description: "Built a full-stack music streaming app using React, Tailwind CSS, Node.js, Express, MongoDB . Implemented JWT authentication, user profiles, favourites, and playlist search . Integrated Jamendo API with custom audio player (shuffle, loop, volume controls) . Used React Context API for state management and REST APIs for backend services",
    image: projects5,
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS","REST APIs","Jamendo API Integration","Audio Streaming"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
   {
    title: "iTask – Smart Task Management App",
    description: "A simple and efficient task management application that allows users to create, update, and delete tasks seamlessly. iTask helps users organize daily work, track progress, and stay productive with a clean and responsive interface.",
    image: projects2,
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS", "JWT Authentication"],
    icons: [FaVuejs, FaFire, FaCloud, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Portfolio Website",
    description: "A modern and responsive personal portfolio website designed to showcase projects, technical skills, and professional experience. The portfolio highlights featured work, provides smooth navigation, and offers an easy way for visitors and recruiters to connect.",
    image: projects4,
    tech: ["React", "Tailwind CSS", "Framer Motion", "EmailJS"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
 
];


export const workData = [
  {

    role: "Full Stack Development Intern",
    company: "Emertxe Information Technologies",
    duration: "Dec 2025 – Jan 2026 | Remote",
    description:
      "Gained hands-on experience in building Full Stack Music Streaming App using the MERN stack (React, Node.js, Express.js, MongoDB). Worked on responsive frontend UI development, RESTful API creation, database integration, and CRUD operations while strengthening core full-stack concepts through project-based learning.",
    color: "purple"


  },
];
