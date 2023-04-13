import {
  IconBrandGit,
  IconBrandMongodb,
  IconBrandMysql,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandSass,
  IconBrandTailwind,
  IconBrandTypescript,
} from "@tabler/icons-react";
import styles from "./.skillListCard.module.scss";

const Frontend = () => {
  return (
    <div className={styles.frontend}>
      <h2>Frontend</h2>
      <ul className={styles.skillList}>
        <li>
          <IconBrandNextjs stroke={2} />
        </li>
        <li>
          <IconBrandReact stroke={2} />
        </li>
        <li>
          <IconBrandTypescript stroke={2} />
        </li>
        <li>
          <IconBrandTailwind stroke={2} />
        </li>
        <li>
          <IconBrandSass stroke={2} />
        </li>
      </ul>
    </div>
  );
};

export default Frontend;
