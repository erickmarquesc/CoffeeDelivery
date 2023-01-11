import styled, { css } from "styled-components";
import { IConteinersProps } from "../interfaces.d";

export const Container = styled.div<IConteinersProps>`
  height: auto;
  padding: 2rem 0 2rem;

  ${(props) => props.variant === 'primary' ? css`
    background: ${(props) => props.theme["base-card"]};
  `: props.variant === 'secondary' && css`
    background: ${(props) => props.theme["base-background"]};
  `}
`;

export const Content = styled.div<IConteinersProps>`
  width: 100%;
  display: flex;
  margin: 0 auto;
  max-width: 1120px;
  padding: 0 1.5rem;
  justify-content: space-between;

  ${(props) => props.variant === 'primary' ? css`
    align-items: center;
  `: props.variant === 'secondary' && css`
    align-items: flex-start;
  `}
`;