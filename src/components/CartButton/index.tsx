import { useCart } from '../../contexts/ShoppingCartContext'
import { ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { CartButton } from './styles'

export function ShoppingCartButton() {
  const { ShoppingCartContextState } = useCart()
  
  const cartCounter = ShoppingCartContextState.length
  const isActiveCart = cartCounter > 0 ? true : false
  
  return (
    <NavLink
      to={
        isActiveCart
          ? '/checkout'
          : ''
      }
    >
      <CartButton disabled={!isActiveCart}>
        <ShoppingCart
          size={20}
          className="cartIcon"
          weight="fill"
        />
        {isActiveCart && (
          <div className="countOfItems">
            {cartCounter}
          </div>
        )}
      </CartButton>
    </NavLink>
  )
}