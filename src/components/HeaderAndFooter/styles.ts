import styled from 'styled-components';
import { Content } from '../Containers/containers';

export const LocaleCartGroup = styled.div`
  gap: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderAndFooterRootContent = styled(Content)`
  align-items: center;
  flex-wrap: wrap;
  
  @media(max-width: 800px){
    justify-content: center;
    gap: 32px;
  }
  
`

export const MidiaGroup = styled.div`
  gap: 16px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  p{
    font: normal 1rem 'Baloo 2', sans-serif };
    color:  ${(props)=>props.theme['base-label']
  }
`