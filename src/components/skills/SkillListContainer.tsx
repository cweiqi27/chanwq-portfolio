import SkillListCard from "./SkillListCard";
import styles from "./skillListContainer.module.scss";
import { animated, config, useInView, useSpring } from "@react-spring/web";
import SkillDescription from "./SkillDescription";

const SkillListContainer = () => {
  const [ref, isInView] = useInView({
    rootMargin: "0px 0px -10% 0px",
    once: true,
  });

  return (
    <animated.div className={styles.container} ref={ref}>
      <SkillDescription />
      <SkillListCard type="FRONTEND" isInView={isInView} />
      <SkillListCard type="BACKEND" isInView={isInView} />
      <SkillListCard type="OTHERS" isInView={isInView} />
    </animated.div>
  );
};

export default SkillListContainer;
