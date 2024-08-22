import styles from "./SkillsStyles.module.css";
import checkmarkimgdark from "./../../assets/checkmark-dark.svg";
import checkmarkimglight from "./../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const checkmarkimg = theme === "light" ? checkmarkimglight : checkmarkimgdark;

  return (
    <section id='skills' className={styles.container}>
      <h1 className='sectionTitle'>Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkmarkimg} skill='C' />
        <SkillList src={checkmarkimg} skill='C++' />
        <SkillList src={checkmarkimg} skill='JavaScript' />
        <SkillList src={checkmarkimg} skill='HTML' />
        <SkillList src={checkmarkimg} skill='CSS' />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkmarkimg} skill='MySQL' />
        <SkillList src={checkmarkimg} skill='MongoDB' />
        <SkillList src={checkmarkimg} skill='ExpressJS' />
        <SkillList src={checkmarkimg} skill='ReactJS' />
        <SkillList src={checkmarkimg} skill='NodeJS' />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkmarkimg} skill='Communication' />
        <SkillList src={checkmarkimg} skill='Interpersonal' />
        <SkillList src={checkmarkimg} skill='Leadership' />
        <SkillList src={checkmarkimg} skill='Probelem Solving' />
      </div>
    </section>
  );
}

export default Skills;
