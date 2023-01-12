import styled from 'styled-components';

export const LocaleCartGroup = styled.div`
  gap: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p{
    font: normal 1rem 'Baloo 2', sans-serif };
    color:  ${(props)=>props.theme['base-label']
  }
`