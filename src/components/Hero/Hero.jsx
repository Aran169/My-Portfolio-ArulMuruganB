import React from "react";
import styles from "./HeroStyle.module.css";
import Img from "./../../assets/ProfilePhoto.png";
import moon from "./../../assets/moon.svg";
import sun from "./../../assets/sun.svg";
import twitterlight from "./../../assets/twitter-light.svg";
import githublight from "./../../assets/github-light.svg";
import linkedinlight from "./../../assets/linkedin-light.svg";
import githubdark from "../../assets/github-dark.svg";
import twitterdark from "../../assets/twitter-dark.svg";
import linkedindark from "../../assets/linkedin-dark.svg";
import cv from "./../../assets/Resume.pdf";
import { useTheme } from "../../common/ThemeContext";
function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeicon = theme === "light" ? sun : moon;
  const twittericon = theme === "light" ? twitterlight : twitterdark;
  const githubicon = theme === "light" ? githublight : githubdark;
  const linkedinicon = theme === "light" ? linkedinlight : linkedindark;

  return (
    <section id='hero' className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={Img}
          alt='Profile picture of Arul Murugan B'
        />
        <img
          className={styles.colorMode}
          src={themeicon}
          alt='Color mode icon'
          onClick={toggleTheme}
        />
      </div>
      <div>
        <h1>Arul Murugan B</h1>
        <h2>Full Stack Developer</h2>
        <span>
          <a href='https://x.com/home' target='blank'>
            <img src={twittericon} alt='Twitter Icon' />
          </a>
          <a href='https://github.com/Aran169?tab=repositories' target='blank'>
            <img src={githubicon} alt='Github Icon' />
          </a>
          <a href='https://www.linkedin.com/in/aran169/' target='blank'>
            <img src={linkedinicon} alt='Linkedin Icon' />
          </a>
        </span>
        <p className={styles.description}>
          Skilled Computer Science and Engineering student with expertise in
          full-stack development and machine learning.
        </p>

        <a href={cv} download>
          <button className='hover'>Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
