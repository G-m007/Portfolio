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
  ecom,
  skill,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
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
    name: "ShoPro- E-Commerce Platform",
    description:
      "This is a 3rd SEM WebTech project made using HTML, CSS and JavaScript along with the MERN stack and web scraping. It allows sellers to register their products on our website and users can buy products on site with affiliate marketing.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Html",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: ecom,
    source_code_link: "https://github.com/G-m007/shoPro.git",
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
  {
    name: "Liars Bar",
    description:
      "A multiplayer web-based card game where players bluff and challenge each other in a high-stakes game of deception. Built with FastAPI, WebSockets, and vanilla JavaScript.",
    tags: [
      {
        name: "FastAPI",
        color: "blue-text-gradient",
      },
      {
        name: "Vannila JS",
        color: "green-text-gradient",
      },
      {
        name: "WebSockets",
        color: "pink-text-gradient",
      },
    ],
    image: game,
    source_code_link: "https://github.com/G-m007/Liars-Bar-Game.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
