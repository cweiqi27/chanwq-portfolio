import styles from './watermark.module.scss';
import {ParallaxLayer} from "@react-spring/parallax";

type WatermarkProps = {
  name: string;
  offset: number;
  speed?: number;
  factor?: number;
  position: string;
  size: string;
};

const Watermark = ({
  name,
  offset,
  speed,
  factor,
  position,
  size
}: WatermarkProps) => {
  return (
    <ParallaxLayer
      offset={offset}
      speed={speed}
      factor={factor}
      className={`${styles.watermarkContainer} ${styles[position]}`}
    >
      <h1 className={`${styles.watermark} ${styles[size]}`}>{ name }</h1>
    </ParallaxLayer>
  );
}

export default Watermark;
