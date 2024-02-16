import { CounterButton, CounterWrapper } from './styles'
import { Minus, Plus } from 'phosphor-react'

interface ICounterProps {
  handleDecreaseQuantity: () => void,
  handleIncreaseQuantity: () => void,
  quantity: number,
}
export function Counter({ handleDecreaseQuantity, handleIncreaseQuantity, quantity }: ICounterProps) {
  return (
    <CounterWrapper>
      <CounterButton onClick={handleDecreaseQuantity} type='button'>
        <Minus weight="bold" />
      </CounterButton>
      <p className="itemsInCart">{quantity}</p>
      <CounterButton onClick={handleIncreaseQuantity} type='button'>
        <Plus weight="bold" />
      </CounterButton>
    </CounterWrapper>
  )
}