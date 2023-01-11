import { ShoppingCartButton } from './CartButton';
import { LocaleCartGroup } from './styles';
import { LocaleMap } from './Locale';
import { LogoCoffee } from './Logo';
import { Container, Content } from '../containers';

export function Header() {

  return (
    <Container variant='primary'>
      <Content variant='secondary'>

        <LogoCoffee />

        <LocaleCartGroup>
          <LocaleMap />
          <ShoppingCartButton />
        </LocaleCartGroup>

      </Content>
    </Container>
  )
}
