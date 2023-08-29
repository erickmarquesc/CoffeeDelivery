import { ArrowUDownLeft, ShoppingCart as ShoppingCartSVG } from 'phosphor-react';
import { Cart, CartSection, ConfirmationButton, TotalValue } from './styles';
import { useCart } from '../../../../contexts/ShoppingCartContext';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CartCard } from '../CartCard';

export function ShoppingCart() {

  const [subTotalPrice, setSubTotalPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const { shoppingCartItems } = useCart();
  const cartCounter = shoppingCartItems.length;

  const deliveryFee = 3.99;

  useEffect(() => {
    const subTotal = shoppingCartItems.reduce((total, item) => {
      return total + item.value * item.quantity
    }, 0);

    setSubTotalPrice(subTotal);
    setTotalPrice(subTotal + deliveryFee);

  }, [shoppingCartItems]);

  return (
    <CartSection>
      <Cart>
        {shoppingCartItems.length > 0 ?
          <>
            {
              shoppingCartItems.map((card) => {
                return (
                  <CartCard
                    key={card.id}
                    id={card.id}
                    name={card.name}
                    img={card.img}
                    value={card.value}
                    quantity={card.quantity}
                  />
                )
              })
            }

            < TotalValue >
              <div className="items">
                <p className="minSize">Total</p>
                <p className="minSize">Entrega</p>
                <h3 className="maxSize">Valor final</h3>
              </div>

              <div className="itemsValue">
                <p className="minSize">R$ {subTotalPrice.toFixed(2)}</p>
                <p className="minSize">R$ {deliveryFee}</p>
                <h3 className="maxSize">R$ {totalPrice.toFixed(2)}</h3>
              </div>
            </TotalValue>

            <ConfirmationButton
              type="submit"
              form="checkoutForm"
              disabled={cartCounter == 0}
            >
              CONFIRMAR PEDIDO
            </ConfirmationButton>
          </>
          : <>
            <div className='notItem'>
              <ShoppingCartSVG size={40} weight="regular" />
              <strong>
                Não há mais itens no carrinho!
              </strong>
              <p>
                Vou te mostrar nosso menu novamente <br /> e você escolhe outro café, blz 🤙.
              </p>

              <NavLink to='/'>
                <button>
                  <ArrowUDownLeft size={20} weight="bold" />
                  Voltar ao menu
                </button>
              </NavLink>
            </div>
          </>}
      </Cart>
    </CartSection >
  );
};
