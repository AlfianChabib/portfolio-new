import { icons } from "lucide-react";

type Social = {
  name: string;
  link: string;
  icon: keyof typeof icons;
};

export const sections = [
  {
    title: "About Me",
    id: "about",
    label: "About",
    subtitle: "Discover who I am and what drives me.",
  },
  {
    title: "My Projects",
    id: "projects",
    label: "Projects",
    subtitle: "A collection of what I've built and contributed to.",
  },
  {
    title: "Contact Me",
    id: "contact",
    label: "Contact",
    subtitle: "Reach out to me for opportunities and connections.",
  },
];

export const socials = [
  { name: "Github", link: "https://github.com/AlfianChabib", icon: "Github" },
  { name: "Email", link: "mailto:alfianchabib109@gmail.com", icon: "Mail" },
  { name: "Linkedin", link: "https://www.linkedin.com/in/alfian-chabib-2a042117b/", icon: "Linkedin" },
] satisfies Social[];

export const skills = [
  { name: "HTML", iconUrl: "/svgs/HTML.svg" },
  { name: "CSS", iconUrl: "/svgs/CSS.svg" },
  { name: "JavaScript", iconUrl: "/svgs/JavaScript.svg" },
  { name: "TypeScript", iconUrl: "/svgs/TypeScript.svg" },
  { name: "React", iconUrl: "/svgs/React.svg" },
  { name: "NodeJS", iconUrl: "/svgs/NodeJS.svg" },
  { name: "Redux", iconUrl: "/svgs/Redux.svg" },
  { name: "Redis", iconUrl: "/svgs/Redis.svg" },
  { name: "MySQL", iconUrl: "/svgs/MySQL.svg" },
  { name: "PostgreSQL", iconUrl: "/svgs/PostgreSQL.svg" },
  { name: "MongoDB", iconUrl: "/svgs/MongoDB.svg" },
  { name: "Git", iconUrl: "/svgs/Git.svg" },
  { name: "NextJS", iconUrl: "/svgs/NextJS.svg" },
  { name: "Tailwind", iconUrl: "/svgs/Tailwind.svg" },
  { name: "Docker", iconUrl: "/svgs/Docker.svg" },
];

export const projects = [
  {
    title: "Multi Warehouse E-Commerce",
    image: "/projects/ecommerce.png",
    description:
      "Multi Warehouse E-commerce is an e-commerce application that implements more than one warehouse in storing its goods. The implementation of this aims to increase the speed of delivery and also reduce shipping costs.",
    github: "https://github.com/purwadhikafullstack/JCWDOL012-02",
    techstack: ["Nextjs", "Express", "Typescript"],
  },
  {
    title: "Job Board App",
    image: "/projects/jobboard.png",
    description:
      "Job Board App is a platform designed to connect job seekers with job opportunities posted by companies. The goal is to simplify the job search process for both job seekers and companies, and to facilitate interaction and exchange of information about available positions.",
    github: "https://github.com/AlfianChabib/job-board",
    techstack: ["Nextjs", "Express", "Typescript"],
  },
];
