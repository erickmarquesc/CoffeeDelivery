import styled from 'styled-components';

export const HeaderSection = styled.header`
  display: flex;
  flex-direction: column;
`
export const TitleSection = styled.div` 

  margin-bottom: 2.5rem;
  font: normal 1.25rem 'Baloo 2', sans-serif;
  color: ${(props) => props.theme['yellow']};

  p {
    font: 400 1.25rem 'Roboto', sans-serif;;
    color: ${(props) => props.theme['base-subtitle']};
  };
`

export const Main = styled.main`
  width: 526px;
  padding: 2rem;
  border-radius: 6px 36px;
  border: 1px solid ${(props) => props.theme['yellow']};

  font-size: 1rem;
  color: ${(props) => props.theme['base-text']};

  .clientInformation {
    gap: 1.25rem;
    display: flex;
    align-items: center;
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
    border-radius: 50%;
    background: ${(props) => props.theme['purple']};
  }

  .timer {
    background: ${(props) => props.theme['yellow']};
  }

  .dollar {
    background: ${(props) => props.theme['yellow-dark']};
  }
`

export const MainContent = styled.div`
  display: flex;
  gap: 6.375rem;

  svg{
    color: ${(props)=>props.theme['white']};
  }
`
