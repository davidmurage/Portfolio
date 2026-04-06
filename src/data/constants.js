import awsIcon from "../images/skills/aws.svg";
import avlcLogo from "../images/avlc-logo.png";
import bootstrapIcon from "../images/skills/bootstrap.svg";
import css3Icon from "../images/skills/css3.svg";
import davidCv from "../images/Davids Professional_CV.docx";
import farmguardProject from "../images/farmguard-project.png";
import foundationProject from "../images/foundation-project.png";
import expressIcon from "../images/skills/express.svg";
import gitIcon from "../images/skills/git.svg";
import githubIcon from "../images/skills/github.svg";
import html5Icon from "../images/skills/html5.svg";
import hrSystemProject from "../images/hr-system-project.png";
import javascriptIcon from "../images/skills/javascript.svg";
import materialUiIcon from "../images/skills/materialui.svg";
import mongodbIcon from "../images/skills/mongodb.svg";
import mysqlIcon from "../images/skills/mysql.svg";
import netlifyIcon from "../images/skills/netlify.svg";
import nodeJsIcon from "../images/skills/nodejs.svg";
import postmanIcon from "../images/skills/postman.svg";
import pythonIcon from "../images/skills/python.svg";
import reactIcon from "../images/skills/react.svg";
import safariCrunchProject from "../images/safari-crunch-project.png";
import vscodeIcon from "../images/skills/vscode.svg";

export const Bio = {
  name: "David Murage",
  email: "davidmurage415@gmail.com",
  roles: [
    "Frontend Developer",
    "React developer",
    "Programmer",
    "Information Technology Officer",
  ],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/davidmurage",
  resume: davidCv,
  linkedin: "https://www.linkedin.com/in/david-murage-4513a722a/",
  insta: "https://www.instagram.com/david_murage5",
  facebook: "https://www.facebook.com/profile.php?id=100085263425164&mibextid=ZbWKwL",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image: reactIcon,
      },
      {
        name: "HTML",
        image: html5Icon,
      },
      {
        name: "CSS",
        image: css3Icon,
      },
      {
        name: "JavaScript",
        image: javascriptIcon,
      },
      {
        name: "Bootstrap",
        image: bootstrapIcon,
      },
      {
        name: "Material UI",
        image: materialUiIcon,
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: nodeJsIcon,
      },
      {
        name: "Express Js",
        image: expressIcon,
      },
      {
        name: "Python",
        image: pythonIcon,
      },
      {
        name: "MySQL",
        image: mysqlIcon,
      },
      {
        name: "MongoDB",
        image: mongodbIcon,
      },
    ],
  },
  {
    title: "Tools",
    skills: [
      {
        name: "Git",
        image: gitIcon,
      },
      {
        name: "GitHub",
        image: githubIcon,
      },
      {
        name: "Netlify",
        image: netlifyIcon,
      },
      {
        name: "VS Code",
        image: vscodeIcon,
      },
      {
        name: "Postman",
        image: postmanIcon,
      },
      {
        name: "AWS",
        image: awsIcon,
      },
    ],
  },
];

export const experiences = [
  {
    id: 3,
    img: avlcLogo,
    role: "Information Technology Officer",
    company: "AVLC Group - Upper Hill, Nairobi, Kenya",
    date: "Sep 2025 - Present",
    desc: "Maintain and optimize company websites, provide back-end technical support, manage cPanel, domains, and email configurations, administer hosting environments and DNS settings, and support API integrations with third-party platforms and services.",
    skills: [
      "cPanel",
      "Domain Management",
      "DNS Administration",
      "API Integration",
      "Technical Support",
    ],
  },
  {
    id: 0,
    img: "https://davidmurage.github.io/Images/Kalro logo.avif",
    role: "ICT specialist",
    company: "KALRO",
    date: "Sep 2024 - Dec 2024",
    desc: "Assisted in collecting, cleaning, and processing large datasets related to agricultural research.Utilized Excel to generate actionable insights from research data.Worked on backend systems to ensure seamless data flow and system functionality.",
    skills: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
  /*{
    id: 1,
    img: "https://davidmurage.github.io/Images/frontend-mentor.jpg",
    role: "Frontend Engineer Trainee",
    company: "Frontend mentor",
    date: "June 2022 - Present",
    desc: "Working on the frontend of the web application using HTML,CSS,JavaScript, Material UI.",
    skills: [
      "Material UI",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },*/
  {
    id: 2,
    img: "https://davidmurage.github.io/Images/zidio.png",
    role: "Web developer internship",
    company: "Zidio development",
    date: "Feb 2024 - March 2024",
    desc: "Worked as a backend developer and Implemented features like: User Authentication,Real-time Location Tracking, and Security and Privacy Measures",
    skills: [
      "Node.js",
      "MongoDB",
      "JavaScript",
    ],
  },
];

export const education = [
  {
    id: 0,
    school: "Dedan Kimathi University Of Technology",
    date: "Oct 2021 - May 2025",
    desc: "I  pursued a Bachelor's degree in Business Information Technology at Dedan Kimathi University Of Technology, Nyeri. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others.",
    degree: "Bachelor of Science - Bsc, Business Information Technology",
  },
  {
    id: 1,
    school: "Karima Boys High School",
    date: "Jan 2017 - March 2021",
    grade: "B",
    desc: "I completed my high school education at Karima Boys High School.",
  },
];

export const projects = [
  {
    id: 0,
    title: "FarmGuard",
    date: "2026",
    description:
      "An AI-powered agriculture platform designed to monitor farm and community data, predict disease risks early, and deliver actionable alerts before outbreaks occur.",
    image: farmguardProject,
    tags: [
      "React",
      "AgriTech",
      "AI Analysis",
      "Early Warning",
      "Dashboard",
    ],
    category: "web app",
    webapp: "https://farm-guard-one.vercel.app/",
  },
  {
    id: 1,
    title: "HR Management System",
    date: "2026",
    description:
      "A human resources platform built to streamline employee records, manage leave requests, automate payroll workflows, and support day-to-day HR operations from one place.",
    image: hrSystemProject,
    tags: [
      "React",
      "HR Tech",
      "Employee Records",
      "Leave Management",
      "Payroll",
    ],
    category: "web app",
    webapp: "https://hr-system-blond.vercel.app/",
  },
  {
    id: 2,
    title: "Safari Crunch",
    date: "2026",
    description:
      "A polished e-commerce website for a Kenyan granola brand, featuring product discovery, clear pricing, strong brand storytelling, and responsive shopping flows.",
    image: safariCrunchProject,
    tags: [
      "React",
      "E-commerce",
      "Tailwind CSS",
      "Product Catalog",
      "Responsive UI",
    ],
    category: "web app",
    webapp: "https://safari-crunch.vercel.app/",
  },
  {
    id: 3,
    title: "KCB Foundation Student Portal",
    date: "2026",
    description:
      "A student sponsorship portal focused on document uploads, academic performance tracking, and transparent communication between students, institutions, and the foundation team.",
    image: foundationProject,
    tags: [
      "React",
      "Student Portal",
      "Document Uploads",
      "Performance Tracking",
      "Responsive UI",
    ],
    category: "web app",
    webapp: "https://foundation-lac.vercel.app/",
  },
];

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
