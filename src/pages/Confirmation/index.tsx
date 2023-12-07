import { MainContent, Main, HeaderSection, TitleSection } from './styles';
import { CurrencyDollarSimple, MapPin, Timer } from 'phosphor-react';
import { Container, Content } from '../../components/Containers/containers';
import illustration from '../../assets/Illustration.svg';
import { useLocation } from 'react-router-dom';
import { useCart } from '../../contexts/ShoppingCartContext';

export function Confirmation() {

  const history: any = useLocation();
  const dados: FormContextProps = history?.state;
  const {paymentMethod} = useCart();

  return (
    <Container variant='secondary'>
      <Content>
        <div>

          <HeaderSection>
            <TitleSection>
              <h1>Uhu! Pedido confirmado</h1>
              <p>Agora é só aguardar que logo o café chegará até você</p>
            </TitleSection>
          </HeaderSection>

          <MainContent>
            <Main>

              <section className="clientInformation">
                <div className="icon">
                  <MapPin size={16} weight="fill" />
                </div>
                <p>
                  Entrega em{' '}
                  <strong>
                    {dados.rua}, nº {dados.numero} <br />
                  </strong>
                  {dados.bairro} - {dados.cidade}, {dados.uf}
                </p>
              </section>

              <section className="clientInformation">
                <div className="icon timer">
                  <Timer size={16} weight="fill" />
                </div>
                <p className="column">
                  Previsão de entrega
                  <strong>20 min - 30 min</strong>
                </p>
              </section>

              <section className="clientInformation">
                <div className="icon dollar">
                  <CurrencyDollarSimple size={16} weight="fill" />
                </div>
                <p className="column">
                  Pagamento na entrega
                  <strong>{paymentMethod}</strong>
                </p>
              </section>

            </Main>

            <img src={illustration} alt="Rapaz fazendo entrega de moto" />

          </MainContent>

        </div>
      </Content>
    </Container>
  );
};
