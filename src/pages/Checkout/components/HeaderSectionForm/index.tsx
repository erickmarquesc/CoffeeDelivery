import { ReactNode } from "react";
import { HeaderSectionContainer } from "./styles";

interface IHeaderSectionForm {
  title: string,
  description: string,
  icon: ReactNode,
  colorIcon?: "purple" | "yellow-dark"
}

export function HeaderSectionForm({
  icon,
  title,
  description,
  colorIcon = 'yellow-dark'
}: IHeaderSectionForm) {
  return (
    <HeaderSectionContainer colorIcon={colorIcon}>
      {icon}
      <div>
        <h3 className="title">{title}</h3>
        <p className="description">
          {description}
        </p>
      </div>
    </HeaderSectionContainer>
  )
}