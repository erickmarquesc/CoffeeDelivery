import { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { CoffeeList } from '../utils/coffeeListAPI'
import { toast } from 'react-toastify'

type PaymentMethods =
  | 'Cartão de crédito'
  | 'Cartão de débito'
  | 'Dinheiro'

export const ShoppingContext = createContext<ShoppingContextProps>({} as ShoppingContextProps)
export function ShoppingCartContextProvider({ children }: ShoppingCartContextProps) {
  const [formState, setFormState] = useState<FormContextProps | {}>({})

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethods>('Dinheiro')

  const [ShoppingCartContextState, dispatch] = useReducer((state: CartItemProps[], action: any): CartItemProps[] => {
    switch (action.type) {
      case 'ADD_ITEM':
        if (action.payload.ItemSelected.quantity === 0) {
          toast.error('Selecione pelo menos um item', { position: 'top-right' })
          return state
        }

        const productExists = state.find(
          (coffe) => coffe.id === action.payload.ItemSelected.id
        )

        if (productExists) {
          toast.error(
            'Item já adicionado ao carrinho, atualize a quantidade na compra!',
            { position: 'top-right' }
          )
          return state
        }

        toast.success('Produto adicionado ao carrinho com sucesso!', {
          position: 'top-right'
        })

        return [...state, action.payload.ItemSelected]

      case 'REMOVE_ITEM':
        return action.payload.newCart

      case 'AMOUNT_ITEM':
        return action.payload.items

      case 'LOCAL_STORAGE':
        return action.payload.shoppingCartLocalStorage

      default:
        return state
    }
  }, [])

  function addCartItem(ItemSelected: CartItemProps) {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        ItemSelected
      }
    })
  }

  function changeAmountOfCoffes(id: number, quantity: number) {
    const items = ShoppingCartContextState.map((coffee) => {
      if (coffee.id === id) {
        return {
          ...coffee,
          quantity
        }
      }

      return coffee
    })

    dispatch({
      type: 'AMOUNT_ITEM',
      payload: {
        items
      }
    })
  }

  function removeCoffee(id: number) {
    const newCart = ShoppingCartContextState.filter((coffee) => coffee.id !== id)

    dispatch({
      type: 'REMOVE_ITEM',
      payload: {
        newCart
      }
    })
  }

  function paymentMethodChange(method: PaymentMethods) {
    setPaymentMethod(method)
  }

  useEffect(() => {
    const storedData = localStorage.getItem('CoffeDetails 1.0.0') ?? '[]'
    const shoppingCartLocalStorage = JSON.parse(storedData)

    if (shoppingCartLocalStorage.length > 0) {
      dispatch({
        type: 'LOCAL_STORAGE',
        payload: {
          shoppingCartLocalStorage
        }
      })
    }
  }, [])

  useEffect(() => {
    const newStorageCoffees = JSON.stringify(ShoppingCartContextState)
    const expiry = Date.now() + 20 * 60 * 1000 // Expira em 20 minutos
    localStorage.setItem('CoffeDetails 1.0.0', newStorageCoffees)
  }, [ShoppingCartContextState])


  return (
    <>
      <ShoppingContext.Provider
        value={{
          formState,
          CoffeeList,
          paymentMethod,
          ShoppingCartContextState,
          addCartItem,
          setFormState,
          removeCoffee,
          paymentMethodChange,
          changeAmountOfCoffes
        }}
      >
        {children}
      </ShoppingContext.Provider>
    </>
  )
}

// HOOK
export function useCart() {
  return useContext(ShoppingContext)
}
