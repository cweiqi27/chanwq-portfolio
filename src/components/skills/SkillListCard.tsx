import {
  IconApi,
  IconBrandCss3,
  IconBrandDocker,
  IconBrandGit,
  IconBrandHeadlessui,
  IconBrandHtml5,
  IconBrandLaravel,
  IconBrandMongodb,
  IconBrandMysql,
  IconBrandNextjs,
  IconBrandPhp,
  IconBrandPrisma,
  IconBrandReact,
  IconBrandSass,
  IconBrandTailwind,
  IconBrandTypescript,
} from "@tabler/icons-react";
import styles from "./skillListCard.module.scss";
import { useEffect, useState } from "react";
import {
  animated,
  config,
  useSpring,
  useSpringRef,
  useTransition,
} from "@react-spring/web";

type SkillListCardProps = {
  type: "FRONTEND" | "BACKEND" | "OTHERS";
  isInView: boolean;
};

const SkillListCard = ({ type, isInView }: SkillListCardProps) => {
  const [index, setIndex] = useState<number>(0);

  const springStyle = useSpring({
    opacity: isInView ? 1 : 0,
    y: isInView ? 0 : 20,
    config: config.wobbly,
    delay: type === "FRONTEND" ? 420 : type === "BACKEND" ? 500 : 580,
  });

  const transRef = useSpringRef();

  const transitions = useTransition(index, {
    ref: transRef,
    from: {
      opacity: 0,
      transform: "translateX(10px)",
      color: "#100720",
    },
    enter: { opacity: 1, transform: "translateX(0px)", color: "#dfdfdf" },
    config: config.wobbly,
    // leave: { opacity: 0 },
  });

  const title =
    type === "FRONTEND"
      ? "Frontend"
      : type === "BACKEND"
        ? "Backend"
        : "Others";

  const selectedItems: string[] =
    type === "FRONTEND"
      ? [
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "HeadlessUI",
        "Sass",
        "HTML",
        "CSS",
      ]
      : type === "BACKEND"
        ? [
          "TypeScript",
          "MySQL",
          "MongoDB",
          "Laravel",
          "PHP",
          "REST, tRPC",
          "Prisma",
        ]
        : ["Git", "Docker"];

  useEffect(() => {
    transRef.start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <animated.div
      className={
        type === "FRONTEND"
          ? styles.frontend
          : type === "BACKEND"
            ? styles.backend
            : styles.others
      }
      style={springStyle}
    >
      {/* List */}
      <div className={styles.left}>
        <h2>{title}</h2>
        <ul className={styles.list}>
          {type === "FRONTEND" ? (
            <>
              <li>
                <button
                  onClick={() => setIndex(0)}
                  className={index === 0 ? styles.btnActive : styles.btn}
                >
                  <IconBrandNextjs stroke={2} />
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIndex(1)}
                  className={index === 1 ? styles.btnActive : styles.btn}
                >
                  <IconBrandReact stroke={2} />
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIndex(2)}
                  className={index === 2 ? styles.btnActive : styles.btn}
                >
                  <IconBrandTypescript stroke={2} />
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIndex(3)}
                  className={index === 3 ? styles.btnActive : styles.btn}
                >
                  <IconBrandTailwind stroke={2} />
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIndex(4)}
                  className={index === 4 ? styles.btnActive : styles.btn}
                >
                  <IconBrandHeadlessui stroke={2} />
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIndex(5)}
                  className={index === 5 ? styles.btnActive : styles.btn}
                >
                  <IconBrandSass stroke={2} />
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIndex(6)}
                  className={index === 6 ? styles.btnActive : styles.btn}
                >
                  <IconBrandHtml5 stroke={2} />
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIndex(7)}
                  className={index === 7 ? styles.btnActive : styles.btn}
                >
                  <IconBrandCss3 stroke={2} />
                </button>
              </li>
            </>
          ) : type === "BACKEND" ? (
            <>
              <li>
                <button
                  onClick={() => setIndex(0)}
                  className={index === 0 ? styles.btnActive : styles.btn}
                >
                  <IconBrandTypescript stroke={2} />
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIndex(1)}
                  className={index === 1 ? styles.btnActive : styles.btn}
                >
                  <IconBrandMysql stroke={2} />
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIndex(2)}
                  className={index === 2 ? styles.btnActive : styles.btn}
                >
                  <IconBrandMongodb stroke={2} />
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIndex(3)}
                  className={index === 3 ? styles.btnActive : styles.btn}
                >
                  <IconBrandLaravel stroke={2} />
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIndex(4)}
                  className={index === 4 ? styles.btnActive : styles.btn}
                >
                  <IconBrandPhp stroke={2} />
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIndex(5)}
                  className={index === 5 ? styles.btnActive : styles.btn}
                >
                  <IconApi stroke={2} />
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIndex(6)}
                  className={index === 6 ? styles.btnActive : styles.btn}
                >
                  <IconBrandPrisma stroke={2} />
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <button
                  onClick={() => setIndex(0)}
                  className={index === 0 ? styles.btnActive : styles.btn}
                >
                  <IconBrandGit stroke={2} />
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIndex(1)}
                  className={index === 1 ? styles.btnActive : styles.btn}
                >
                  <IconBrandDocker stroke={2} />
                </button>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Selected */}
      {transitions((style, i) => {
        return (
          <animated.div style={style} className={styles.selectedLabel}>
            <span>{selectedItems[i]}</span>
          </animated.div>
        );
      })}
    </animated.div>
  );
};

export default SkillListCard;
