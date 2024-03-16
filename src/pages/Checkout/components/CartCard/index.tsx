import { useCart } from '../../../../contexts/ShoppingCartContext'
import { Trash } from 'phosphor-react'
import { toast } from 'react-toastify'
import { useState } from 'react'
import {
  CartCoffee,
  MidWrapper,
  ProductValue,
  RemoveItemButton
} from './styles'
import { Counter } from '../../../../components/Counter'
interface ICartItemProps {
  id: number,
  name: string,
  img: string,
  value: number,
  quantity: number,
}

export function CartCard({ id, name, img, value, quantity }: ICartItemProps) {

  const { changeAmountOfCoffes, removeCoffee } = useCart()
  const [totalValue, setTotalValue] = useState(value * quantity)

  function handleIncreaseQuantity() {
    changeAmountOfCoffes(id, quantity + 1)

    setTotalValue(totalValue + value)
  }

  function handleDecreaseQuantity() {
    if (quantity > 1) {
      changeAmountOfCoffes(id, quantity - 1)

      setTotalValue(totalValue - value)
    } else if (quantity >= 1) {
      toast.error('Para remover o item do carrinho clique no botão "REMOVER"')
    }
  }

  function handleRemoveCoffe() {
    removeCoffee(id)
  }

  return (
    <CartCoffee productId={id}>
      <img className="coffeImg" src={img} alt="Coffee image" />

      <MidWrapper>

        <p className="coffeTypeText">{name}</p>

        <div className="buttonsWrapper">
          <ProductValue>
            <p>R$</p>
            <span>{totalValue.toFixed(2)}</span>
          </ProductValue>

          <Counter
            handleDecreaseQuantity={handleDecreaseQuantity}
            handleIncreaseQuantity={handleIncreaseQuantity}
            quantity={quantity}
          />
          <RemoveItemButton onClick={handleRemoveCoffe} type='button'>
            <Trash size={16} />
            REMOVER
          </RemoveItemButton>
        </div>

      </MidWrapper>
    </CartCoffee>
  )
}
