import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  carapp,
  linuxpic,
  emo,
  news,
  game,
  kube,
  ecom,
  bloc,
  skill,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Python Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Member of Competitve Programming Team",
    company_name: "CodeChef PESUECC Chapter",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "April 2023 - Present",
    points: [
      "Inventing new Competitve Coding Problems",
      "Writing the solutions in C++ and Python helping in deployment of Questions for college hackathons and competitions",
      "Mentoring the CP Team",
      "Conducted a Workshop along with Other members on C++ Standard Template Library and introduction to Competitve Coding using C++.",
    ],
  },
  {
    title: "Mentor",
    company_name: "HackerSpace",
    icon: tesla,
    iconBg: "#383E56",
    date: "Oct 2023 - Present",
    points: [
      "Mentoring college students.",
      "Volunteering in conducting Workshops and Hackathons",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Skill Scout",
    description:
      "SkillScout is a job portal platform developed as a 5th-semester DBMS project. It uses PostgreSQL for database management and provides a recommendation system for matching candidates to jobs.",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Next.js",
        color: "pink-text-gradient",
      },
    ],
    image: skill,
    source_code_link: "https://github.com/G-m007/SkillScout.git",
  },
  {
    name: "EmoStream - Emoji Streaming Platform",
    description:
      "Emostream: A Big Data project for real-time emoji streaming and sentiment analysis using Apache Spark and Kafka. It processes emoji-based data streams to analyze user sentiments and trends in real-time.",
    tags: [
      {
        name: "Kafka",
        color: "blue-text-gradient",
      },
      {
        name: "Spark",
        color: "green-text-gradient",
      },
      {
        name: "Socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: emo,
    source_code_link: "https://github.com/G-m007/EmoStream.git",
  },
  {
    name: "Real-Estate-Dapp",
    description:
      "A blockchain-based fractional real estate platform that allows users to invest in properties by purchasing ERC-20 tokens, enabling seamless ownership transfer and automated profit distribution.",
    tags: [
      {
        name: "Solidity",
        color: "blue-text-gradient",
      },
      {
        name: "Metamask",
        color: "green-text-gradient",
      },
      {
        name: "Next.js",
        color: "pink-text-gradient",
      },
    ],
    image: bloc,
    source_code_link: "https://github.com/G-m007/Real-Estate-DApp.git",
  },
  {
    name: "Kubernetes-like Distributed Systems Cluster Simulator",
    description:
      "This project implements a simplified Kubernetes-like cluster simulator that demonstrates core concepts of distributed systems, including node management, pod scheduling, and health monitoring.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Docker",
        color: "green-text-gradient",
      },
      {
        name: "Kubernetes",
        color: "pink-text-gradient",
      },
    ],
    image: kube,
    source_code_link: "https://github.com/G-m007/191_192_210_A-Distributed-Systems-Cluster-Simulation-Framework.git",
  },
  {
    name: "News App",
    description:
      "Advanced News Aggregator is a modern web application that delivers real-time breaking news and trending stories from diverse global sources, powered by NewsAPI and built with Streamlit. The app features multi-language support, advanced search capabilities, and an auto-refreshing interface that keeps users updated with the latest headlines.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Streamlit",
        color: "green-text-gradient",
      },
      {
        name: "NewsAPI",
        color: "pink-text-gradient",
      },
    ],
    image: news,
    source_code_link: "https://github.com/G-m007/News-Blog.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
