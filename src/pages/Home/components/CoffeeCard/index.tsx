import { Card, CounterButton, CounterWrapper, ShopContainer, TypeWrapper } from './styles';
import { useCart } from '../../../../contexts/ShoppingCartContext';
import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import { useState } from 'react';

export function CoffeeCard({ id, name, img, value, description, types }: CardItemProps) {

  const { addCartItem } = useCart();
  const [quantity, setQuantity] = useState(0);

  function handleDecreaseQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    };
  };

  function handleIncreaseQuantity() {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    };
  };

  function handleAddProduct() {
    const coffee: CardItemProps = {
      id,
      name,
      img,
      value,
      quantity,
      description,
      types
    };

    addCartItem(coffee);
    setQuantity(0);
  };

  return (
    <>
      <Card productId={id} key={id}>
        <img className="coffeImg" src={img} alt="Café tradicional" />

        <TypeWrapper>
          {types.map((type) => {
            return (
              <div className="coffeType" key={type}>
                {type}
              </div>
            )
          })}
        </TypeWrapper>

        <h1>{name}</h1>
        <p className="description">{description}</p>

        <ShopContainer>
          <p>
            R$ <span>{value}</span>
          </p>

          <CounterWrapper>
            <CounterButton onClick={handleDecreaseQuantity}>
              <Minus weight="bold" />
            </CounterButton>

            <p className="itemsInCart">
              {quantity}
            </p>

            <CounterButton onClick={handleIncreaseQuantity}>
              <Plus weight="bold" />
            </CounterButton>
          </CounterWrapper>

          <button className="cartButton" onClick={() => handleAddProduct()}>
            <ShoppingCart size={20} weight="fill" />
          </button>
        </ShopContainer>
      </Card>
    </>
  );
};
