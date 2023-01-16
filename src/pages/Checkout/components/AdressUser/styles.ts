import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  margin-bottom: 2rem;
  gap: 0.5rem;

  svg{
    color: ${(props) => props.theme['yellow-dark']};
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