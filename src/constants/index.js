import collfinder from "../assets/projects/collfinder.png";
import LoC from "../assets/projects/league of cards.jpg";
// import project3 from "../assets/projects/project-3.jpg";
// import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Hello! ,My name is Cristian Guerrero, a Systems and Computing Engineer from the Pedagogical and Technological University of
Colombia, with a passion for Frontend development, interface design, and user experience. I am always eager to expand my skill set and
stay updated on the latest technologies, striving to create intuitive and engaging digital experiences that blend functionality with
aesthetics`;

export const ABOUT_TEXT = `I am Cristian Guerrero, a Systems and Computing Engineer passionate about Frontend development and user experience design. Currently, I work as a Frontend Developer, creating dynamic and user-friendly applications with React.`;

export const ABOUT_TEXT2 = "One of my proudest achievements was winning a company hackathon in 2023, where I showcased my ability to solve complex challenges with innovative solutions. Driven by a passion for continuous learning, I am always expanding my skills and embracing new technologies to deliver intuitive and effective digital experiences."

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Frontend Developer",
    company: "GSE Gestión de Seguridad Electrónica S.A",
    description: `I have developed reusable and scalable React components to enhance codebase maintainability and implemented responsive designs that ensure seamless user experiences across devices. My work includes integrating RESTful APIs and managing state using tools like Redux, Axios, and Context API. I also led the migration of legacy components to modern React standards, significantly reducing technical debt and aligning the project with current best practices. Additionally, I have collaborated in Agile teams, contributing to sprint planning, code reviews, and fostering a culture of continuous improvement.`,
    technologies: ["Javascript", "React.js", "Redux", "RTK", "Styled components","Axios"],
  },
  // {
  //   year: "2022 - 2023",
  //   role: "Frontend Developer",
  //   company: "Adobe",
  //   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  //   technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  // },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "Collfinder",
    image: collfinder,
    description:
      "A web project designed to facilitate the search for schools in Tunja. The platform allowed users to browse a comprehensive database of schools, filter results based on specific criteria, and view detailed profiles of each school. Additionally, it featured a rating system where users could evaluate and provide feedback on the schools, enhancing decision-making for prospective students and parents. The project also integrated a map-based interface, enabling users to pinpoint the exact location of each school, ensuring seamless navigation and accessibility.",
    technologies: ["HTML", "CSS", "Figma", "Node.js", "MongoDB"],
  },
  {
    title: "League of Cards",
    image: LoC,
    description:
      "A web project built with React and the League of Legends API, featuring a card-matching memory game. The game presented users with a grid of cards, each representing a champion from League of Legends. Players had to flip cards to reveal the champions and find matching pairs within the fewest moves possible. The game dynamically fetched champion data from the API, ensuring a variety of cards and an engaging experience for fans of the game. The project showcased an interactive user interface, smooth animations, and a focus on entertainment and skill-building.",
    technologies: ["HTML", "CSS", "React", "APIRest"],
  },
  // {
  //   title: "Portfolio Website",
  //   image: project3,
  //   description:
  //     "A personal portfolio website showcasing projects, skills, and contact information.",
  //   technologies: ["HTML", "CSS", "React", "Bootstrap"],
  // },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
