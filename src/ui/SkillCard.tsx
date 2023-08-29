import styled, { keyframes } from "styled-components";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "framer-motion";
import { backgroundAnimation, radius } from "@/lib/theme";
import { useRef } from "react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${radius.sm};
  /* background: ${({ color }) => `linear-gradient(-45deg, ${color})`}; */
  background-size: 400% 400%;
  animation-name: ${backgroundAnimation};
  animation-duration: 5s;
  animation-iteration-count: infinite;
  min-width: 100px;
`;

const Inner = styled.div`
  /* background: ${({ color }) => color || "#11131F"}; */
  display: flex;
  min-width: 150px;
  justify-content: center;
  align-items: center;
  border-radius: ${radius.sm};
`;

interface Props {
  children: React.ReactNode;
  color: string;
  baseVelocity?: number;
}

export const SkillCard = ({ children, color }: Props) => {
  return (
    <Container color={color}>
      <Inner>{children}</Inner>
    </Container>
  );
};
