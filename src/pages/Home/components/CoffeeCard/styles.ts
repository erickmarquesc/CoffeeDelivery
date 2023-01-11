import styled from 'styled-components'

interface CardProps {
  productId: number
}

export const Card = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 19.375rem;
  width: 16rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  padding: 0 1.5rem;

  margin-bottom: 2rem;

  .coffeImg {
    margin-top: -1.2rem;
    margin-bottom: 0.75rem;
  }

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;

    margin-bottom: 0.5rem;
    color: ${(props) => props.theme['base-title']};
  }

  .description {
    text-align: center;
    font-size: 0.875rem;
    margin-bottom: 2rem;
    color: ${(props) => props.theme['base-text']};
  }

  .cartButton {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.375rem;
    height: 2.375rem;
    background: ${(props) => props.theme['purple-dark']};
    border: none;
    border-radius: 8px;
    margin-right: 12px;

    &:hover {
      filter: brightness(1.2);
      cursor: pointer;
      transition: 0.2s ease-in-out;
    }

    svg{
      color: ${(props)=>props.theme['white']};
    }
  }
`

export const TypeWrapper = styled.div`
  display: flex;
  gap: 0.25rem;
  .coffeType {
    font-size: 0.625rem;
    font-weight: bold;
    border-radius: 10px;

    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};

    padding: 0.3rem;
  }
`

export const ShopContainer = styled.div`
  width: 15rem;
  display: flex;
  justify-content: center;

  p {
    font-size: 0.875rem;

    color: ${(props) => props.theme['base-title']};
    span {
      font-family: 'baloo 2', sans-serif;
      font-size: 1.5rem;
      font-weight: 800;
      margin-right: 1.43rem;
    }
  }
`

export const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.375rem;
  width: 4.5rem;

  border-radius: 8px;
  margin-right: 0.5rem;
  background: ${(props) => props.theme['base-button']};

  .itemsInCart {
    color: ${(props) => props.theme['base-text']};
  }
`

export const CounterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.75rem;

  width: 100%;
  height: 38px;
  color: ${(props) => props.theme['purple-dark']};
  background: transparent;
  border: 0;
  margin: 0.5rem;

  &:first-child{
    border-radius: 6px 0 0 6px;
  }
  &:last-child{
    border-radius:  0 6px 6px 0;
  }

  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    filter: brightness(0.7);
  }
`
