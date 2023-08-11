import { createContext, useContext, useEffect, useState } from 'react';
import { PaymentMethods } from '../pages/Checkout/style';
import { CoffeeList } from '../utils/coffeeListAPI';
import { toast } from 'react-toastify';

export const ShoppingContext = createContext<ShoppingContextProps>({} as ShoppingContextProps);

export function ShoppingCartContextProvider({ children }: ShoppingCartContextProps) {

  const [shoppingCartItems, setShoppingCartItems] = useState<CartItemProps[]>([]);

  const [formState, setFormState] = useState<FormContextProps | {}>({});

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethods>('Dinheiro');

  function addCartItem(ItemSelected: CartItemProps) {
    const updatedCart = [...shoppingCartItems];

    if (ItemSelected.quantity === 0) {
      toast.error('Selecione uma quantidade válida', { position: 'top-right' });
    } else {
      const productExists = updatedCart.find(
        (coffe) => coffe.id === ItemSelected.id
      );

      if (productExists) {
        toast.error(
          'Item já adicionado ao carrinho, atualize a quantidade no checkout!',
          { position: 'top-right' }
        );
      } else {
        setShoppingCartItems([...shoppingCartItems, ItemSelected]);
        toast.success('Produto adicionado ao carrinho com sucesso!', {
          position: 'top-right'
        });
      };
    };
  };

  function changeAmountOfCoffes(id: number, quantity: number) {
    const items = shoppingCartItems.map((coffee) => {
      if (coffee.id === id) {
        return {
          ...coffee,
          quantity
        };
      };

      return coffee;
    });

    setShoppingCartItems(items);
  };

  function removeCoffee(id: number) {
    const newCart = shoppingCartItems.filter((coffee) => coffee.id !== id);

    setShoppingCartItems(newCart);
  };

  function paymentMethodChange(method: PaymentMethods) {
    setPaymentMethod(method);
  };

  useEffect(() => {
    const getShoppingLocalStorage =
      localStorage.getItem('CoffeDetails 1.0.0') ?? '[]'

    const shoppingCartLocalStorage = JSON.parse(getShoppingLocalStorage);

    setShoppingCartItems(shoppingCartLocalStorage);
  }, []);

  useEffect(() => {
    const newStorageCoffes = JSON.stringify(shoppingCartItems);
    localStorage.setItem('CoffeDetails 1.0.0', newStorageCoffes);
  }, [shoppingCartItems]);

  return (
    <>
      <ShoppingContext.Provider
        value={{
          formState,
          CoffeeList,
          paymentMethod,
          shoppingCartItems,
          addCartItem,
          setFormState,
          removeCoffee,
          paymentMethodChange,
          setShoppingCartItems,
          changeAmountOfCoffes
        }}
      >
        {children}
      </ShoppingContext.Provider>
    </>
  );
};

// HOOK
export function useCart() {
  return useContext(ShoppingContext);
};
