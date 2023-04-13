import styles from "./hero.module.scss";
import { ParallaxLayer } from "@react-spring/parallax";
import { useSpring, animated, config } from "@react-spring/web";

const Hero = () => {
  const float = useSpring({
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    config: config.molasses,
  });

  const textAppearGreeting = useSpring({
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    config: config.molasses,
    delay: 300,
  });

  const textAppearName = useSpring({
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    config: config.molasses,
    delay: 800,
  });

  const textAppearIdentity = useSpring({
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    config: config.molasses,
    delay: 1000,
  });

  return (
    <ParallaxLayer offset={0} speed={0.2} className={styles.heroContainer}>
      <animated.div className={styles.heroTitle} style={float}>
        <animated.div style={textAppearGreeting} className={styles.greeting}>
          Hello world, I&apos;m
        </animated.div>
        <animated.h1 style={textAppearName} className={styles.name}>
          Wei Qi
        </animated.h1>
        <animated.div className={styles.identity} style={textAppearIdentity}>
          Web Developer
        </animated.div>
      </animated.div>
    </ParallaxLayer>
  );
};

export default Hero;
