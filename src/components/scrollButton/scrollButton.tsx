import styles from "./scrollButton.module.scss";
import { ParallaxLayer } from "@react-spring/parallax";
import { useSpring, animated, config } from "@react-spring/web";
import { useState } from "react";

type ScrollButtonProps = {
    offset: number;
    speed: number;
    factor: number;
    position: string;
    onClick: () => void;
};

const ScrollButton = ({
    offset,
    speed,
    factor,
    onClick,
}: ScrollButtonProps) => {
    const [flip, set] = useState(false);
    const scroll = useSpring({
        from: { top: "0.5rem" },
        to: { top: "2.75rem" },
        config: () => (flip ? config.slow : config.molasses),
        loop: { reverse: true },
        onRest: () => set(!flip),
    });
    const blip = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 700,
        config: config.molasses,
    });
    const textAppear = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 1600,
        config: config.molasses,
    });
    return (
        <ParallaxLayer
            offset={offset}
            speed={speed}
            factor={factor}
            onClick={onClick}
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
                margin: "0 auto",
                maxWidth: "1000px",
            }}
        >
            <animated.div className={styles.ring} style={blip}>
                <animated.div className={styles.ball} style={scroll} />
            </animated.div>
            <animated.h3 className={styles.label} style={textAppear}>
                scroll
            </animated.h3>
        </ParallaxLayer>
    );
};

export default ScrollButton;
