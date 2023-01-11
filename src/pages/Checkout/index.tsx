import { Bank, CreditCard, CurrencyDollarSimple, MapPinLine, Money } from 'phosphor-react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Container, Content } from '../../components/containers';
import { ShoppingCart } from './components/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  Form,
  Button,
  FormContainer,
  HeaderWrapper,
  PaymentMethods,
  PaymentContainer,
  ButtonsContainer,
  CheckoutContainer,
  Input, Input2, Input3, Input4, Input5
} from './style';

export function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethods>('Dinheiro');
  const { register, handleSubmit, setValue } = useForm();
  const formHistory = useNavigate();

  const dataOfForm: SubmitHandler<FieldValues> = (data, e) => {
    formHistory('/confirmation', { state: data })
  };

  function handlePaymentMethodChange(paymentMethod: PaymentMethods) {
    setValue('paymentMethod', paymentMethod)
    setPaymentMethod(paymentMethod)
  };

  return (
    <Container variant='secondary'>
      <Content variant='secondary'>

        <FormContainer>

          <CheckoutContainer>
            <h1 className="titles">Complete seu pedido</h1>
            <h1 className="titles">Cafés selecionados</h1>
          </CheckoutContainer>

          <Form
            id="checkoutForm"
            onSubmit={handleSubmit(dataOfForm, () => {
              alert('mamei')
            })}
          >
            <section className="methods">
              <div className="teste">

                <HeaderWrapper>
                  <MapPinLine size={22} color="#C47f17" />
                  <div>
                    <h3 className="subtitle">Endereço de Entrega</h3>
                    <p className="description">
                      Informe o endereço onde deseja receber seu pedido
                    </p>
                  </div>
                </HeaderWrapper>

                <Input2 {...register('cep')} placeholder="CEP" required />
                <Input {...register('rua')} placeholder="Rua" required />
                <Input2 {...register('numero')} placeholder="Número" required />
                <Input3
                  {...register('complemento')}
                  placeholder="Complemento / Opcional"
                />
                <Input2 {...register('bairro')} placeholder="Bairro" required />
                <Input4 {...register('cidade')} placeholder="Cidade" required />
                <Input5 {...register('uf')} placeholder="UF" required />
              </div>

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
            </section>

            <ShoppingCart />
            
          </Form>
        </FormContainer>
      </Content>
    </Container>
  )
};
