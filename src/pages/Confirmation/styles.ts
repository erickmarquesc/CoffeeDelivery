import styled from 'styled-components'

export const Title = styled.header`
  display: flex;
  flex-direction: column;

  .title {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: 800;

    color: ${(props) => props.theme['yellow-700']};

    margin-bottom: 2.5rem;

    p {
      font-family: 'Roboto', sans-serif;
      font-size: 1.25rem;
      font-weight: 400;

      color: ${(props) => props.theme['gray-500']};
    }
  }
`

export const Main = styled.main`
  height: 16.875rem;
  width: 32.875rem;

  border: 1px solid ${(props) => props.theme['purple-500']};
  border-radius: 6px 36px;
  padding: 2rem;

  font-size: 1rem;
  color: ${(props) => props.theme['gray-800']};

  .clientInformation {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    margin-bottom: 2.812rem;
  }
  .column {
    display: flex;
    flex-direction: column;
  }

  .icon {
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    background: ${(props) => props.theme['purple-500']};
    border-radius: 50%;
  }

  .timer {
    background: ${(props) => props.theme['yellow-500']};
  }

  .dollar {
    background: ${(props) => props.theme['yellow-700']};
  }
`

export const Content = styled.div`
  display: flex;
  gap: 6.375rem;
`
