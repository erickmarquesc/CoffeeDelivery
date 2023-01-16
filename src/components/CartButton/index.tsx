import { ShoppingContext } from '../../contexts/ShoppingCartContext';
import { ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { CartButton } from "./styles";
import { useContext } from 'react';

export function ShoppingCartButton() {
  const { shoppingCartItems } = useContext(ShoppingContext);
  const cartCounter = shoppingCartItems.length;

  return (
    <NavLink to="/checkout">
      <CartButton>
        <ShoppingCart size={20} className="cartIcon" weight="fill" />
        {cartCounter > 0 ?
          <div className="countOfItems">{cartCounter}</div>
          :
          <></>
        }
      </CartButton>
    </NavLink>
  );
};