import styles from './hero.module.scss';
import { ParallaxLayer } from "@react-spring/parallax";
import { useSpring, animated, config } from "@react-spring/web";

const Hero = () => {
  const float = useSpring({
    from: { scaleX: 0 },
    scaleX: 1,
    skewX: 4,
    translateY: 20,
    config: config.molasses,
  });
  return (
    <ParallaxLayer
      offset={0}
      speed={-0.5}
      className={styles.heroContainer}
    >
      <section className={styles.hero}>
        <div className={styles.glass}></div>
        <h1>
          Hello world, I&apos;m <span className={styles.name}>Wei Qi</span>.
        <br/>
          I develop&nbsp;
        <span className={styles.keyword}>Web Apps</span>
        </h1>
      </section>
    </ParallaxLayer>
  );
}

export default Hero;