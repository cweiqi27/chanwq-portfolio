import styles from './hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1>
        Hello world, I&apos;m <span className={styles.keyword}>Wei Qi</span>.
      </h1>
      <h1>
        I develop&nbsp;
        <span className={styles.block}>
          <span className={styles.highlight}></span>
          <span className={styles.keyword}>Web Apps</span>
        </span>
      </h1>
    </section>
  );
}

export default Hero;