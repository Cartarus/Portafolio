import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import collfinder from "./src/assets/projects/collfinder.png";
import LoC from "./src/assets/projects/league of cards.jpg";

// import collfinder from "../assets/projects/collfinder.png";

// Traducciones
const resources = {
  en: {
    translation: {
      HERO_CONTENT: `Hello! My name is Cristian Guerrero, a Systems and Computing Engineer from the Pedagogical and Technological University of Colombia, with a passion for Frontend development, interface design, and user experience. I am always eager to expand my skill set and stay updated on the latest technologies, striving to create intuitive and engaging digital experiences that blend functionality with aesthetics.`,
      ABOUT_TEXT: `I am Cristian Guerrero, a Systems and Computing Engineer passionate about Frontend development and user experience design. Currently, I work as a Frontend Developer, creating dynamic and user-friendly applications with React.`,
      ABOUT_TEXT2: `One of my proudest achievements was winning a company hackathon in 2023, where I showcased my ability to solve complex challenges with innovative solutions. Driven by a passion for continuous learning, I am always expanding my skills and embracing new technologies to deliver intuitive and effective digital experiences.`,
      CONTACT: {
        address: "Cra 7 # 28 -55, Tunja, Colombia",
        phoneNo: "+57 3132759680",
        email: "cristian.guerrero.dev.des@gmail.com",
      },
      EXPERIENCES: [
        {
          year: "2023 - Present",
          role: "Frontend Developer",
          company: "GSE Gestión de Seguridad Electrónica S.A",
          description: `I have developed reusable and scalable React components to enhance codebase maintainability and implemented responsive designs that ensure seamless user experiences across devices. My work includes integrating RESTful APIs and managing state using tools like Redux, Axios, and Context API. I also led the migration of legacy components to modern React standards, significantly reducing technical debt and aligning the project with current best practices. Additionally, I have collaborated in Agile teams, contributing to sprint planning, code reviews, and fostering a culture of continuous improvement.`,
          technologies: [
            "Javascript",
            "React.js",
            "Redux",
            "RTK",
            "Styled components",
            "Axios",
          ],
        },
      ],
      PROJECTS: [
        {
          title: "Collfinder",
          description:
            "A web project designed to facilitate the search for schools in Tunja. The platform allowed users to browse a comprehensive database of schools, filter results based on specific criteria, and view detailed profiles of each school. Additionally, it featured a rating system where users could evaluate and provide feedback on the schools, enhancing decision-making for prospective students and parents. The project also integrated a map-based interface, enabling users to pinpoint the exact location of each school, ensuring seamless navigation and accessibility.",
          technologies: ["HTML", "CSS", "Figma", "Node.js", "MongoDB"],
          image: collfinder,
        },
        {
          title: "League of Cards",
          description:
            "A web project built with React and the League of Legends API, featuring a card-matching memory game. The game presented users with a grid of cards, each representing a champion from League of Legends. Players had to flip cards to reveal the champions and find matching pairs within the fewest moves possible. The game dynamically fetched champion data from the API, ensuring a variety of cards and an engaging experience for fans of the game. The project showcased an interactive user interface, smooth animations, and a focus on entertainment and skill-building.",
          technologies: ["HTML", "CSS", "React", "APIRest"],
          image: LoC,
        },
      ],
      TITLES: {
        Technologies: "Technologies",
        About: "About",
        Me:"Me",
        Experience: "Experience",
        Projects: "Projects",
        GetInTouch: "Get in Touch",
      },
    },
  },
  es: {
    translation: {
      HERO_CONTENT: `¡Hola! Mi nombre es Cristian Guerrero, soy Ingeniero de Sistemas y Computación de la Universidad Pedagógica y Tecnológica de Colombia, con pasión por el desarrollo Frontend, el diseño de interfaces y la experiencia de usuario. Siempre estoy dispuesto a ampliar mis habilidades y mantenerme actualizado con las últimas tecnologías, esforzándome por crear experiencias digitales intuitivas y atractivas que combinen funcionalidad con estética.`,
      ABOUT_TEXT: `Soy Cristian Guerrero, Ingeniero de Sistemas y Computación apasionado por el desarrollo Frontend y el diseño de experiencias de usuario. Actualmente, trabajo como Desarrollador Frontend, creando aplicaciones dinámicas y fáciles de usar con React.`,
      ABOUT_TEXT2: `Uno de mis logros de los que me siento más orgulloso fue ganar un hackathon de la empresa en 2023, donde demostré mi capacidad para resolver desafíos complejos con soluciones innovadoras. Impulsado por una pasión por el aprendizaje continuo, siempre estoy ampliando mis habilidades y adoptando nuevas tecnologías para ofrecer experiencias digitales intuitivas y efectivas.`,
      CONTACT: {
        address: "Cra 7 # 28 -55, Tunja, Colombia",
        phoneNo: "+57 3132759680",
        email: "cristian.guerrero.dev.des@gmail.com",
      },
      EXPERIENCES: [
        {
          year: "2023 - Presente",
          role: "Desarrollador Frontend",
          company: "GSE Gestión de Seguridad Electrónica S.A",
          description: `He desarrollado componentes React reutilizables y escalables para mejorar la mantenibilidad del código e implementado diseños responsivos que aseguran experiencias de usuario fluidas en diferentes dispositivos. Mi trabajo incluye la integración de APIs RESTful y la gestión del estado utilizando herramientas como Redux, Axios y Context API. También lideré la migración de componentes heredados a estándares modernos de React, reduciendo significativamente la deuda técnica. Además, he colaborado en equipos ágiles, contribuyendo a la planificación de sprints, revisiones de código y fomentando una cultura de mejora continua.`,
          technologies: [
            "Javascript",
            "React.js",
            "Redux",
            "RTK",
            "Styled components",
            "Axios",
          ],
        },
      ],
      PROJECTS: [
        {
          title: "Collfinder",
          description:
            "Un proyecto web diseñado para facilitar la búsqueda de colegios en Tunja. La plataforma permitía a los usuarios explorar una base de datos completa de colegios, filtrar los resultados según criterios específicos y ver perfiles detallados de cada institución. Además, contaba con un sistema de calificación donde los usuarios podían evaluar y proporcionar comentarios sobre los colegios, mejorando la toma de decisiones para futuros estudiantes y padres. El proyecto también integraba una interfaz basada en mapas, que permitía a los usuarios ubicar con precisión la ubicación de cada colegio, garantizando una navegación y accesibilidad sin problemas.",
          technologies: ["HTML", "CSS", "Figma", "Node.js", "MongoDB"],
          image: collfinder,
        },
        {
          title: "League of Cards",
          description:
            "Un proyecto web desarrollado con React y la API de League of Legends, que presentaba un juego de memoria de emparejamiento de cartas. El juego mostraba a los usuarios una cuadrícula de cartas, cada una representando a un campeón de League of Legends. Los jugadores debían voltear las cartas para revelar a los campeones y encontrar las parejas coincidentes con la menor cantidad de movimientos posible. El juego obtenía dinámicamente datos de los campeones desde la API, garantizando una variedad de cartas y una experiencia atractiva para los fanáticos del juego. El proyecto destacaba por su interfaz de usuario interactiva, animaciones fluidas y un enfoque en el entretenimiento y el desarrollo de habilidades.",
          technologies: ["HTML", "CSS", "React", "APIRest"],
          image: LoC,
        },
      ],
      TITLES: {
        Technologies: "Tecnologías",
        About: "Sobre",
        Me:"Mí",
        Experience: "Experiencia",
        Projects: "Proyectos",
        GetInTouch: "Contacto",
      },
    },
  },
};

// Configurar i18next
i18n
  .use(LanguageDetector) // Detecta automáticamente el idioma del navegador
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en", // Idioma por defecto si no se detecta uno
    interpolation: {
      escapeValue: false, // React ya se encarga de proteger contra XSS
    },
  });

export default i18n;
