import styled from "styled-components";

export const CartButton = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  position: relative;

  background: ${(props) => props.theme['yellow-light']};

  border: none;
  border-radius: 0.5rem;

  margin-right: 0.75rem;

  transition: 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }

  .cartIcon {
    color: ${(props) => props.theme['yellow-dark']};
  }

  .countOfItems {
    display: flex;

    align-items: center;
    justify-content: center;

    top: -0.5rem;
    left: 1.625rem;
    position: absolute;

    font-weight: bold;
    font-size: 0.75rem;

    width: 1.25rem;
    height: 1.25rem;

    border-radius: 50%;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme['yellow-dark']};
  }
`