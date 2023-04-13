import Backend from "./Backend";
import Frontend from "./Frontend";
import styles from "./skillList.module.scss";
import { animated, config, useInView, useSpring } from "@react-spring/web";

const SkillList = () => {
  const [ref, isInView] = useInView({
    rootMargin: "0px 0px -10% 0px",
  });

  const springStyle = useSpring({
    opacity: isInView ? 1 : 0,
    y: isInView ? 0 : 20,
    config: config.wobbly,
    delay: 420,
  });

  return (
    <animated.div className={styles.container} ref={ref} style={springStyle}>
      <Frontend />
      <Backend />
    </animated.div>
  );
};

export default SkillList;
