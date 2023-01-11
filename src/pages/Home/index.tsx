import { Container, Content } from "../../components/Containers/containers";
import { CoffeeList } from "./components/CoffeeSection";
import { HeroSection } from "./components/HeroSection";
import { TitleCoffeeSection } from "./styles";

export function Home() {
  return (
    <Container variant="secondary">
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
