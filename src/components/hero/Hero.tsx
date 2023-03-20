import styles from "./hero.module.scss";
import { ParallaxLayer } from "@react-spring/parallax";
import { useSpring, animated, config } from "@react-spring/web";

const Hero = () => {
  const float = useSpring({
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    config: config.molasses,
  });

  const textAppear = useSpring({
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    config: config.molasses,
    delay: 500,
  });

  return (
    <ParallaxLayer offset={0} speed={-0.5} className={styles.heroContainer}>
      <animated.div className={styles.heroTitle} style={float}>
        <animated.div className={styles.greeting}>
          Hello world, i&apos;m
        </animated.div>
        <animated.h1 style={textAppear} className={styles.name}>
          Wei Qi
        </animated.h1>
        <animated.div className={styles.identity}>
          Full-Stack Web Developer
        </animated.div>
      </animated.div>
    </ParallaxLayer>
  );
};

export default Hero;
