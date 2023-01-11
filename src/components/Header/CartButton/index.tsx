import { ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { CartButton } from "../styles";
import { useContext } from 'react'
import { ShoppingContext } from '../../../contexts/ShoppingCartContext'

export function ShoppingCartButton() {
  const { shoppingCartItems } = useContext(ShoppingContext)
  const cartCounter = shoppingCartItems.length

  return (
    <NavLink to="/checkout">
      <CartButton>
        <ShoppingCart size={20} className="cartIcon" weight="fill" />
        <div className="countOfItems">{cartCounter}</div>
      </CartButton>
    </NavLink>
  );
};