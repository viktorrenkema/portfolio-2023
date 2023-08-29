import { radius, space } from "@/lib/theme";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { styled } from "styled-components";
import Socials from "./Social";

const Wrapper = styled(motion.div)`
  position: relative;
  width: min-content;
  height: min-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${space[16]};
  background: linear-gradient(
    137deg,
    rgba(35, 107, 169, 0.3) 0%,
    rgba(110, 145, 179, 0.3) 100%
  );
  overflow: hidden;
  position: relative;
  align-content: center;
  flex-wrap: nowrap;
  gap: ${space[16]};
  border-radius: ${radius.xl};
  border: 1px solid rgba(255, 255, 255, 0.15);
`;

const StyledImage = styled(Image)`
  border: 2px solid #11131f;
  border-radius: ${radius.xl};
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

export const Avatar = () => {
  return (
    <Wrapper>
      <StyledImage
        alt="A profile picture of me, Viktor."
        src="/images/me.jpeg"
        width="141"
        height="141"
      />
      <Socials />
    </Wrapper>
  );
};
