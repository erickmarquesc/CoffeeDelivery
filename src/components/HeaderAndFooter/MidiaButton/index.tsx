import { FigmaLogo, GithubLogo } from "phosphor-react";
import { SocialMidiaButton } from "./styles";

interface MidiaButtonProps {
  midia: "github" | "figma";
};

export function MidiaButton({ midia }: MidiaButtonProps) {
  
  const gitHubURL = "https://github.com/erickmarquesc/CoffeeDelivery";
  const figmaURL = "https://www.figma.com/file/wGsjJE5mSRMmC2SF24Fyno/Coffee-Delivery?node-id=0%3A1&t=NmJP0wmgYhkEmcMt-1";
  
  return (
    <>
      {midia === "github" ?
        <a href={gitHubURL} target="_blank">
          <SocialMidiaButton >
            <GithubLogo size={20} weight="fill" />
          </SocialMidiaButton>
        </a>
        :
        <a href={figmaURL} target="_blank">
          <SocialMidiaButton>
            <FigmaLogo size={20} weight="bold" />
          </SocialMidiaButton>
        </a>
      }
    </>
  );
};