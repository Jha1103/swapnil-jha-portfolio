/* eslint-disable no-unused-vars */
import GitHub from "./assets/icons/github.png";
import LinkedIn from "./assets/icons/linkedin.png";
import Mail from "./assets/icons/mail.png";
import Resume from "./assets/icons/resume.png";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

export const constants = {
  my_link: "https://swapnil-jha.vercel.app",
  links: [
    { index: 1, href: "about" },
    { index: 2, href: "projects" },
    { index: 3, href: "experience" },
    { index: 4, href: "blog" },
  ],
  name: {
    firstName: "swapnil",
    lastName: "jha",
  },
  contactArray: [
    {
      key: "Email",
      imgPath: Mail,
      imgAlt: "email-icon",
      href: "mailto:swapnil.jh1103@gmail.com",
    },
    {
      key: "GitHub",
      imgPath: GitHub,
      imgAlt: "github-icon",
      href: "https://github.com/Jha1103",
    },
    {
      key: "LinkedIn",
      imgPath: LinkedIn,
      imgAlt: "linkedin-icon",
      href: "https://www.linkedin.com",
    },
    {
      key: "Resume",
      imgPath: Resume,
      imgAlt: "resume-icon",
      href: "https://drive.google.com",
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
      description:
        "Web Development - React, Angular, Node.js, AWS Lambda, Google Analytics",
      icon: <FaBriefcase />,
      evidence: [],
      location: "Bengaluru, India",
    },
    {
      index: 2,
      title: "INTERNSHIP",
      subTitle: "Samsung Semiconductor Research India",
      date: "July - December, 2022",
      description: "Wi-Fi, Grafana, Jenkins, Prometheus, Python, PostgreSQL",
      icon: <FaBriefcase />,
      evidence: [],
      location: "Bengaluru, India",
    },
    {
      index: 3,
      title: "INTERNSHIP",
      subTitle: "Power Grid Corporation of India, Ltd.",
      date: "May - July, 2021",
      description: "Telecommunications, Fiber Optics",
      icon: <FaBriefcase />,
      evidence: [],
      location: "Bengaluru, India",
    },
    {
      index: 4,
      title: "EDUCATION",
      subTitle: "Birla Institute of Technology and Science, Pilani",
      date: "August 2019 - March 2023",
      description: "B. E., Electrical and Electronics",
      icon: <FaGraduationCap />,
      evidence: [],
      location: "Bengaluru, India",
    },
  ],
};
