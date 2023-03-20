import styles from "./header.module.scss";
import { ParallaxLayer } from "@react-spring/parallax";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

const Header = () => {
  return (
    <ParallaxLayer factor={0.1} offset={0} speed={2} className={styles.header}>
      <h1>chanwq</h1>
      <nav className={styles.icons}>
        <IconBrandGithub />
        <IconBrandLinkedin />
      </nav>
    </ParallaxLayer>
  );
};

export default Header;
