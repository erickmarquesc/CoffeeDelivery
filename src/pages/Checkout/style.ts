import styled from 'styled-components'

export const FormContainer = styled.div`
  margin-right: 5rem;
  height: 90vh;
  margin-bottom: 34px;
`
export const CheckoutContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 31.375rem;

  .titles {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;

    margin-bottom: 0.93rem;
    color: ${(props) => props.theme['base-title']};
  }
`
export const Form = styled.form`
  width: 35rem;
  height: 13.5rem;
  display: flex;

  .putos {
    top: -5rem;
  }

  .teste {
    padding: 2rem;
    width: 40rem;
    height: 23.25rem;

    border-radius: 8px;

    background: ${(props) => props.theme['base-card']};
  }
`