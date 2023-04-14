import styles from "./keys.module.scss";
import { useSpring, animated, config } from "@react-spring/web";
import { ParallaxLayer } from "@react-spring/parallax";

const Keys = () => {
  const shadowStyle = useSpring({
    from: { y: 0, x: 0 },
    to: { y: 10, x: 10 },
    config: config.slow,
    loop: { reverse: true },
  });

  const whiteStyle = useSpring({
    from: { y: 0, x: 0 },
    to: { y: -10, x: -10 },
    delay: 175,
    loop: { reverse: true },
    config: config.slow,
  });

  const blackStyle = useSpring({
    from: { y: 0, x: -5 },
    to: { y: -10, x: -15 },
    delay: 75,
    loop: { reverse: true },
    config: config.slow,
  });

  return (
    <ParallaxLayer offset={0.25} speed={0.05} className={styles.container}>
      <animated.div className={styles.shadowKey} style={shadowStyle} />
      <animated.div className={styles.whiteKey} style={whiteStyle} />
      <animated.div className={styles.blackKey} style={blackStyle} />
    </ParallaxLayer>
  );
};

export default Keys;
