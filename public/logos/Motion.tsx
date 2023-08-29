import { space } from "@/lib/theme";
import { Inter } from "@/ui/Texts";
import { styled } from "styled-components";

const Container = styled.div`
  height: ${space[48]};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${space[16]};
`;

export function Motion() {
  return (
    <Container>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
        <path
          d="M 32 0 L 32 16 L 24 24 L 16 32 L 8 24 L 16 16 L 16 16.073 L 16 16 Z"
          fill="#4d00ff"
        ></path>
        <path d="M 32 16 L 32 32 L 24 24 Z" fill="#045aff"></path>
        <path d="M 16 16 L 8 24 L 0 32 L 0 0 L 8 8 Z" fill="#ff00ac"></path>
      </svg>
      <Inter>Motion</Inter>
    </Container>
  );
}
