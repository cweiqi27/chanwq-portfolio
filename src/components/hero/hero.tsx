import styles from './hero.module.scss';
import { ParallaxLayer } from "@react-spring/parallax";

const Hero = () => {
  return (
    <ParallaxLayer
      offset={0}
      speed={-0.5}
      className={styles.hero}
    >
        <h1>
          Hello world, I&apos;m <span className={styles.name}>Wei Qi</span>.
        <br/>
          I develop&nbsp;
          <span className={styles.block}>
            <span className={styles.highlight}></span>
            <span className={styles.keyword}>Web Apps</span>
          </span>
        </h1>
    </ParallaxLayer>
  );
}

export default Hero;