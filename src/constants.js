/* eslint-disable no-unused-vars */
import GitHub from "./assets/icons/github.png";
import Instagram from "./assets/icons/instagram.png";
import LinkedIn from "./assets/icons/linkedin.png";
import Mail from "./assets/icons/mail.png";
import Twitter from "./assets/icons/twitter.png";
import Affogato from "./assets/Affogato.jpg";
import * as Icons from "react-icons";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

export const constants = {
  my_link: "https://anjaliroy.vercel.app",
  links: [
    { index: 1, href: "about" },
    { index: 2, href: "projects" },
    { index: 3, href: "experience" },
    { index: 4, href: "blog" },
  ],
  name: {
    firstName: "anjali",
    lastName: "roy",
  },
  contactArray: [
    {
      key: "Email",
      imgPath: Mail,
      imgAlt: "email-icon",
      href: "mailto:abc@mail.com",
    },
    {
      key: "Instagram",
      imgPath: Instagram,
      imgAlt: "instagram-icon",
      href: "https://www.instagram.com",
    },
    {
      key: "GitHub",
      imgPath: GitHub,
      imgAlt: "github-icon",
      href: "https://www.github.com",
    },
    {
      key: "LinkedIn",
      imgPath: LinkedIn,
      imgAlt: "linkedin-icon",
      href: "https://www.linkedin.com",
    },
    {
      key: "X",
      imgPath: Twitter,
      imgAlt: "x-icon",
      href: "https://www.x.com",
    },
  ],

  experienceStyle: {
    yellowGold: "#ae8303",
    red: "#740909",
    white: "#ffffff",
  },
  experience: [
    {
      index: 1,
      title: "CURRENT",
      subTitle: "Zapcom Group Inc.",
      date: "July 2023 - Present",
      description: "This is a paragraph",
      icon: <FaBriefcase />,
      evidence: [],
      location: "Bengaluru, India",
    },
    {
      index: 2,
      title: "INTERNSHIP",
      subTitle: "Samsung Semiconductor Research India",
      date: "July - December, 2022",
      description: "This is a paragraph",
      icon: <FaBriefcase />,
      evidence: [],
      location: "Bengaluru, India",
    },
    {
      index: 3,
      title: "INTERNSHIP",
      subTitle: "Power Grid Corporation of India, Ltd.",
      date: "May - July, 2021",
      description: "This is a paragraph",
      icon: <FaBriefcase />,
      evidence: [],
      location: "Bengaluru, India",
    },
    {
      index: 4,
      title: "EDUCATION",
      subTitle: "Birla Institute of Technology and Science, Pilani",
      date: "August 2019 - March 2023",
      description: "This is a paragraph",
      icon: <FaGraduationCap />,
      evidence: [],
      location: "Bengaluru, India",
    },
  ],
};
