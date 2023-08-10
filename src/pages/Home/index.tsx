import { Container, Content } from "../../components/Containers/containers";
import { CoffeeList } from "./components/CoffeeSection";
import { HeroSection } from "./components/HeroSection";
import { TitleCoffeeSection } from "./styles";

export function Home() {
  return (
    <Container variant="secondary" as="main">
      <Content variant="secondary">
        <div>

          <HeroSection />
          <TitleCoffeeSection>
            Nossos cafés
          </TitleCoffeeSection>
          <CoffeeList />

        </div>
      </Content>
    </Container>
  );
};
