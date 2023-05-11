"use client";
import React, { MouseEvent, useRef } from "react";
import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { colors, device, fontSize, radius, space } from "@/lib/theme";
import { BoldText, Text } from "./Texts";

const Outer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  cursor: pointer;
  gap: 1rem;
  height: 180px;
  width: 100%;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 0rem 1rem 0rem 0rem;
  border-radius: ${radius.md};
  margin-block: 1rem;
`;

const Brains = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  transform: rotate(-15deg);
  position: absolute;
  left: -45px;
  top: -120px;

  @media ${device.tablet} {
    left: -45px;
    top: -125px;
  }
`;

const BrainGroup = styled(motion.div)`
  display: flex;
`;

const Details = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: ${space[4]};
  z-index: 2;
`;

const StyledText = styled(Text)`
  text-align: end;
  font-size: ${fontSize[12]};
  text-shadow: 1px 1px 2px rgb(0 0 0);
  color: ${colors.lightest};
  max-width: 270px;

  @media ${device.tablet} {
    max-width: unset;
  }
`;

const StyledBoldText = styled(BoldText)`
  font-size: ${fontSize[16]};
  text-align: end;
  text-shadow: 1px 1px 2px rgb(0 0 0);
  color: ${colors.lightest};
`;

interface EmojiProps {
  size: BrainSizes;
}

const EmojiWrapper = styled(motion.div)`
  padding: 0.2rem;

  @media ${device.tablet} {
    padding: 0.5rem;
  }

  @media ${device.laptopM} {
    padding: 0.5rem;
  }
`;

const EmojiEl = styled(Text)<EmojiProps>`
  white-space: nowrap;
  font-size: ${({ size }) =>
    size === "s"
      ? "1rem"
      : size === "m"
      ? "2rem"
      : size === "l"
      ? "3rem"
      : "4rem"};
  display: ${({ size }) => (size === "xl" ? "none" : "block")};

  @media ${device.tablet} {
    display: block;
  }
`;

type BrainSizes = "s" | "m" | "l" | "xl";

export default function PsychologyCard() {
  const renderBrains = (length: number, size: BrainSizes) => {
    const components = [];

    for (let i = 0; i < length; i++) {
      components.push(<Emoji key={i} size={size} index={i} />);
    }

    return components;
  };

  return (
    <Outer id={"outer"}>
      <Brains>
        <BrainGroup>{renderBrains(8, "xl")}</BrainGroup>
        <BrainGroup>{renderBrains(12, "l")}</BrainGroup>
        <BrainGroup>{renderBrains(20, "m")}</BrainGroup>
        <BrainGroup>{renderBrains(40, "s")}</BrainGroup>
      </Brains>
      <Details>
        <StyledBoldText>Formal education</StyledBoldText>
        <StyledText>
          Graduated with a Bsc. and Msc. in Psychology. Code came afterwards.
        </StyledText>
      </Details>
    </Outer>
  );
}

interface Props {
  size: BrainSizes;
  index: number;
}

const Emoji = ({ size, index }: Props) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x);

  const getRandomRange = (min: number, max: number) => {
    const randomMin = Math.min(min, max);
    const randomMax = Math.max(min, max);
    const randomRange = randomMax - randomMin;

    const offset1 = Math.random() * randomRange;
    const offset2 = Math.random() * randomRange;

    const value1 = randomMin + offset1;
    const value2 = randomMin + offset2;

    return [Math.min(value1, value2), Math.max(value1, value2)];
  };

  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    getRandomRange(-100, 100)
  );

  function handleMouse(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  return (
    <EmojiWrapper
      ref={ref}
      style={{ x: springX, y: parallaxY }}
      onMouseMove={handleMouse}
    >
      <EmojiEl size={size}>{index % 2 === 0 ? "🧠" : "🎓"}</EmojiEl>
    </EmojiWrapper>
  );
};
