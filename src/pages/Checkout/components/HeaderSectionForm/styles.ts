import styled from "styled-components";

export interface IConteinersProps {
  colorIcon: "purple" | "yellow-dark"
}; 
export const HeaderSectionContainer = styled.div<IConteinersProps>`
  display: flex;
  margin-bottom: 2rem;
  gap: 0.5rem;

  svg {
    color: ${({ theme, colorIcon }) => theme[colorIcon]};
  }

  .title {
    font-size: 1rem;
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 2px;
  }

  .description {
    font-size: 0.93rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`