import { CartButton, HeaderContainer, Locale, Logo } from './styles'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingContext } from '../../contexts/ShoppingCartContext'
import LogoBrand from '../../assets/LogoBrand.svg'

export function Header() {
  const { shoppingCartItems } = useContext(ShoppingContext)
  const cartCounter = shoppingCartItems.length

  return (
    <HeaderContainer>
      <Link to="/">
        <Logo src={LogoBrand} />
      </Link>

      <div>
        <NavLink to="/checkout">
          <CartButton>
            <ShoppingCart size={20} className="cartIcon" weight="fill" />
            <div className="countOfItems">{cartCounter}</div>
          </CartButton>
        </NavLink>
        <Locale>
          <MapPin className="map-pin" size={24} weight="fill" />
          <p>São Paulo, SP</p>
        </Locale>
      </div>
    </HeaderContainer>
  )
}
