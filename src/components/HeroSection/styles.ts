import styled from 'styled-components'

export const HeroSectionConteiner = styled.div`
  gap: 3.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 34px;
  flex-wrap: wrap;

  @media(max-width:800px){
    flex-direction: column;
  }
  
  .img {
    height: 19.5rem;
    width: 23.5rem;
  };
`

export const TitleHeroContent = styled.div`
  max-width: 40rem;
  
  .title {
    margin-bottom: 16px;
    font: normal 3rem 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['base-title']};

    @media(max-width:800px){
    font: normal 2rem 'Baloo 2', sans-serif;
    }
  };

  .subtitle {
    font-size: 1.25rem;
    margin-bottom: 4.125rem;
    color: ${(props) => props.theme['base-text']};

    @media(max-width:800px){
        font-size: 1rem;

    }
  };
`

export const ServicesHero = styled.div`
  gap: 2.5rem;
  display: flex;
  font-size: 1rem;
  align-items: center;
  color: ${(props) => props.theme['base-text']};

  svg{
    color: ${(props) => props.theme['white']};
  };

  .right-column {
    display: flex;
    align-items: center;
    margin-bottom: 1.25rem;
  };

  .left-column {
    display: flex;
    align-items: center;
    margin-bottom: 1.25rem;
  };

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;
    width: 2rem;
    border-radius: 9999px;

    margin-right: 0.75rem;
  };

  .cart {
    background: ${(props) => props.theme['yellow-dark']};
  };

  .timer {
    background: ${(props) => props.theme['yellow']};
  };

  .package {
    background: ${(props) => props.theme['base-text']};
  };

  .coffee {
    background: ${(props) => props.theme['purple-dark']};
  };
`
