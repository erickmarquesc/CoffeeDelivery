import { HomeElements } from './HomeElements'

export function Home() {
  return (
    <HomeElements.Root>
      <HomeElements.Hero />
      <HomeElements.Title />
      <HomeElements.CoffeeList/>
    </HomeElements.Root>
  )
}
