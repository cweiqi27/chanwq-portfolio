import {
  IconBrandGit,
  IconBrandLaravel,
  IconBrandMongodb,
  IconBrandMysql,
  IconBrandNextjs,
  IconBrandPhp,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
} from "@tabler/icons-react";
import styles from "./.skillListCard.module.scss";

type Props = {};

const Backend = (props: Props) => {
  return (
    <div className={styles.backend}>
      <h2>Backend</h2>
      <ul className={styles.skillList}>
        <li>
          <IconBrandTypescript stroke={2.5} />
        </li>
        <li>
          <IconBrandMysql stroke={2.5} />
        </li>
        <li>
          <IconBrandMongodb stroke={2.5} />
        </li>
        <li>
          <IconBrandLaravel stroke={2.5} />
        </li>
        <li>
          <IconBrandPhp stroke={2.5} />
        </li>
      </ul>
    </div>
  );
};

export default Backend;
