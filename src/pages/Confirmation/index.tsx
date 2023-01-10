import { Content, Main, Title } from './styles'
import { CurrencyDollarSimple, MapPin, Timer } from 'phosphor-react'
import illustration from '../../assets/Illustration.svg'

import { useLocation } from 'react-router-dom'

interface FormContextProps {
  complemento: string
  bairro: string
  cep: string | number
  cidade: string
  numero: string
  rua: string
  uf: string
  paymentMethod: string
}

export function Confirmation() {
  const history: any = useLocation()
  const dados: FormContextProps = history?.state

  return (
    <>
      <Title>
        <header className="title">
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </header>
      </Title>
      <Content>
        <Main>
          <section className="clientInformation">
            <div className="icon">
              <MapPin size={16} weight="fill" color={'#FFFFFF'} />
            </div>
            <p>
              Entrega em{' '}
              <strong>
                {dados.rua}, {dados.numero} <br />
              </strong>
              {dados.bairro} - {dados.cidade}, {dados.uf}
            </p>
          </section>
          <section className="clientInformation">
            <div className="icon timer">
              <Timer size={16} weight="fill" color={'#FFFFFF'} />
            </div>
            <p className="column">
              Previsão de entrega
              <strong>20 min - 30 min</strong>
            </p>
          </section>
          <section className="clientInformation">
            <div className="icon dollar">
              <CurrencyDollarSimple size={16} weight="fill" color={'#FFFFFF'} />
            </div>
            <p className="column">
              Pagamento na entrega
              <strong>{dados.paymentMethod}</strong>
            </p>
          </section>
        </Main>

        <img src={illustration} alt="Rapaz fazendo entrega de moto" />
      </Content>
    </>
  )
}
