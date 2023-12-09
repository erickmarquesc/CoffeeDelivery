import styled from 'styled-components'
import { Content } from '../../components/Containers/containers'

export const CheckoutContente = styled(Content)`
  gap: 12px;
  flex-direction: column;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-title']};
  }

  .formSectionContainer{
    gap: 12px;
    display: flex;
    flex-direction: column;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;

  .inputSection{
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
`

export const FormSection = styled.section`
  padding: 2rem;
  max-width: 39rem;
  border-radius: 8px;
  background: ${(props) => props.theme['base-card']};
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

const DefaultInput = styled.input`
  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-label']};
  border-radius: 5px;
  height: 2.625rem;
  padding: 1rem;

  &:focus {
    outline: 2px solid ${(props) => props.theme['purple']};
  }

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const Input = styled(DefaultInput)`
  width: 100%;
`
export const Input2 = styled(DefaultInput)`
  width: 30%;
`
export const Input3 = styled(DefaultInput)`
  width: 68.5%;
`
export const Input4 = styled(DefaultInput)`
  width: 56.3%;
`
export const Input5 = styled(DefaultInput)`
  max-width: 3.75rem;
`