import styles from './watermark.module.scss';

type WatermarkProps = {
  name: string,
  isLarge?: boolean,
  isMedium?: boolean,
  isSmall?: boolean
};

const Watermark = ({
  name,
  isLarge,
  isMedium,
  isSmall
}: WatermarkProps) => {
  if(isLarge)
    return <h1 className={styles.watermarkLg}>{ name }</h1>;
  else if(isMedium)
    return <h1 className={styles.watermarkMd}>{ name }</h1>;
  else
    return <h1 className={styles.watermarkSm}>{ name }</h1>;
}

export default Watermark;