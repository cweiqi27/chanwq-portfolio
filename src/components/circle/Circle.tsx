import styles from "./circle.module.scss";
import { ParallaxLayer } from "@react-spring/parallax";
import { useSpring, animated, config } from "@react-spring/web";

const Circle = () => {
  const float = useSpring({
    from: { x: -60, y: -35, backgroundColor: "#fa2fb5" },
    to: { x: -20, y: -10, backgroundColor: "#00faff" },
    config: config.molasses,
    loop: { reverse: true },
  });
  return (
    <ParallaxLayer
      offset={0}
      speed={-0.1}
      factor={1}
      className={styles.circleContainer}
    >
      <animated.div className={styles.circle} style={float}></animated.div>
    </ParallaxLayer>
  );
};

export default Circle;
