import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70rem;
  height: 6.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 193px;
  }
`
export const Locale = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8.93rem;
  height: 2.375rem;
  border-radius: 8px;
  color: ${(props) => props.theme['purple-500']};
  background: ${(props) => props.theme['purple-100']};

  padding: 0.75rem;

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['purple-600']};
  }
`

export const CartButton = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  position: relative;

  background: ${(props) => props.theme['yellow-100']};

  border: none;
  border-radius: 0.5rem;

  margin-right: 0.75rem;

  transition: 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }

  .cartIcon {
    color: ${(props) => props.theme['yellow-700']};
  }

  .countOfItems {
    display: flex;

    align-items: center;
    justify-content: center;

    position: absolute;
    top: -0.5rem;
    left: 1.625rem;

    font-size: 0.75rem;
    font-weight: bold;

    width: 1.25rem;
    height: 1.25rem;

    background: ${(props) => props.theme['yellow-700']};
    color: ${(props) => props.theme.white};
    border-radius: 50%;
  }
`

export const Logo = styled.img`
  width: 5.312rem;
`
