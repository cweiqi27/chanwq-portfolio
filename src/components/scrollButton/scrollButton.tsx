import styles from "./scrollButton.module.scss";
import { ParallaxLayer } from "@react-spring/parallax";
import { useSpring, animated, config } from "@react-spring/web";
import { useState } from "react";

type ScrollButtonProps = {
  offset: number;
  speed: number;
  factor: number;
  position: string;
  onClick: () => void;
}

const ScrollButton = ({ offset, speed, factor, onClick }: ScrollButtonProps) => {
  const [flip, set] = useState(false);
  const scroll = useSpring({
    from: { top: '0.5rem' },
    to: { top: '3.5rem' },
    config: () => flip ? config.slow : config.molasses,
    loop: { reverse: true },
    onRest: () => set(!flip)
  });
  const blip = useSpring({
    from: { opacity: 0 },
    to: { opacity: 0.4 },
    delay: 2000,
    config: config.molasses
  });
  return (
    <ParallaxLayer
      offset={offset}
      speed={speed}
      factor={factor}
      onClick={onClick}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        margin: '0 auto',
        maxWidth: '1000px'
      }}
    >
      <animated.div className={styles.ring} style={blip}>
        <animated.div className={styles.ball} style={scroll}/>
      </animated.div>
    </ParallaxLayer>
  );
}

export default ScrollButton;