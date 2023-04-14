import { SVGProps } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import styles from "./wave.module.scss";

const Wave = (props: SVGProps<SVGSVGElement>) => (
    <ParallaxLayer offset={0} speed={0.3} className={styles.waveContainer}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            {...props}
            viewBox="0 350 900 600"
            preserveAspectRatio="none"
            style={{
                position: "absolute",
                top: "-10%",
                left: 0,
                width: "100%",
                height: "100%",
            }}
        >
            <path
                d="m0 393 21.5 5.3c21.5 5.4 64.5 16 107.3 9.5 42.9-6.5 85.5-30.1 128.4-38 42.8-7.8 85.8.2 128.6 11 42.9 10.9 85.5 24.5 128.4 21.7 42.8-2.8 85.8-22.2 128.6-20.3 42.9 1.8 85.5 24.8 128.4 32 42.8 7.1 85.8-1.5 107.3-5.9L900 404v197H0Z"
                fill="#fa7268"
            />
            <path
                d="m0 453 21.5-7.7c21.5-7.6 64.5-23 107.3-23.5 42.9-.5 85.5 13.9 128.4 24.9 42.8 11 85.8 18.6 128.6 21.8 42.9 3.2 85.5 1.8 128.4-10.2 42.8-12 85.8-34.6 128.6-35.1 42.9-.5 85.5 21.1 128.4 25.6 42.8 4.5 85.8-8.1 107.3-14.5L900 428v173H0Z"
                fill="#ef5f67"
            />
            <path
                d="m0 500 21.5-10.5C43 479 86 458 128.8 451.7c42.9-6.4 85.5 2 128.4 4.6 42.8 2.7 85.8-.3 128.6-4.1 42.9-3.9 85.5-8.5 128.4-1.5 42.8 7 85.8 25.6 128.6 34 42.9 8.3 85.5 6.3 128.4 8.1 42.8 1.9 85.8 7.5 107.3 10.4L900 506v95H0Z"
                fill="#e34c67"
            />
            <path
                d="m0 525 21.5-3.7c21.5-3.6 64.5-11 107.3-18 42.9-7 85.5-13.6 128.4-13 42.8.7 85.8 8.7 128.6 11 42.9 2.4 85.5-1 128.4-3.5 42.8-2.5 85.8-4.1 128.6-6.3 42.9-2.2 85.5-4.8 128.4-.7C814 495 857 506 878.5 511.5L900 517v84H0Z"
                fill="#d53867"
            />
            <path
                d="m0 529 21.5 7.2c21.5 7.1 64.5 21.5 107.3 22.3 42.9.8 85.5-11.8 128.4-19.2C300 532 343 530 385.8 530c42.9 0 85.5 2 128.4 1.5 42.8-.5 85.8-3.5 128.6-1.2 42.9 2.4 85.5 10 128.4 14.2 42.8 4.2 85.8 4.8 107.3 5.2l21.5.3v51H0Z"
                fill="#c62368"
                stroke="#c62368"
            />
        </svg>
    </ParallaxLayer>
);

export default Wave;