import { Transition, motion } from "framer-motion";
import { styled } from "styled-components";

interface Props {
  variants?: any;
  initial?: string;
  animate?: string;
  transition?: Transition;
}

const SVG = styled(motion.svg)`
  flex-shrink: 0;
`;

export function Framer({ variants, initial, animate, transition }: Props) {
  return (
    <SVG
      variants={variants}
      initial={initial}
      animate={animate}
      transition={transition}
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="50"
    >
      <path
        d="M 32.549 31.911 C 32.792 32.149 32.865 32.508 32.733 32.819 C 32.602 33.13 32.292 33.333 31.949 33.333 L 17.85 33.333 C 17.381 33.333 17 33.706 17 34.167 L 17 47.989 C 17 48.326 16.793 48.629 16.475 48.758 C 16.158 48.887 15.792 48.816 15.549 48.578 L 0.331 33.658 C 0.119 33.45 -0 33.167 -0 32.872 L -0 17.5 C -0 17.04 0.381 16.667 0.85 16.667 L 17 16.667 Z M 17 16.667 L 1.451 1.422 C 1.208 1.184 1.135 0.826 1.267 0.515 C 1.398 0.203 1.708 0 2.051 0 L 33.15 0 C 33.619 0 34 0.373 34 0.833 L 34 15.833 C 34 16.294 33.619 16.667 33.15 16.667 Z"
        fill="hsl(0, 0%, 100%)"
      ></path>
    </SVG>
  );
}
