import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { backgroundAnimation, colors, device, radius } from "@/lib/theme";
import { BoldText, CapitalizedText, SmallerText, Text } from "./Texts";
import useIsInViewport from "use-is-in-viewport";
import { ArrowRight } from "../../public/icons/arrows";

const Outer = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  backdrop-filter: blur(2px);
  padding: 1px;
  border-radius: ${radius.xl};
  z-index: 2;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  cursor: pointer;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  background: ${colors.darkest};
  backdrop-filter: blur(2px);
  border-radius: ${radius.md};
  z-index: 2;
  position: relative;
`;

interface BottomProps {
  color: string;
  hovered: string;
  animateAutomatically: boolean;
}

const Bottom = styled(motion.div)<BottomProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.25rem;
  border-top: 1px solid #1d1f2a;
  background: ${({ color }) => `linear-gradient(-45deg, ${color})`};
  background-size: 400% 400%;
  animation-name: ${backgroundAnimation};
  animation-duration: 5s;
  animation-iteration-count: infinite;
  cursor: pointer;
  position: relative;
`;

const GradientBlocker = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #11131f;
`;

const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  z-index: 1;
`;
interface Props {
  children?: React.ReactNode;
  title: string;
  subtitle: string;
  color: string;
  isMobileDevice: boolean;
}

export default function ProjectCard({
  children,
  title,
  subtitle,
  color,
  isMobileDevice,
}: Props) {
  const [hovered, setHovered] = useState(false);
  const [isInViewport, targetRef] = useIsInViewport({ threshold: 100 });

  const variants = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 0,
    },
  };

  //   React.useEffect(() => {
  //     const form = document.querySelector("#cardWrapper");

  //     if (!form && !form.style) return;

  //     const handleMouseMove = (event) => {
  //       const { layerX, layerY } = event;
  //       const { width, height } = form.getBoundingClientRect();

  //       let proportionX = layerX / width;
  //       let proportionY = layerY / height;

  //       // Change the position of the masking gradient to give the mask effect.
  //       form.style.setProperty("--x", `${proportionX * 100}%`);
  //       form.style.setProperty("--y", `${proportionY * 100}%`);
  //     };

  //     form.addEventListener("pointermove", handleMouseMove);

  //     return () => form.removeEventListener("pointermove", handleMouseMove);
  //   }, []);

  const animateAutomatically = Boolean(isInViewport && isMobileDevice);

  return (
    <Outer
      id={"cardWrapper"}
      onHoverStart={() => {
        setHovered((prev) => !prev);
      }}
      onHoverEnd={() => {
        setHovered((prev) => !prev);
      }}
      ref={targetRef}
    >
      <Wrapper>{children}</Wrapper>
      <Bottom
        color={color}
        hovered={hovered ? "1" : "0"}
        animateAutomatically={animateAutomatically}
      >
        <GradientBlocker
          variants={variants}
          animate={hovered || animateAutomatically ? "animate" : "initial"}
          initial="initial"
        />
        <Description>
          <BoldText>{title}</BoldText>
          <SmallerText>{subtitle}</SmallerText>
        </Description>
        <ArrowRight hovered={hovered} />
      </Bottom>
    </Outer>
  );
}
