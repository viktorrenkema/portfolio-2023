"use client";
import Button from "@/ui/Button";
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
  object-position: left 0%;
`;

export default function Invoicer() {
  const tech = [
    "React",
    "Next.js",
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
            alt="A screenshot of an invoice maker app"
            src="/images/invoicer.png"
            fill
          />
        </ImageContainer>
        <Description>
          <StyledH1>Invoicer.studio</StyledH1>
          <StyledText>
            In Q1 of this year, I set out to build a product with the aim of
            giving at least a single person some kind of value.
          </StyledText>
          <StyledText>
            Invoicer is a tool that allows you to create invoices and send them
            to your clients. It is fully client-side with zero back-end, and
            leverages browser functionality to print invoices as PDF.
          </StyledText>
          <StyledText>
            A big part of the time spent on Invoicer was on researching the best
            ways to use web technology to generate the DOM to PDF. I learned a
            lot about this, and ended up deciding it was most logical to rely on
            the browser&apos;s built-in print functionality.
          </StyledText>
          <Tags>
            {tech.map((el) => {
              return (
                <Tag
                  key={el}
                  color={
                    "linear-gradient(137deg, #7cffb4c4 0%, #7ff000ab 100%)"
                  }
                >
                  {el} <Noise />
                </Tag>
              );
            })}
          </Tags>
          <Button href="https://www.invoicer.studio">
            Visit invoicer.studio
          </Button>
        </Description>
      </PageLayout>
    </Main>
  );
}
