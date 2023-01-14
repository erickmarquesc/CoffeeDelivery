import styled from 'styled-components'

export const FormContainer = styled.div`
  margin-right: 5rem;
  height: 90vh;
`

export const CheckoutContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 31.375rem;

  .titles {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;

    margin-bottom: 0.93rem;
    color: ${(props) => props.theme['base-title']};
  }
`

export const HeaderWrapper = styled.header`
  display: flex;
  margin-bottom: 2rem;
  gap: 0.5rem;

  svg{
    color: ${(props)=>props.theme['yellow-dark']};
  }

  .subtitle {
    font-size: 1rem;
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 2px;
  }

  .description {
    font-size: 0.93rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Form = styled.form`
  width: 35rem;
  height: 13.5rem;
  display: flex;

  .putos {
    top: -5rem;
  }

  .teste {
    padding: 2rem;
    width: 40rem;
    height: 23.25rem;

    border-radius: 8px;

    background: ${(props) => props.theme['base-card']};
  }
`

const DefaultInput = styled.input`
  background: ${(props) => props.theme['base-input']};

  border: 1px solid ${(props) => props.theme['base-label']};
  border-radius: 5px;

  height: 2.625rem;
  margin-bottom: 1rem;

  padding: 1rem;

  &:focus {
    outline: 2px solid ${(props) => props.theme['purple']};
  }

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const Input = styled(DefaultInput)`
  width: 35rem;
`

export const Input2 = styled(DefaultInput)`
  width: 12.5rem;
  margin-right: 0.75rem;
`

export const Input3 = styled(DefaultInput)`
  width: 21.75rem;
`

export const Input4 = styled(DefaultInput)`
  width: 17.25rem;
  margin-right: 0.75rem;
`

export const Input5 = styled(DefaultInput)`
  width: 3.75rem;
`

export const PaymentContainer = styled.div`
  min-width: 40rem;
  height: 12.93rem;
  margin-top: 0.75rem;
  margin-right: 2rem;

  border-radius: 8px;
  background: ${(props) => props.theme['base-card']};

  padding: 2rem;

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
