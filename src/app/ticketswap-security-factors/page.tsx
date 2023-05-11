"use client";
import styled from "styled-components";
import { CapitalizedText, H1, Text } from "@/ui/Texts";
import Image from "next/image";
import { motion } from "framer-motion";
import { colors, device, fontSize, radius } from "@/lib/theme";
import Button from "@/ui/Button";
import { ArrowLeft } from "../../../public/icons/arrows";
import Link from "next/link";
import { Noise } from "@/ui/PreviousEmployer";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;

  @media ${device.laptop} {
    min-height: 100vh;
  }
`;

export const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  gap: 2rem;
  align-items: center;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

export const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: 50% 50%;
`;

export const ImageContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  backdrop-filter: blur(2px);
  border-radius: ${radius.xl};
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  height: 325px;
  position: relative;

  @media ${device.laptop} {
    height: 50vh;
    min-width: 740px;
  }

  @media ${device.desktop} {
    width: 50%;
  }
`;

export const StyledText = styled(Text)`
  width: 100%;
  color: #b4b4b4;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  @media ${device.desktop} {
    width: 30%;
  }
`;

export const Tags = styled.div`
  margin-block-start: 1rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media ${device.tablet} {
    width: 80%;
  }
`;

export const Tag = styled(CapitalizedText)<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${fontSize[12]};
  color: ${colors.lightest};
  white-space: nowrap;
  padding: 0.25rem 0.5rem;
  background: ${({ color }) => color};
  border-radius: ${radius.md};
  border: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
`;

export const StyledArrowLeft = styled(ArrowLeft)`
  flex-shrink: 0;
`;

export const StyledH1 = styled(H1)`
  text-align: start;
`;

export default function TicketswapSecurityFactors() {
  const tech = [
    "React",
    "Next.js",
    "GraphQL",
    "TypeScript",
    "Styled Components",
    "Framer Motion",
  ];

  return (
    <Main>
      <PageLayout>
        <Link href="/">
          <StyledArrowLeft />
        </Link>
        <ImageContainer>
          <StyledImage
            alt="Ticketswap Security Factors"
            src="/images/ticketswap.gif"
            fill
          />
        </ImageContainer>
        <Description>
          <StyledH1>Ticketswap Security Factors</StyledH1>
          <StyledText>
            Within the Product team, we&apos;d get regular time to discover new
            tools or explore things outside of regular scheduled work.
          </StyledText>
          <StyledText>
            My team was reponsible of the buy-flow, that we were also aiming to
            shorten. Currently, the platform would display details about a
            seller that conveyed trust relatively late in the buy-flow.
          </StyledText>
          <StyledText>
            I wanted to explore if we could move this information earlier in the
            flow, so that we could shorten the flow. At the same time, it was my
            goal to make the platform more fun and interactive.
          </StyledText>
          <StyledText>
            The interaction is what I came up with in half a day. The PR did not
            merge before I left, but it was well received and cleared to go
            live.
          </StyledText>
          <Tags>
            {tech.map((el) => {
              return (
                <Tag
                  key={el}
                  color={
                    "linear-gradient(137deg, #00b5f1ab 0%, #b4e6fbb3 100%)"
                  }
                >
                  {el} <Noise />
                </Tag>
              );
            })}
          </Tags>
          <Button href="https://www.ticketswap.com">
            Visit ticketswap.com
          </Button>
        </Description>
      </PageLayout>
    </Main>
  );
}
