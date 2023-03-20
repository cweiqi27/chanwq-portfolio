import styles from "./skillList.module.scss";
import React from "react";
import {
  IconBrandGit,
  IconBrandMongodb,
  IconBrandMysql,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
} from "@tabler/icons-react";
import { animated } from "@react-spring/web";

type Props = {};

const SkillList = (props: Props) => {
  return (
    <animated.div className={styles.skillsContainer}>
      <ul className={styles.skillList}>
        <li>
          <IconBrandNextjs />
        </li>
        <li>
          <IconBrandReact />
        </li>
        <li>
          <IconBrandTypescript />
        </li>
        <li>
          <IconBrandMysql />
        </li>
        <li>
          <IconBrandMongodb />
        </li>
        <li>
          <IconBrandGit />
        </li>
        <li>
          <IconBrandTailwind />
        </li>
      </ul>
    </animated.div>
  );
};

export default SkillList;
