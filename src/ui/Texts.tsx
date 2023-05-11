import { colors, device, fontSize } from "@/lib/theme";
import { motion } from "framer-motion";
import { styled } from "styled-components";

export const H1 = styled.h1`
  font-weight: 400;
  font-family: "PPObjectSans Regular", sans-serif;
  color: ${colors.lightest};
  text-align: center;
  font-size: ${fontSize[32]};
`;

export const H2 = styled.h2`
  font-size: ${fontSize[20]};
  font-weight: 400;
  font-family: "Fontje", sans-serif;
  color: ${colors.darkest};
`;

export const Text = styled(motion.span)`
  font-size: ${fontSize[16]};
  font-weight: 400;
  font-family: "Inter", sans-serif;
  color: ${colors.light};
`;

export const SmallerText = styled(Text)`
  font-size: ${fontSize[12]};
  color: ${colors.lightest};
`;

export const BoldText = styled(Text)`
  font-size: ${fontSize[14]};
  font-weight: 700;
  color: ${colors.lightest};
`;

export const CapitalizedText = styled(Text)`
  font-size: ${fontSize[12]};
  font-weight: 400;
  text-transform: uppercase;
  color: #868aaa;
  letter-spacing: 0.5px;
`;

export const Inter = styled.div`
  font-weight: 700;
  font-family: "Inter", "Inter", "Inter Placeholder", sans-serif;
  color: #ffffff;
  font-size: ${fontSize[22]};
  letter-spacing: 0px;
  line-height: 1.2;
  white-space: nowrap;
`;
