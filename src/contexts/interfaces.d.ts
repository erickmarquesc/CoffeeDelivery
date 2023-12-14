interface CartItemProps {
  id: number,
  name: string,
  img: string,
  value: number,
  quantity: number,
};

interface FormContextProps {
  complemento: string,
  bairro: string,
  cep: string | number,
  cidade: string,
  numero: string,
  rua: string,
  uf: string,
};

interface ShoppingContextProps {
  CoffeeList: {
    id: number,
    name: string,
    types: string[],
    description: string,
    img: string,
    value: number,
    quantity: number,
  }[]

  formState: FormContextProps | {}
  setFormState: React.Dispatch<React.SetStateAction<{} | FormContextProps>>
  ShoppingCartContextState: CartItemProps[]
  addCartItem: (state: CartItemProps) => void
  changeAmountOfCoffes: (id: number, quantity: number) => void
  removeCoffee: (id: number) => void
  paymentMethod: PaymentMethods
  paymentMethodChange: (method: PaymentMethods) => void
};

interface ShoppingCartContextProps {
  children: ReactNode,
};

interface CardItemProps {
  id: number,
  name: string,
  img: string,
  value: number,
  description: string,
  types: string[],
  quantity: number,
};

interface FormContextProps {
  complemento: string,
  bairro: string,
  cep: string | number,
  cidade: string,
  numero: string,
  rua: string,
  uf: string,
  paymentMethod: string,
};
