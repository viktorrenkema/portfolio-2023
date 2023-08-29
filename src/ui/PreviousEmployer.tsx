"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { device, radius } from "@/lib/theme";
import { Framer } from "../../public/logos/Framer";
import { BoldText, Text } from "./Texts";
import { Ticketswap } from "../../public/logos/Ticketswap";
import Link from "next/link";

const StyledLink = styled(Link)`
  width: 100%;
  height: 184px;
`;

export const Noise = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-size: 128px;
  background-repeat: repeat;
  background-image: url(https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png);
  left: calc(50.00000000000002% - 100% / 2);
  opacity: 0.2;
  position: absolute;
  top: calc(49.95648389904267% - 100% / 2);
  width: 100%;
  mix-blend-mode: overlay;
`;

interface OuterProps {
  colors: string[];
}

const Outer = styled(motion.div)<OuterProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center;
  cursor: pointer;
  gap: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: ${radius.md};
  height: 184px;
  background: ${({ colors }) =>
    `linear-gradient(137deg, ${colors[0]} 0%,${colors[1]} 100%)`};

  @media ${device.tablet} {
    height: 100%;
  }
`;

const Details = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 270px;
  gap: 0.5rem;

  @media ${device.tablet} {
    max-width: 300px;
  }
`;

const StyledText = styled(Text)`
  text-align: center;
  font-size: 0.75rem;
`;

const variants = {
  show: {
    opacity: 1,
    y: 0,
  },
  default: { opacity: 0, y: 20 },
};

const logoVariants = {
  hide: { transform: "scale(0.7) translateY(0px)" },
  default: { transform: "scale(1) translateY(30px) " },
};

interface Props {
  framer?: Boolean;
  ticketswap?: Boolean;
  title: string;
  subtitle: string;
  href: string;
  colors: string[];
  isMobileDevice: boolean;
}

export default function PreviousEmployer({
  framer,
  ticketswap,
  title,
  subtitle,
  href,
  colors,
  isMobileDevice,
}: Props) {
  const [hover, setHover] = useState(false);

  return (
    <StyledLink href={href} target="_blank">
      <Outer
        onHoverStart={() => {
          setHover((prev) => !prev);
        }}
        onHoverEnd={() => {
          setHover((prev) => !prev);
        }}
        colors={colors}
      >
        {framer && (
          <Framer
            variants={logoVariants}
            initial={isMobileDevice ? "hide" : "default"}
            animate={isMobileDevice ? "hide" : hover ? "hide" : "default"}
            transition={{ duration: 0.2, ease: "linear" }}
          />
        )}
        {ticketswap && (
          <Ticketswap
            variants={logoVariants}
            initial={isMobileDevice ? "hide" : "default"}
            animate={isMobileDevice ? "hide" : hover ? "hide" : "default"}
            transition={{ duration: 0.2, ease: "linear" }}
          />
        )}

        <Details
          variants={variants}
          initial={isMobileDevice ? "show" : "default"}
          animate={isMobileDevice ? "show" : hover ? "show" : "default"}
          transition={{ duration: 0.2, ease: "linear" }}
        >
          <BoldText>{title}</BoldText>
          <StyledText>{subtitle}</StyledText>
        </Details>
        <Noise />
      </Outer>
    </StyledLink>
  );
}
