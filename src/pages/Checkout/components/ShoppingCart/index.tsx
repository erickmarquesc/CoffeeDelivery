import { Cart, CartSection, ConfirmationButton, TotalValue } from './styles'
import { useEffect, useState } from 'react'
import { CartCard } from '../CartCard'
import { useCart } from '../../../../contexts/ShoppingCartContext'

export function ShoppingCart() {
  const { shoppingCartItems } = useCart()
  const deliveryFee = 3.99
  const [subTotalPrice, setSubTotalPrice] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const subTotal = shoppingCartItems.reduce((total, item) => {
      return total + item.value * item.quantity
    }, 0)
    setSubTotalPrice(subTotal)
    setTotalPrice(subTotal + deliveryFee)
  }, [shoppingCartItems])

  return (
    <CartSection>
      <Cart>
        {shoppingCartItems.map((card) => {
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
        })}
        <TotalValue>
          <div className="items">
            <p className="minSize">Total de itens</p>
            <p className="minSize">Entrega</p>
            <h3 className="maxSize">Total</h3>
          </div>

          <div className="itemsValue">
            <p className="minSize">R$ {subTotalPrice.toFixed(2)}</p>
            <p className="minSize">R$ {deliveryFee}</p>
            <h3 className="maxSize">R$ {totalPrice.toFixed(2)}</h3>
          </div>
        </TotalValue>

        <ConfirmationButton form="checkoutForm" type="submit">
          CONFIRMAR PEDIDO
        </ConfirmationButton>
      </Cart>
    </CartSection>
  )
}
