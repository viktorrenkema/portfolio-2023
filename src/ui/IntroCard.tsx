import React from "react";
import styled from "styled-components";
import { device, fontSize, radius, space } from "@/lib/theme";
import { H1, Text } from "./Texts";
import { Avatar } from "./Avatar";

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${space[24]} 0;
  /* background: linear-gradient(
    137deg,
    rgba(97, 167, 224, 0.05) 0%,
    #00b6f012 100%
  ); */
  overflow: hidden;
  position: relative;
  align-content: center;
  flex-wrap: nowrap;
  gap: 1rem;
  border-radius: ${radius.xl};
  margin-block-end: ${space[16]};
`;

const Texts = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  align-items: center;
`;

const StyledH1 = styled(H1)`
  font-size: ${fontSize[20]};

  @media ${device.mobileL} {
    font-size: ${fontSize[24]};
  }
  @media ${device.tablet} {
    font-size: ${fontSize[32]};
  }
`;

const StyledText = styled(Text)`
  font-weight: 300;
  font-size: ${fontSize[14]};
  text-align: center;
  max-width: 85%;

  @media ${device.tablet} {
    font-size: ${fontSize[16]};
    max-width: unset;
  }
`;

export default function IntroCard() {
  return (
    <Row>
      <Avatar />
      <Texts>
        <StyledH1>I&apos;m Viktor, front-end developer</StyledH1>
        <StyledText>
          I worked at some pretty great companies, and looking for the next one.
        </StyledText>
      </Texts>
    </Row>
  );
}
