import { animated, config, useInView, useSpring } from "@react-spring/web";
import styles from "./skillDescrption.module.scss";

const SkillDescription = () => {
  const [ref, isInView] = useInView({
    rootMargin: "-10% 0px",
  });

  const springStyle = useSpring({
    opacity: isInView ? 1 : 0,
    y: isInView ? 0 : 20,
    config: config.gentle,
    delay: 250,
  });

  return (
    <animated.div className={styles.container}>
      <h1 className={styles.title}>i. REPERTOIRE</h1>
      <div className={styles.description}>
        <p>
          My bread and butter is React, with TypeScript as my language of
          choice, and Next.js as my favourite meta framework.
        </p>
      </div>
    </animated.div>
  );
};

export default SkillDescription;
