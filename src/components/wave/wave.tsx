import { SVGProps } from "react";
import {ParallaxLayer} from "@react-spring/parallax";

const Wave = (props: SVGProps<SVGSVGElement>) => (
  <ParallaxLayer
    offset={0.97}
    speed={0.5}
    factor={1.7}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 32 900 600"
      preserveAspectRatio="none"
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
      {...props}
    >
      <path fill="#a61f57" d="M0 0h900v600H0z" />
      <path
        d="m0 181 30-7.3c30-7.4 90-22 150-25.5s120 4.1 180 6.5c60 2.3 120-.7 180-4 60-3.4 120-7 180-2.4 60 4.7 120 17.7 150 24.2l30 6.5V0H0Z"
        fill="#c62368"
      />
      <path
        d="m0 117 30 .5c30 .5 90 1.5 150 5.8 60 4.4 120 12 180 14.2 60 2.2 120-1.2 180-4.2s120-5.6 180-5.5c60 .2 120 3.2 150 4.7l30 1.5V0H0Z"
        fill="#e54659"
      />
      <path
        d="m0 85 30 4.5c30 4.5 90 13.5 150 18.2 60 4.6 120 5 180 4.1 60-.8 120-2.8 180-4.5 60-1.6 120-3 180-4s120-1.6 150-2l30-.3V0H0Z"
        fill="#f96e4a"
      />
      <path
        d="m0 62 30-.2c30-.1 90-.5 150 1.4 60 1.8 120 5.8 180 9.1 60 3.4 120 6 180 4.5s120-7.1 180-7.6 120 4.1 150 6.5l30 2.3V0H0Z"
        fill="#ff983d"
      />
      <path
        d="m0 29 30 2c30 2 90 6 150 5.7 60-.4 120-5 180-5.4 60-.3 120 3.7 180 6.5 60 2.9 120 4.5 180 5.4 60 .8 120 .8 150 .8h30V0H0Z"
        fill="#ffc23c"
      />
    </svg>
  </ParallaxLayer>
)

export default Wave;