import { Container, Content } from '../../components/Containers/containers';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { PaymentButtons } from './components/PaymentButtons';
import { ShoppingCart } from './components/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { MapPinLine } from 'phosphor-react';
import {
  Form,
  HeaderWrapper,
  FormContainer,
  CheckoutContainer,
  Input, Input2, Input3, Input4, Input5
} from './style';

export function Checkout() {

  const { register, handleSubmit } = useForm();
  const formHistory = useNavigate();

  const dataOfForm: SubmitHandler<FieldValues> = (data, e) => {
    formHistory('/confirmation', { state: data })
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
              alert('confirmado')
            })}
          >
            <section className="methods">
              <div className="teste">

                <HeaderWrapper>
                  <MapPinLine size={22} />
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

              <PaymentButtons />
            </section>

            <ShoppingCart />

          </Form>
        </FormContainer>
      </Content>
    </Container>
  )
};
