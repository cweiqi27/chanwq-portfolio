import { animated, config, useInView, useSpring } from "@react-spring/web";
import styles from "./skillDescrption.module.scss";

const SkillDescription = () => {
  const [ref, isInView] = useInView({
    rootMargin: "0px 0px -10% 0px",
    once: true,
  });

  const springStyle = useSpring({
    opacity: isInView ? 1 : 0,
    y: isInView ? 0 : 20,
    config: config.wobbly,
    delay: 250,
  });

  return (
    <animated.div className={styles.container} ref={ref} style={springStyle}>
      <h1 className={styles.title}>i. Repertoire</h1>
      <div className={styles.description}>
        <p>Here is a list of technologies that I work with.</p>
      </div>
    </animated.div>
  );
};

export default SkillDescription;
