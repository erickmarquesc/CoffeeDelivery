import { ReactNode } from "react"
import { Container, Content } from "../../components/Containers/containers";
import { HomeContent } from "./styles";

interface IHomeRoot {
  children: ReactNode;
}

export function HomeRoot({ children }: IHomeRoot) {
  return (
    <Container variant="secondary" as="main">
      <HomeContent>
        {children}
      </HomeContent>
    </Container>
  )
}