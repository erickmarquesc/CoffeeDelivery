import { Container, Content } from '../Containers/containers';
import { ShoppingCartButton } from './CartButton';
import { LocaleCartGroup } from './styles';
import { LocaleMap } from './Locale';
import { LogoCoffee } from './Logo';
import { MidiaButton } from './MidiaButton';

export function Footer() {

  return (
    <Container variant='primary'>
      <Content variant='secondary'>

        <LogoCoffee />

        <LocaleCartGroup>
          <p>Criado por Erick Marques Cabral | Programador UI Designer</p>
          <MidiaButton midia='github'/>
          <MidiaButton midia='figma'/>

          <LocaleMap />
          <ShoppingCartButton />
        </LocaleCartGroup>

      </Content>
    </Container>
  );
};
