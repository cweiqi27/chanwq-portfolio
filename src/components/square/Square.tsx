import styles from "./square.module.scss";
import { ParallaxLayer } from "@react-spring/parallax";
import { useSpring, animated, config } from "@react-spring/web";
import { useState } from "react";

const Square = () => {
  const float = useSpring({
    from: { background: "#ff6d6d", y: -40, x: 0 },
    to: [
      { x: 80, background: "#fff59a" },
      { y: 40, background: "#88DFAB" },
      { x: 0, background: "#569AFF" },
      { y: -40, background: "#ff6d6d" },
    ],
    config: config.slow,
    loop: true,
  });

  return (
    <ParallaxLayer
      offset={0}
      speed={0.4}
      horizontal
      factor={1}
      className={styles.container}
    >
      <animated.div className={styles.square} style={float}></animated.div>
    </ParallaxLayer>
  );
};

export default Square;
