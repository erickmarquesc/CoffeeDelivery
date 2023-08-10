import styled from 'styled-components';

export const LocaleCartGroup = styled.div`
  gap: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const MidiaGroup = styled.div`
  gap: 16px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;

  p{
    font: normal 1rem 'Baloo 2', sans-serif };
    color:  ${(props)=>props.theme['base-label']
  }
`