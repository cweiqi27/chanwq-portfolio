import styles from "./skillsArt.module.scss";
import Books from "/public/images/books.svg";
import Chopin from "/public/images/chopin.svg";
import Tux from "/public/images/tux.svg";
import HTMLTag from "/public/images/html-tag.svg";
import JS from "/public/images/javascript.svg";
import Laptop from "/public/images/laptop.svg";
import Telescope from "/public/images/telescope.svg";
import { animated, config, useSpring, useInView } from "@react-spring/web";

const SkillsArt = () => {
  const [ref, isInView] = useInView({
    rootMargin: "0px 0px -10% 0px",
    once: true,
  });

  const springStyle = useSpring({
    opacity: isInView ? 1 : 0,
    y: isInView ? 0 : 20,
    config: config.molasses,
    delay: 720,
  });

  return (
    <animated.div ref={ref} style={springStyle} className={styles.container}>
      <Chopin className={styles.vector} />
      <Laptop className={styles.vector} />
      <Tux className={styles.vector} />
      <Books className={styles.vector} />
      <HTMLTag className={styles.vector} />
      <JS className={styles.vector} />
      <Telescope className={styles.telescopeGuy} />
      <div className={styles.rectangleBack} />
      <div className={styles.rectangleFront} />
    </animated.div>
  );
};

export default SkillsArt;
