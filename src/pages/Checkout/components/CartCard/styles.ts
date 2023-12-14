import styled from 'styled-components'

interface CartCoffeProps {
  productId: number
}

export const CartCoffee = styled.div<CartCoffeProps>`
  display: flex;

  align-items: center;
  position: relative;
  width: 23rem;
  height: 5rem;
  border-bottom: solid 1px ${(props) => props.theme['base-text']};

  .coffeImg {
    width: 4rem;
    margin-right: 1.25rem;
  }
  
`

export const MidWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;

  .coffeTypeText {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1rem;
    color: ${(props) => props.theme['base-title']};
    text-transform: capitalize;
  }

  .buttonsWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const RemoveItemButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  width: 6rem;
  height: 2.375rem;

  border: none;
  border-radius: 6px;

  font-size: 0.75rem;
  color: ${(props) => props.theme['purple-dark']};
  background: ${(props) => props.theme['base-button']};

  transition: 0.2s ease-in-out;

  svg{
    color: ${(props) => props.theme['purple']};
  }

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`

export const ProductValue = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 1rem;
  width: 41px;
  gap: 0.25rem;
  color: ${(props) => props.theme['base-subtitle']};
`


