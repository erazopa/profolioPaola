import { FaReact,  FaCss3Alt, FaHtml5, FaGithub } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import{ TbBrandNextjs} from "react-icons/tb";

import Project1 from "../assets/Project1.png";
import Project2 from "../assets/Project2.png";
import Project3 from "../assets/Project3.png";

export const Skills = [
  {
    id: 0,
    tech: "React JS",
    icon: <FaReact />,
  },
  {
    id: 1,
    tech: "Next JS",
    icon: <TbBrandNextjs />,
  },
  {
    id: 2,
    tech: "CSS",
    icon: <FaCss3Alt />,
  },
  {
    id: 3,
    tech: "Javascript",
    icon: <SiJavascript />,
  },
  {
    id: 4,
    tech: "Html",
    icon: <FaHtml5 />,
  },
  {
    id: 5,
    tech: "GitHub",
    icon: <FaGithub />,
  },
];

export const projectDetails = [
  {
    id: 0,
    project_name: "Swipe",
    project_desc: "Pagina desarrollada RESPONSIVE Mobile y Desktop",
    tech_stack: ["CSS", "HTML"],
    project_img: Project1,
    project_url: "https://erazopa.github.io/swipe/",
    reverse: false,
  },
  {
    id: 1,
    project_name: "Hotels",
    project_desc:
      "Pagina desarrollada a travez de una interfaz, permitiendo que las tarjetas se actualizen de forma dinámica a medida que los filtros de busqueda cambien y coincidan con los criterios establecidos, lo que proporcionará una experiencia de usuario más interactiva y precisa.",
    tech_stack: ["JS", "CSS", "HTML"],
    project_img: Project2,
    project_url: "https://erazopa.github.io/hotels//",
    reverse: false,
  },
  {
    id: 2,
    project_name: "Hotels ",
    project_desc:
      "Pagina desarrollada haciendo la migración a Next JS, usando librerias_React, Props, componentes, estados",
    tech_stack: ["NextJS", "JSX", "CSS" ],
    project_img: Project3,
    project_url: "https://hotelsreact-paola-adriana-erazos-projects.vercel.app/",
    reverse: false,
  },
  
];
