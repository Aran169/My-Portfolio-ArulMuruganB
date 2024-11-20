import React from "react";
import styles from "./ProjectsStyles.module.css";
import XO from "./../../assets/XOimage.png";
import BT from "./../../assets/BudgetTrackerScreenshot.png";
import ProjectCard from "../../common/ProjectCard";
import LM from "./../../assets/bmsphoto.png";
import MP from "./../../assets/MP.png";
import smart from './../../assets/smart.png';
function Projects() {
  return (
    <section id='project' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
      <ProjectCard
          src={smart}
          link='https://github.com/Aran169/City-Monitor'
          h3='Smart City Monitor'
          P='ReactJS | NodeJS | MongoDB | Tableau'
        />
        <ProjectCard
          src={XO}
          link='https://github.com/Aran169/X-O-game-using-Mini-Max-algorithm-Java'
          h3='XO Game'
          P='Java'
        />
        <ProjectCard
          src={BT}
          link='https://github.com/Aran169/Budget-Tracker'
          h3='Budget Tracker'
          P='ReactJS | NodeJS | MongoDB'
        />
        <ProjectCard
          src={LM}
          link='https://github.com/Aran169/Library_Management_System_Python'
          h3='Library Management System'
          P='Python | SQL'
        />
        <ProjectCard
          src={MP}
          link='https://github.com/Aran169/My-Portfolio-ArulMuruganB'
          h3='My Portfolio'
          P='ReactJS'
        />
      </div>
    </section>
  );
}

export default Projects;
