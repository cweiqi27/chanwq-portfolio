import styles from "./skillsBackground.module.scss";
import { useSpring, animated } from "@react-spring/web";
import SkillListContainer from "./SkillListContainer";
import SkillDescription from "./SkillDescription";
import { ParallaxLayer } from "@react-spring/parallax";
import SkillsArt from "./SkillsArt";

const SkillsBackground = () => {
  return (
    <ParallaxLayer offset={1} speed={-0.02} className={styles.skillsBackground}>
      <div className={styles.container}>
        <SkillListContainer />
        <SkillsArt />
      </div>
    </ParallaxLayer>
  );
};

export default SkillsBackground;
