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
import { useState } from "react";
import LoaderExample from "@/ui/LoaderExample";

const StyledImageContainer = styled(ImageContainer)`
  height: 300px;
`;

export default function Loaders() {
  const [quantityLoaders, setQuantityLoaders] = useState(5);
  const tech = ["React", "Gatsby", "Framer Motion"];

  return (
    <Main>
      <PageLayout>
        <Link href="/">
          <StyledArrowLeft />
        </Link>
        <StyledImageContainer>
          <LoaderExample
            quantityLoaders={quantityLoaders}
            setQuantityLoaders={setQuantityLoaders}
          />
        </StyledImageContainer>
        <Description>
          <StyledH1>Loaders</StyledH1>
          <StyledText>
            Loaders.io is a GUI to generate production code for a React loader
            component and allowing users to easily customize the style and
            animation properties.
          </StyledText>
          <StyledText>
            Shipped in 2020, it was the first real project I ever shipped after
            learning React for less than a year.
          </StyledText>
          <Tags>
            {tech.map((el) => {
              return (
                <Tag
                  key={el}
                  color={
                    "linear-gradient(137deg, #c81c60c2 0%, #b95f82ba 100%)"
                  }
                >
                  {el} <Noise />
                </Tag>
              );
            })}
          </Tags>
          <a
            href="https://www.producthunt.com/posts/loader-generator?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-loader-generator"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=270365&theme=light"
              alt="Loader generator - Create animated loaders and generate production React code | Product Hunt"
              style={{ width: "175px", height: "37.8px" }}
            />
          </a>
          <Button href="https://reactloaders.vercel.app/">Visit Loaders</Button>
        </Description>
      </PageLayout>
    </Main>
  );
}
