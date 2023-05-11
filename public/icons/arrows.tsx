import { motion } from "framer-motion";

interface Props {
  className?: string;
}

export const ArrowLeft = ({ className }: Props) => {
  return (
    <motion.svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      className={className}
      whileHover={{ x: -5 }}
    >
      <path
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10.25 6.75L4.75 12L10.25 17.25"
      ></path>
      <path
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M19.25 12H5"
      ></path>
    </motion.svg>
  );
};

interface PropsArrowRight {
  className?: string;
  hovered: boolean;
}

export const ArrowRight = ({ className, hovered }: PropsArrowRight) => {
  const variants = {
    default: {
      transform: "rotate(180deg)",
    },
    hovered: {
      transform: "rotate(135deg)",
    },
  };

  return (
    <motion.svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      variants={variants}
      initial="default"
      animate={hovered ? "hovered" : "default"}
      className={className}
    >
      <path
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10.25 6.75L4.75 12L10.25 17.25"
      ></path>
      <path
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M19.25 12H5"
      ></path>
    </motion.svg>
  );
};
