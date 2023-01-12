import styled from "styled-components";

export const SocialMidiaButton = styled.button`
  display: flex;
  gap: 4px;
  height: 2.375rem;
  border-radius: 8px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border: 0;
  background: ${(props) => props.theme['purple-light']};

  padding: 0.75rem;

  transition: 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }

  svg{
    color: ${(props) => props.theme['purple-dark']};
  }
`;