import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
        "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",

  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: 
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
},
  {
    Icon: RiComputerLine,
    title: "Whatever",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "typescript",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "next",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "sass",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "15",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "25",
  },
  {
    Icon: BsCircleFill,
    name: "Vs Code",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Pw",
    level: "45",
  },
];

export const projects: IProject[] = [
  { 
    name: "Food Delevery",
    description:
      "This app is made with React and Redux Bootstrap and Sass and is suitable for ordering food",
    image_path: "/images/food.jpg",
    deployed_url: "hhttps://app.netlify.com/sites/ephemeral-kataifi-7145a9",
    github_url: "https://github.com/Mohsen-Yavari/delevery-foods-redux-2022/tree/master/src",
    category: ["react","next"],
    key_techs: ["React", "bootstrap", "sass","redux"],
  },
  {
    name: "Colors website",
    image_path: "/images/colors.jpg",
    deployed_url: "https://steady-scone-cbe261.netlify.app/",
    github_url: "https://github.com/Mohsen-Yavari/colors-react-project/tree/master/src",
    category: ["react","next"],
    description:
      "Color spectrum site made with React",
    key_techs: ["React,Next"],
  },

  {
    name: "Game",
    image_path: "/images/game.jpg",
    deployed_url: "https://symphonious-rabanadas-01f201.netlify.app/",
    github_url: "https://github.com/Mohsen-Yavari/react-game-guess-new",
    category: ["react","typescript"],
    description:
      "An interesting game for guessing numbers",
    key_techs: [
      "React",
      "sass",
    ],
  },

  {
    name: "Kaktus shop",
    image_path: "/images/kaktus.jpg",
    deployed_url: "https://lustrous-gaufre-404b69.netlify.app/",
    github_url: "https://github.com/Mohsen-Yavari/kaktus.project",
    category: ["typescript,react"],
    description:
      "Are you interested in plants??Don't miss the Cactus site, with all kinds of attractive animations",
    key_techs: ["React", "sass","typescript"],
  }
];
