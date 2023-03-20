import styles from "./skillsBackground.module.scss";
import { useSpring, animated } from "@react-spring/web";
import SkillList from "./SkillList";

type SkillsBackgroundProps = {
  children: React.ReactNode;
};

const SkillsBackground = ({ children }: SkillsBackgroundProps) => {
  return (
    <div className={styles.skillsBackground}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default SkillsBackground;
