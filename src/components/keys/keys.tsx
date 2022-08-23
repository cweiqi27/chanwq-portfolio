import styles from "./keys.module.scss";
import { useSpring, animated, config } from "@react-spring/web";
import { ParallaxLayer } from "@react-spring/parallax";

const Keys = () => {
  return (
    <ParallaxLayer
      offset={.25}
      speed={.25}
      className={styles.keysContainer}
    >
      <div className={styles.keys}>
        <animated.div className={styles.keyShadow} />
        <animated.div className={styles.whiteKey} />
        <animated.div className={styles.blackKey} />
      </div>
    </ParallaxLayer>
  );
}

export default Keys;