import { Card, ShopContainer, TypeWrapper } from './styles';
import { useCart } from '../../../../contexts/ShoppingCartContext';
import { ShoppingCart } from 'phosphor-react';
import { useState } from 'react';

import { converterCoin } from '../../../../utils/converterCoin';
import { Counter } from '../../../../components/Counter';



export function CoffeeCard({ id, name, img, value, description, types }: CardItemProps) {

  const { addCartItem } = useCart();
  const [quantity, setQuantity] = useState(1);

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
    setQuantity(1);
  };

  return (
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
          R$ <span>{converterCoin(value)}</span>
        </p>
        <Counter
          handleDecreaseQuantity={handleDecreaseQuantity}
          handleIncreaseQuantity={handleIncreaseQuantity}
          quantity={quantity}
        />


        <button className="cartButton" onClick={() => handleAddProduct()}>
          <ShoppingCart size={20} weight="fill" />
        </button>
      </ShopContainer>
    </Card>
  );
};
