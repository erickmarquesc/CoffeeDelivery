import { Button, PaymentContainer, ButtonsContainer, PaymentMethods } from './styles';
import { Bank, CreditCard, CurrencyDollarSimple, Money } from 'phosphor-react';
import { useCart } from '../../../../contexts/ShoppingCartContext';
import { useForm } from 'react-hook-form';

export function PaymentButtons() {

  const { paymentMethod, paymentMethodChange } = useCart();
  const { register, setValue } = useForm();

  function handlePaymentMethodChange(paymentMethod: PaymentMethods) {
    setValue('paymentMethod', paymentMethod);
    paymentMethodChange(paymentMethod);
  };

  return (
    <PaymentContainer>

      <section className="header">
        <CurrencyDollarSimple color="#8047F8" size={22} />
        <div>
          <h2 className="subtitle">Pagamento</h2>
          <p className="description">
            O pagamento é feito na entrega. Escolha a forma que deseja
            pagar
          </p>
        </div>
      </section>

      <ButtonsContainer>
        <Button
          type="button"
          isSelected={paymentMethod === 'Cartão de crédito'}
          onClick={() => handlePaymentMethodChange('Cartão de crédito')}
        >
          <CreditCard className="iconButton" size={18} color="#8047F8" />
          CARTÃO DE CRÉDITO
        </Button>

        <Button
          type="button"
          isSelected={paymentMethod === 'Cartão de débito'}
          onClick={() => handlePaymentMethodChange('Cartão de débito')}
        >
          <Bank className="iconButton" size={18} color="#8047F8" />
          CARTÃO DE DÉBITO
        </Button>

        <Button
          type="button"
          isSelected={paymentMethod === 'Dinheiro'}
          onClick={() => handlePaymentMethodChange('Dinheiro')}
        >
          <div className="money">
            <Money className="iconButton" size={18} color="#8047F8" />
            DINHEIRO
          </div>
        </Button>

        <input
          value={paymentMethod}
          type="hidden"
          {...register('paymentMethod')}
        />

      </ButtonsContainer>
    </PaymentContainer>
  );
};