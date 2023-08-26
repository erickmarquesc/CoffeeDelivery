import styled from "styled-components"

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
    width: 100px;
    display: flex;
    justify-content: center;
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
  border: none;

  &:first-child{
    border-radius: 6px 0 0 6px;
  }
  &:last-child{
    border-radius:  0 6px 6px 0;
  }

  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme['white']};
    background-color: ${(props) => props.theme['purple-dark']};
  }
`