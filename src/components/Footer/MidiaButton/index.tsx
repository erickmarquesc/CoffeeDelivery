import { FigmaLogo, GithubLogo } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { SocialMidiaButton } from "./styles";

interface MidiaButtonProps {
  midia: "github" | "figma";
};

export function MidiaButton({ midia }: MidiaButtonProps) {
  return (
    <>
      {midia === "github" ?
        <a href="https://github.com/erickmarquesc/CoffeeDelivery">

          <SocialMidiaButton >
            <GithubLogo size={20} weight="fill" />
          </SocialMidiaButton>
        </a>
        :
        <a href="https://www.figma.com/file/wGsjJE5mSRMmC2SF24Fyno/Coffee-Delivery?node-id=0%3A1&t=NmJP0wmgYhkEmcMt-1">
          <SocialMidiaButton>
            <FigmaLogo size={20} weight="bold" />
          </SocialMidiaButton>
        </a>
      }
    </>
  );
};