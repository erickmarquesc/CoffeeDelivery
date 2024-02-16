import { Container } from '../../components/Containers/containers'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { PaymentButtons } from './components/PaymentButtons'
import { ShoppingCart } from './components/ShoppingCart'
import { useNavigate } from 'react-router-dom'
import { MapPinLine } from 'phosphor-react'
import {
  Form,
  HeaderWrapper,
  CheckoutContente,
  Input, Input2, Input3, Input4, Input5, FormSection
} from './style'
import { HeaderSectionForm } from './components/HeaderSectionForm'

export function Checkout() {

  const { register, handleSubmit } = useForm()
  const formHistory = useNavigate()

  const dataOfForm: SubmitHandler<FieldValues> = (data, e) => {
    formHistory('/confirmation', { state: data })
  }

  return (
    <Container variant='secondary'>
      <CheckoutContente>
        <h1>Finalize seu pedido</h1>
        <Form
          id="checkoutForm"
          onSubmit={handleSubmit(dataOfForm, () => {
            alert('confirmado')
          })}
        >
          <div className='formSectionContainer'>
            <FormSection>
              <HeaderSectionForm
                title='Endereço de Entrega'
                description='Informe o endereço onde deseja receber seu pedido'
                icon={<MapPinLine size={22} />}
              />

              <section className='inputSection'>
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
              </section>
            </FormSection>


            <PaymentButtons />

          </div>

          <ShoppingCart />

        </Form>
      </CheckoutContente>
    </Container>
  )
}
