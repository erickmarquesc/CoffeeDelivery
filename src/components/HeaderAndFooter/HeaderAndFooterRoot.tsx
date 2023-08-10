import { ReactNode } from "react";
import { Container, Content } from "../Containers/containers";

interface IHeaderAndFooterRootProps {
  children: ReactNode;
  type: "header" | "footer";
}

export function HeaderAndFooterRoot({ children, type }: IHeaderAndFooterRootProps) {
  return (
    <Container variant="primary" as={type}>
      <Content variant="secondary">
        {children}
      </Content>
    </Container>
  )
}