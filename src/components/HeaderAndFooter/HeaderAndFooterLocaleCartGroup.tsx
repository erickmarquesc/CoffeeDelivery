import { ShoppingCartButton } from "../CartButton";
import { LocaleMap } from "../Locale";
import { LocaleCartGroup } from "./styles";

export function HeaderAndFooterLocaleCartGroup() {
  return (
    <LocaleCartGroup>
      <LocaleMap />
      <ShoppingCartButton />
    </LocaleCartGroup>
  )
}