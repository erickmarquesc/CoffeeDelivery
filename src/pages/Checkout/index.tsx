import { Container, Content } from '../../components/Containers/containers';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Form, FormContainer, CheckoutContainer } from './style';
import { PaymentButtons } from './components/PaymentButtons';
import { ShoppingCart } from './components/ShoppingCart';
import { AdressUser } from './components/AdressUser';
import { useNavigate } from 'react-router-dom';

export function Checkout() {

  const { handleSubmit } = useForm();
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
              alert('mamei')
            })}
          >
            <section className="methods">

              <AdressUser />
              <PaymentButtons />

            </section>

            <ShoppingCart />

          </Form>
        </FormContainer>
      </Content>
    </Container>
  );
};
