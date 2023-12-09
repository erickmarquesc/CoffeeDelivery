import { Button, ButtonsContainer, PaymentMethods } from './styles';
import { Bank, CreditCard, CurrencyDollarSimple, Money } from 'phosphor-react';
import { useCart } from '../../../../contexts/ShoppingCartContext';
import { useForm } from 'react-hook-form';
import { HeaderSectionForm } from '../HeaderSectionForm';
import { FormSection } from '../../style';

export function PaymentButtons() {

  const { paymentMethod, paymentMethodChange } = useCart();
  const { register, setValue } = useForm();

  function handlePaymentMethodChange(paymentMethod: PaymentMethods) {
    setValue('paymentMethod', paymentMethod);
    paymentMethodChange(paymentMethod);
  };

  return (
    <FormSection>
      <HeaderSectionForm
        title='Pagamento'
        description='O pagamento é feito na entrega. Escolha a forma que deseja pagar'
        colorIcon='purple'
        icon={<CurrencyDollarSimple size={22} />}
      />

      <ButtonsContainer>
        <Button
          type="button"
          isSelected={paymentMethod === 'Cartão de crédito'}
          onClick={() => handlePaymentMethodChange('Cartão de crédito')}
        >
          <CreditCard className="iconButton" size={18} />
          CARTÃO DE CRÉDITO
        </Button>

        <Button
          type="button"
          isSelected={paymentMethod === 'Cartão de débito'}
          onClick={() => handlePaymentMethodChange('Cartão de débito')}
        >
          <Bank className="iconButton" size={18} />
          CARTÃO DE DÉBITO
        </Button>

        <Button
          type="button"
          isSelected={paymentMethod === 'Dinheiro'}
          onClick={() => handlePaymentMethodChange('Dinheiro')}
        >
          <Money className="iconButton" size={18} />
          DINHEIRO
        </Button>

        <input
          value={paymentMethod}
          type="hidden"
          {...register('paymentMethod')}
        />

      </ButtonsContainer>
    </FormSection>
  );
};