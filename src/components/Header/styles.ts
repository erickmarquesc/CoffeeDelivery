import styled from 'styled-components';

export const LocaleCartGroup = styled.div`
  gap: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`
export const Locale = styled.div`
  display: flex;
  gap: 4px;
  height: 2.375rem;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme['purple-dark']};
  background: ${(props) => props.theme['purple-light']};

  padding: 0.75rem;

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['purple']};
  }

  svg{
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const CartButton = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  position: relative;

  background: ${(props) => props.theme['yellow-light']};

  border: none;
  border-radius: 0.5rem;

  margin-right: 0.75rem;

  transition: 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }

  .cartIcon {
    color: ${(props) => props.theme['yellow-dark']};
  }

  .countOfItems {
    display: flex;

    align-items: center;
    justify-content: center;

    top: -0.5rem;
    left: 1.625rem;
    position: absolute;

    font-weight: bold;
    font-size: 0.75rem;

    width: 1.25rem;
    height: 1.25rem;

    border-radius: 50%;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme['yellow-dark']};
  }
`

export const Logo = styled.img`
  width: 5.312rem;
`
