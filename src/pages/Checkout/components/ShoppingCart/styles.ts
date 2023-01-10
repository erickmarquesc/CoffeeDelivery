import styled from 'styled-components'

export const CartSection = styled.section`
  .title {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;

    margin-bottom: 0.93rem;
    color: ${(props) => props.theme['gray-500']};
  }
`

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 15.125rem;
  max-height: 999rem;
  width: 28rem;
  background: ${(props) => props.theme['gray-200']};
  border-radius: 6px 36px;
  padding: 0 1.5rem;
`

export const TotalValue = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5.125rem;
  height: 5.75rem;
  width: 23rem;

  .items {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 3rem;

    .minSize {
      font-size: 0.875rem;
      color: ${(props) => props.theme['gray-800']};
    }

    .maxSize {
      font-size: 1.25rem;
      color: ${(props) => props.theme['gray-500']};
    }
  }

  .itemsValue {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 3rem;

    text-align: end;

    .minSize {
      font-size: 0.875rem;
      color: ${(props) => props.theme['gray-800']};
    }

    .maxSize {
      font-size: 1.25rem;
      color: ${(props) => props.theme['gray-500']};
    }
  }
`

export const ConfirmationButton = styled.button`
  height: 2.875rem;
  width: 23rem;

  border: none;
  border-radius: 8px;
  margin-bottom: 2.5rem;

  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['yellow-500']};

  font-size: 0.875rem;
  font-weight: bold;

  transition: 0.2s ease-in-out;
  &:hover {
    filter: brightness(1.1);
    cursor: pointer;
  }

  &:disabled {
    background: ${(props) => props.theme['gray-800']};

    &:hover {
      cursor: not-allowed;
      filter: brightness(1);
    }
  }
`
