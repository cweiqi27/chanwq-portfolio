import { useSpring, animated } from "@react-spring/web";
import styles from "./heroBackground.module.scss";

type HeroBackgroundProps = {
  children: React.ReactNode;
};

const HeroBackground = ({ children }: HeroBackgroundProps) => {
  return (
    <animated.div className={styles.heroBackground}>
      <div className={styles.container}>{children}</div>
    </animated.div>
  );
};

export default HeroBackground;
