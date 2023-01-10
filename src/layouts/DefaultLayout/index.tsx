import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer, Container } from './styles'

export function DefaultLayout() {
  return (
    <Container>
      <LayoutContainer>
        <Header />
        <Outlet />
      </LayoutContainer>
    </Container>
  )
}
