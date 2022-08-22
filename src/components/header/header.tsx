import styles from './header.module.scss';
import {ParallaxLayer} from "@react-spring/parallax";

const Header = () => {
  return (
    <ParallaxLayer factor={0.1} offset={0} speed={2} className={styles.header}>
          <div>
            <h1>chanwq</h1>
          </div>
          <h2>something</h2>
          <h2>something</h2>
    </ParallaxLayer>
  );
}

export default Header;