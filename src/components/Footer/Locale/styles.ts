import styled from "styled-components";

export const Locale = styled.div`
  display: flex;
  gap: 4px;
  height: 2.375rem;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme['purple-dark']};
  background: ${(props) => props.theme['purple-light']};

  padding: 0.75rem;

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['purple']};
  }

  svg{
    color: ${(props) => props.theme['purple-dark']};
  }
`