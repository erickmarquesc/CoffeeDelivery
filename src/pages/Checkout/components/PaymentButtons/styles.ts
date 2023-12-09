import styled from "styled-components"

export const ButtonsContainer = styled.div`
  gap: 12px;
  border: none;
  display: flex;
  flex-wrap: wrap;
  max-width: 40rem;
  justify-content: center;
`
export type PaymentMethods =
  | 'Cartão de crédito'
  | 'Cartão de débito'
  | 'Dinheiro'

interface ButtonProps {
  isSelected?: boolean
}

export const Button = styled.button<ButtonProps>`
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px;
  width: 178px;
  height: 3.187rem;

  border-radius: 8px;
  color: ${(props) => props.theme['base-title']};
  background: ${(props) => props.theme['base-button']};

  svg{
    color: ${(props) => props.theme['purple']};
  }

  font-size: 0.75rem;

  transition: 0.2s ease;

  border: 1px solid
    ${(props) => (props.isSelected ? props.theme['purple'] : 'transparent')};

  background: ${(props) =>
    props.isSelected ? props.theme['purple-light'] : props.theme['base-button']};

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`
