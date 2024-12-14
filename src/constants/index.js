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
    name: "Flight Crux",
    description:
      "FlightCrux is an interactive GUI based Application that helps users get the upcoming most cheapest flights with a single click of a button. The Project has been entirely made in Python with the help of modules like Tkinter, Customtkinter, Gmaps, SMTP and Selenium for web scraping. The Application fetches flight itinerary of 3-5 Flights from MakeMyTrip.com using the selenium module for Web Scraping and Send an detailed Email to the user on his registered mail ID which is then saved on a MySQL database which acts as the backend.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Tkinter",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Fxrdeen/Python-College-Project",
  },
  {
    name: "E-Commerce Platform",
    description:
      "E-Commerce Web Application based on React that make use of MongoDB Atlas and ExpressJS to store the product details and users can register thier product for sale on the website as well.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Fxrdeen/React-Project",
  },
  {
    name: "Blog App",
    description:
      "A Blog App which allows users to register, login and post blogs. Made using the MERN stack with React.js and Express.js and specifically used MongoDB Atlas for the backend",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB Atlas",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Fxrdeen/Blog-App",
  },
  {
    name: "Car App",
    description:
      "A Car app that uses an API to show the cars selected based on thier model and type. Made using Next.js, Vite, Node.js and Tailwind CSS.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Vite",
        color: "pink-text-gradient",
      },
    ],
    image: carapp,
    source_code_link: "https://github.com/Fxrdeen/Car-App",
  },
  {
    name: "Data Structures Project",
    description:
      "This project focuses on the use of trees in order to print the file structure of the folder in a tree format in the terminal. It uses multiple linux functions of C to make directories, delete them and modify them by adding files.",
    tags: [
      {
        name: "Trees",
        color: "blue-text-gradient",
      },
      {
        name: "Linux",
        color: "green-text-gradient",
      },
      {
        name: "C Lang",
        color: "pink-text-gradient",
      },
    ],
    image: linuxpic,
    source_code_link: "https://github.com/Fxrdeen/DSA_Project",
  },
];

export { services, technologies, experiences, testimonials, projects };
