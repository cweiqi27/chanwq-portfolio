import styles from "./keys.module.scss";
import { useSpring, animated, config } from "@react-spring/web";
import { ParallaxLayer } from "@react-spring/parallax";

const Keys = () => {
  return (
    <ParallaxLayer
      offset={0}
      className={styles.keysContainer}
    >
      <div className={styles.whiteKey} />
      <div className={styles.blackKey} />
      <div className={styles.keyShadow} />
    </ParallaxLayer>
  );
}

export default Keys;