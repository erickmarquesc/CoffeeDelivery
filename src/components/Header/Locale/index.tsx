import { MapPin } from "phosphor-react";
import { Locale } from "../styles";

export function LocaleMap() {
  return (
    <Locale>
      <MapPin size={24} weight="fill" />
      <p>Rio de Janeiro, RJ</p>
    </Locale>
  );
};