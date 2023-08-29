import { space } from "@/lib/theme";
import { styled } from "styled-components";

const Container = styled.div`
  height: ${space[48]};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export function Framer() {
  return (
    <Container>
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="31">
        <path
          d="M 20.104 19.785 C 20.254 19.933 20.299 20.155 20.218 20.348 C 20.136 20.541 19.945 20.666 19.733 20.667 L 11.025 20.667 C 10.735 20.667 10.5 20.898 10.5 21.183 L 10.5 29.753 C 10.5 29.962 10.372 30.15 10.176 30.23 C 9.98 30.31 9.754 30.266 9.604 30.118 L 0.205 20.868 C 0.074 20.739 -0 20.564 -0 20.381 L -0 10.85 C -0 10.565 0.235 10.333 0.525 10.333 L 10.5 10.333 Z M 10.5 10.333 L 0.896 0.882 C 0.746 0.734 0.701 0.512 0.782 0.319 C 0.864 0.126 1.055 0 1.267 0 L 20.475 0 C 20.765 0 21 0.231 21 0.517 L 21 9.817 C 21 10.102 20.765 10.333 20.475 10.333 Z"
          fill="hsl(0, 0%, 100%)"
        ></path>
      </svg>
    </Container>
  );
}
