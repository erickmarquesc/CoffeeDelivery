export function converterCoin(value:number) {
  return (
    value.toLocaleString('pt-br', { minimumFractionDigits: 2 })
  )
}