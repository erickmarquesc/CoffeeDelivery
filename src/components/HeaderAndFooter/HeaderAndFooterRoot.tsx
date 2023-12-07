import { ReactNode } from "react";
import { Container } from "../Containers/containers";
import { HeaderAndFooterRootContent } from "./styles";

interface IHeaderAndFooterRootProps {
  children: ReactNode;
  type: "header" | "footer";
}

export function HeaderAndFooterRoot({ children, type }: IHeaderAndFooterRootProps) {
  return (
    <Container variant="primary" as={type}>
      <HeaderAndFooterRootContent>
        {children}
      </HeaderAndFooterRootContent>
    </Container>
  )
}