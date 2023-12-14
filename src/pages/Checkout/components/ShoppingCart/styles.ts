import styled from 'styled-components'

export const CartSection = styled.section`
  .title {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;

    margin-bottom: 0.93rem;
    color: ${(props) => props.theme['purple']};
  }
`

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 15.125rem;
  gap: 16px;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  padding: 16px;

  .notItem{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme['base-label']};
    text-align: center;
    gap: 10px;

    svg{
      color: ${(props) => props.theme['base-label']};
    };

    p{
      align-items: center;
    };

    button{
      border: 0;
      gap: 12px;
      padding: 8px;
      display: flex;
      border-radius: 8px;
      align-items: center;
      justify-content: center;
      color: ${(props) => props.theme['white']};
      background: ${(props) => props.theme['purple-dark']};

      svg{
        color: ${(props) => props.theme['white']};
      };

      &:hover {
        cursor: pointer;
        filter: brightness(1.2);
        transition: 0.2s ease-in-out;
      };
    };
  }
`

export const TotalValue = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  height: 5.75rem;
  width: 23rem;

  .items {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

  }
  .minSize {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  .maxSize {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-title']};
  }

  .itemsValue {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    text-align: end;
  }
`

export const ConfirmationButton = styled.button`
  height: 2.875rem;
  width: 23rem;

  border: none;
  border-radius: 8px;
  margin-bottom: 2.5rem;

  color: ${(props) => props.theme['white']};
  background: ${(props) => props.theme['yellow']};

  font-size: 0.875rem;
  font-weight: bold;

  transition: 0.2s ease-in-out;
  &:hover {
    filter: brightness(1.1);
    cursor: pointer;
  }

  &:disabled {
    background: ${(props) => props.theme['base-hover']};

    &:hover {
      cursor: not-allowed;
      filter: brightness(1);
    }
  }
`
