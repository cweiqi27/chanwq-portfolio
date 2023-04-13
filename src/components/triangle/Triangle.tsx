import { ParallaxLayer } from "@react-spring/parallax";
import { animated, config, useSpring } from "@react-spring/web";
import styles from "./triangle.module.scss";

const Triangle = () => {
    const float = useSpring({
        from: { y: 0, x: 0 },
        to: [
            { y: 40, x: 20 },
            { y: 20, x: 30 },
            { x: 0, y: 0 },
        ],
        config: config.wobbly,
        loop: true,
    });

    return (
        <ParallaxLayer className={styles.container}>
            <animated.div className={styles.triangle} style={float} />
        </ParallaxLayer>
    );
};

export default Triangle;
