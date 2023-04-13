import styles from "./skillsBackground.module.scss";
import { useSpring, animated } from "@react-spring/web";
import SkillList from "./SkillList";
import SkillDescription from "./SkillDescription";
import { ParallaxLayer } from "@react-spring/parallax";

const SkillsBackground = () => {
  return (
    <ParallaxLayer offset={1} className={styles.skillsBackground}>
      <div className={styles.container}>
        <SkillDescription />
        <SkillList />
      </div>
    </ParallaxLayer>
  );
};

export default SkillsBackground;
