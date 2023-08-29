import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { colors, fontSize, space } from "@/lib/theme";
import { ArrowRight } from "../../public/icons/arrows";

interface BtnProps {
  disabled?: boolean;
}

const Btn = styled(motion.a)<BtnProps>`
  display: flex;
  font-family: "Inter", sans-serif;
  justify-content: center;
  align-items: center;
  padding: ${space[12]} 0px;
  color: ${colors.lightest};
  font-size: ${fontSize[14]};
  max-width: fit-content;
  cursor: pointer;
  gap: 0.5rem;
`;

interface Props {
  href: string;
  children: React.ReactNode;
  disabled?: boolean;
}

export default function Button({ href, children, disabled }: Props) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <Btn
      href={href}
      target="_blank"
      disabled={disabled}
      onHoverStart={() => {
        setHovered(true);
      }}
      onHoverEnd={() => {
        setHovered(false);
      }}
    >
      {children}
      <ArrowRight hovered={hovered} />
    </Btn>
  );
}
