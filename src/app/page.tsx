"use client";
import styled from "styled-components";
import { device } from "@/lib/theme";
import Image from "next/image";
import { SmallerText } from "@/ui/Texts";
import PsychologyCard from "@/ui/PsychologyCard";
import PreviousEmployer from "@/ui/PreviousEmployer";
import ProjectCard from "@/ui/ProjectCard";
import Link from "next/link";
import IntroCard from "@/ui/IntroCard";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { motion } from "framer-motion";
import { Carousel } from "@/ui/Carousel";
import LoaderExample from "@/ui/LoaderExample";

const Main = styled(motion.main)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 0rem 3rem 0rem;
`;

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 90%;
  align-items: center;

  @media ${device.tablet} {
    width: 80%;
  }
`;

const PreviousCompanies = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  height: auto;
  width: 100%;

  @media ${device.tablet} {
    flex-direction: row;
    height: 180px;
  }
`;

const Projects = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 800px;
  width: 100%;

  @media ${device.tablet} {
    flex-direction: row;
    height: 480px;
    gap: 1rem;
    margin-block-end: 1rem;
  }
`;

const Logos = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  overflow: hidden;
`;

const Copyright = styled(SmallerText)`
  margin-block-start: 2rem;
  opacity: 0.5;
`;

interface StyledLinkProps {
  width: string;
}

const StyledLink = styled(Link)<StyledLinkProps>`
  height: 100%;
  margin-block-end: 1rem;

  @media ${device.tablet} {
    width: ${({ width }) => `${width}%`};
    margin-block-end: unset;
  }
`;

export default function Home() {
  const [device, setDevice] = useState("");
  const [quantityLoaders, setQuantityLoaders] = useState(5);

  const isMobileDevice = device === "mobile";

  useEffect(() => {
    // This is unfortunately needed to prevent SSR from messing up the build, as `isMobile` doesn't exist on server.
    if (isMobile) {
      setDevice("mobile");
    }
  }, []);

  return (
    <Main initial="hidden" animate="visible">
      <PageLayout>
        <IntroCard />

        <PreviousCompanies>
          <PreviousEmployer
            ticketswap
            title="2022 - 2023"
            subtitle="Frontend developer in the Product team in charge of the buying experience"
            colors={["#00b6f024", "#00b6f012"]}
            href="https://www.ticketswap.com"
            isMobileDevice={isMobileDevice}
          />
          <PreviousEmployer
            framer
            title="2019 - 2022"
            subtitle="Started in Support, moved to Product Specialist, ended as Lead Product Specialist"
            colors={["#0099ff2e", "#cc00ff33"]}
            href="https://www.framer.com"
            isMobileDevice={isMobileDevice}
          />
        </PreviousCompanies>

        <PsychologyCard />

        <Logos>
          <Carousel />
        </Logos>

        <Projects>
          {" "}
          <StyledLink href="/ticketswap-security-factors" width="50">
            <ProjectCard
              title="Trust factors on Ticketswap"
              subtitle="Rethinking how we can display trust factors earlier in the buy flow"
              color={"#15abeb, #15abeb, #bbeffb, #aceffd"}
              isMobileDevice={isMobileDevice}
            >
              <Image
                alt="A screenshot of a workout tracker app"
                src="/images/ticketswap.gif"
                fill
                style={{ objectFit: "cover", objectPosition: "50% 50%" }}
              />
            </ProjectCard>
          </StyledLink>
          <StyledLink href="/invoicer" width="50">
            <ProjectCard
              title="Invoicer.studio"
              subtitle="A public web app to create beautiful invoices"
              color={"#0075bb, #009dbb, #00be9b, #00da7a"}
              isMobileDevice={isMobileDevice}
            >
              <Image
                alt="A screenshot of an invoice maker app"
                src="/images/invoicer.png"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "0% 0%",
                }}
              />
            </ProjectCard>
          </StyledLink>
        </Projects>
        <Projects>
          <StyledLink href="/workout-tracker" width="33">
            <ProjectCard
              title="Workout tracker"
              subtitle="A PWA built to record my workouts"
              color={"#E536AB, #EC61AB, #F38EAB, #F9B9AB"}
              isMobileDevice={isMobileDevice}
            >
              <Image
                alt="A screenshot of a workout tracker app"
                src="/images/workout-tracker.png"
                fill
                style={{ objectFit: "cover", objectPosition: "0% 0%" }}
              />
            </ProjectCard>
          </StyledLink>
          <StyledLink href="/loaders" width="66">
            <ProjectCard
              title="Loaders"
              subtitle="A GUI to generate loader components"
              color={"#c81c60, #b95f82, #d37c9e, #92003a"}
              isMobileDevice={isMobileDevice}
            >
              <LoaderExample
                quantityLoaders={quantityLoaders}
                setQuantityLoaders={setQuantityLoaders}
                showInteractivityCue={false}
              />
            </ProjectCard>
          </StyledLink>
        </Projects>
        <Copyright>© 2023 - Viktor Renkema</Copyright>
      </PageLayout>
    </Main>
  );
}
