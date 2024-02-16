import { MidiaButton } from './MidiaButton'
import { MidiaGroup } from './styles'

export function HeaderAndFooterMidiaGroup() {
  return (
    <MidiaGroup>
      <p>Criado por Erick Marques Cabral | Programador UI Designer</p>
      <MidiaButton midia='github' />
      <MidiaButton midia='figma' />
    </MidiaGroup>
  )
}