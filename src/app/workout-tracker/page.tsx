"use client";
import Link from "next/link";
import {
  Description,
  ImageContainer,
  Main,
  PageLayout,
  StyledArrowLeft,
  StyledH1,
  StyledText,
  Tag,
  Tags,
} from "../ticketswap-security-factors/page";
import { styled } from "styled-components";
import Image from "next/image";
import { Noise } from "@/ui/PreviousEmployer";

const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: 50% 0%;
`;

export default function WorkoutTracker() {
  const tech = [
    "React",
    "Next.js",
    "TypeScript",
    "Styled Components",
    "Framer Motion",
    "Firebase",
  ];

  return (
    <Main>
      <PageLayout>
        <Link href="/">
          <StyledArrowLeft />
        </Link>
        <ImageContainer>
          <StyledImage
            alt="A screenshot of an invoice maker app"
            src="/images/workout-tracker.png"
            fill
          />
        </ImageContainer>
        <Description>
          <StyledH1>Workout tracker</StyledH1>
          <StyledText>
            I wanted a workout tracker that offers only the features that I
            needed, and nothing else, so I figured it&apos;d be fun to see if I
            can build that myself.
          </StyledText>
          <StyledText>
            The app allows for recording workouts on a daily calendar, including
            quick links and historic info on how I performed for a given
            exercise previously.
          </StyledText>
          <StyledText>
            This project is not public, but I&apos;d gladly demo it.
          </StyledText>
          <Tags>
            {tech.map((el) => {
              return (
                <Tag
                  key={el}
                  color={
                    "linear-gradient(137deg, #dc909bc9 0%, #e18dd9ba 100%)"
                  }
                >
                  {el} <Noise />
                </Tag>
              );
            })}
          </Tags>
        </Description>
      </PageLayout>
    </Main>
  );
}
