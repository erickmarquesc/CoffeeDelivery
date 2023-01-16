import styled from "styled-components"

export const PaymentContainer = styled.div`
  min-width: 40rem;
  height: 12.93rem;
  margin-top: 0.75rem;
  margin-right: 2rem;

  border-radius: 8px;
  background: ${(props) => props.theme['base-card']};

  padding: 2rem;

  svg{
    color: ${(props) => props.theme['purple']};
  }

  .header {
    display: flex;
  }

  .subtitle {
    font-size: 1rem;
    color: ${(props) => props.theme['base-title']};
    margin-left: 0.5rem;
  }

  .description {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-left: 0.5rem;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  border: none;

  justify-content: center;
  max-width: 40rem;
  gap: 0.75rem;

  margin-top: 3.437rem;

  .iconButton {
    margin-right: 0.75rem;
  }

  .money {
    margin-left: -3.5rem;
    display: flex;
    align-items: center;
  }
`
export type PaymentMethods =
  | 'Cartão de crédito'
  | 'Cartão de débito'
  | 'Dinheiro'

interface ButtonProps {
  isSelected?: boolean
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 11.125rem;
  height: 3.187rem;

  border-radius: 8px;

  background: ${(props) => props.theme['base-button']};

  color: ${(props) => props.theme['base-title']};

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
