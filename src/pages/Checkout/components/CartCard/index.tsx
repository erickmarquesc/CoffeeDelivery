import { useCart } from '../../../../contexts/ShoppingCartContext';
import { Minus, Plus, Trash } from 'phosphor-react';
import { toast } from 'react-toastify';
import { useState } from 'react';
import {
  CartCoffee,
  MidWrapper,
  ProductValue,
  CounterButton,
  CounterWrapper,
  RemoveItemButton
} from './styles';
interface CartItemProps {
  id: number,
  name: string,
  img: string,
  value: number,
  quantity: number,
};

export function CartCard({ id, name, img, value, quantity }: CartItemProps) {

  const { changeAmountOfCoffes, removeCoffee } = useCart();
  const [totalValue, setTotalValue] = useState(value * quantity);

  function handleIncreaseAmount() {
    changeAmountOfCoffes(id, quantity + 1);

    setTotalValue(totalValue + value);
  };

  function handleDeacreaseAmount() {
    if (quantity > 1) {
      changeAmountOfCoffes(id, quantity - 1);

      setTotalValue(totalValue - value);
    } else if (quantity >= 1) {
      toast.error('Para remover o item do carrinho clique no botão "REMOVER"');
    };
  };

  function handleRemoveCoffe() {
    removeCoffee(id);
  };

  return (
    <CartCoffee productId={id}>
      <img className="coffeImg" src={img} alt="Coffee image" />

      <MidWrapper>
        <p className="coffeTypeText">{name}</p>
        <div className="buttonsWrapper">
          <CounterWrapper>
            <CounterButton onClick={handleDeacreaseAmount} type='button'>
              <Minus weight="bold" />
            </CounterButton>
            <p className="itemsInCart">{quantity}</p>
            <CounterButton onClick={handleIncreaseAmount} type='button'>
              <Plus weight="bold" />
            </CounterButton>
          </CounterWrapper>
          <RemoveItemButton onClick={handleRemoveCoffe} type='button'>
            <Trash size={16} />
            REMOVER
          </RemoveItemButton>
        </div>
      </MidWrapper>
      <ProductValue>
        <p>R$</p>
        <span>{totalValue.toFixed(2)}</span>
      </ProductValue>
    </CartCoffee>
  )
}
