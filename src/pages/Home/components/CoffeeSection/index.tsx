import { ShoppingContext } from "../../../../contexts/ShoppingCartContext";
import { CoffeeSectionConteiner } from "./styles";
import { CoffeeCard } from "../CoffeeCard";
import { useContext } from "react";

export function CoffeeList() {

  const { CoffeeList } = useContext(ShoppingContext);

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
  );
};