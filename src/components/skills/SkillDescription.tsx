import { animated, config, useInView, useSpring } from "@react-spring/web";
import styles from "./skillDescrption.module.scss";

const SkillDescription = () => {
  const [ref, isInView] = useInView({
    rootMargin: "0px 0px -10% 0px",
  });

  const springStyle = useSpring({
    opacity: isInView ? 1 : 0,
    y: isInView ? 0 : 20,
    config: config.wobbly,
    delay: 250,
  });

  return (
    <animated.div className={styles.container} ref={ref} style={springStyle}>
      <h1 className={styles.title}>i. Repertoire</h1>
      <div className={styles.description}>
        <p>
          I am knowledgeable in different kinds of technologies and frameworks.
        </p>
        <p>
          However, React and TypeScript remain my bread and butter, with
          TailwindCSS and Sass being my favorites for styling.
        </p>
        <p>
          On the backend, I am flexible with multiple different languages and
          frameworks, including PHP Laravel, TypeScript/JavaScript
          Node.js/Express, and Next.js API routes. I am also familliar with
          various methods of handling APIs, such as REST and tRPC.
        </p>
      </div>
    </animated.div>
  );
};

export default SkillDescription;
