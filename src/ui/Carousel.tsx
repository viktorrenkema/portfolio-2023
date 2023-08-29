import "../app/globals.css";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { Javascript } from "../../public/logos/Javascript";
import { React } from "../../public/logos/React";
import { GraphQL } from "../../public/logos/GraphQL";
import { Git } from "../../public/logos/Git";
import { Framer } from "../../public/logos/FramerForCarousel";
import { Emotion } from "../../public/logos/Emotion";
import { CSS } from "../../public/logos/CSS";
import { HTML } from "../../public/logos/HTML";
import { Motion } from "../../public/logos/Motion";
import { Figma } from "../../public/logos/Figma";
import { Typescript } from "../../public/logos/Typescript";
import { Next } from "../../public/logos/Next";
import { radius } from "@/lib/theme";
import { styled } from "styled-components";

const Row = styled(motion.ul)`
  display: flex;
  margin-right: 30px;
  gap: 20px;
  margin-block-end: 1rem;
  will-change: transform;
  list-style-type: none;
`;

const CarouselWrapper = styled.div`
  display: flex;
  gap: 1rem;
  overflow: hidden;
  flex-wrap: nowrap;
`;

const Inner = styled(motion.div)`
  display: flex;
  min-width: 100px;
  justify-content: center;
  align-items: center;
  border-radius: ${radius.sm};
`;

const Li = styled.li`
  display: contents;
`;

export const Carousel = () => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(0, -50.4, v)}%`);

  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * 2 * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <CarouselWrapper>
      <Row style={{ x }}>
        {logosList.map((logo) => {
          return (
            <Li key={logo.id}>
              <Inner>{logo.graphic}</Inner>
            </Li>
          );
        })}
      </Row>
    </CarouselWrapper>
  );
};

const logosList = [
  {
    color: "#F93C0A, #FF7D0A, #FFBF0A, #FFED0A",
    title: "HTML",
    graphic: HTML(),
    id: "1",
  },
  {
    color: "#0075BB, #009DBB, #00BE9B, #00DA7A",
    title: "CSS",
    graphic: CSS(),
    id: "2",
  },
  {
    color: "#FCDE00, #FFDE2F, #FFDC5D, #FFD98B",
    title: "Javascript",
    graphic: Javascript(),
    id: "3",
  },
  {
    color: "#61dafb, #84dbf9, #a8d8f6, #ccd6f3",
    title: "React",
    graphic: React(),
    id: "4",
  },
  {
    color: "#F05233, #F57B33, #F9A533, #FDD133",
    title: "Git",
    graphic: Git(),
    id: "6",
  },
  {
    color: "#E536AB, #EC61AB, #F38EAB, #F9B9AB",
    title: "GraphQL",
    graphic: GraphQL(),
    id: "7",
  },
  {
    color: "#9162C0, #C57857, #D17724, #3B88E9",
    title: "Next",
    graphic: Next(),
    id: "9",
  },
  {
    color: "#3078c6, #4B8AC6, #6A9EC6, #89B2C6",
    title: "Typescript",
    graphic: Typescript(),
    id: "10",
  },
  {
    color: "#F24E1D, #FF7262, #A259FF, #19BCFE, #0FCF82",
    title: "Figma",
    graphic: Figma(),
    id: "11",
  },
  {
    color: "#F93C0A, #FF7D0A, #FFBF0A, #FFED0A",
    title: "Framer",
    graphic: Framer(),
    id: "12",
  },
  {
    color: "rgb(89,82,157), rgb(82,113,180), rgb(187,75,150)",
    title: "Framer Motion",
    graphic: Motion(),
    id: "5",
  },
  {
    color: "#FFD33C, #EF9900, #F1B6ED, #DC34B0",
    title: "Styled Components",
    graphic: Emotion(),
    id: "13",
  },
  {
    color: "#F93C0A, #FF7D0A, #FFBF0A, #FFED0A",
    title: "HTML",
    graphic: HTML(),
    id: "14",
  },
  {
    color: "#0075BB, #009DBB, #00BE9B, #00DA7A",
    title: "CSS",
    graphic: CSS(),
    id: "15",
  },
  {
    color: "#FCDE00, #FFDE2F, #FFDC5D, #FFD98B",
    title: "Javascript",
    graphic: Javascript(),
    id: "16",
  },
  {
    color: "#61dafb, #84dbf9, #a8d8f6, #ccd6f3",
    title: "React",
    graphic: React(),
    id: "17",
  },
  {
    color: "#F05233, #F57B33, #F9A533, #FDD133",
    title: "Git",
    graphic: Git(),
    id: "19",
  },
  {
    color: "#E536AB, #EC61AB, #F38EAB, #F9B9AB",
    title: "GraphQL",
    graphic: GraphQL(),
    id: "20",
  },
  {
    color: "#9162C0, #C57857, #D17724, #3B88E9",
    title: "Next",
    graphic: Next(),
    id: "21",
  },
  {
    color: "#3078c6, #4B8AC6, #6A9EC6, #89B2C6",
    title: "Typescript",
    graphic: Typescript(),
    id: "21",
  },
  {
    color: "#F24E1D, #FF7262, #A259FF, #19BCFE, #0FCF82",
    title: "Figma",
    graphic: Figma(),
    id: "22",
  },
  {
    color: "#F93C0A, #FF7D0A, #FFBF0A, #FFED0A",
    title: "Framer",
    graphic: Framer(),
    id: "23",
  },
  {
    color: "rgb(89,82,157), rgb(82,113,180), rgb(187,75,150)",
    title: "Framer Motion",
    graphic: Motion(),
    id: "24",
  },
  {
    color: "#FFD33C, #EF9900, #F1B6ED, #DC34B0",
    title: "Styled Components",
    graphic: Emotion(),
    id: "25",
  },
];
