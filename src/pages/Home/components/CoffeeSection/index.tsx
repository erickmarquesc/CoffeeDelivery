import { useCart } from '../../../../contexts/ShoppingCartContext'
import { CoffeeSectionConteiner } from './styles'
import { CoffeeCard } from '../CoffeeCard'

export function CoffeeList() {

  const { CoffeeList } = useCart()

  return (
    <CoffeeSectionConteiner>
      
      {CoffeeList.map((coffee) => {
        return (
          <CoffeeCard
            key={coffee.id}
            id={coffee.id}
            name={coffee.name}
            img={coffee.img}
            description={coffee.description}
            types={coffee.types}
            value={coffee.value}
            quantity={coffee.quantity}
          />
        )
      })}

    </CoffeeSectionConteiner>
  )
}