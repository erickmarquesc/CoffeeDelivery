import { HeroSectionConteiner, ServicesHero, TitleHeroContent } from "./styles";
import { Package, Coffee, ShoppingCart, Timer } from "phosphor-react";
import marketingImg from "../../assets/Imagem.svg";

export function HeroSection() {
  return (
    <HeroSectionConteiner>
      <TitleHeroContent>
        <h1 className="title">
          Encontre o café perfeito para qualquer hora do dia
        </h1>
        <p className="subtitle">
          Com o Coffee Delivery você recebe seu café onde estiver, <br />
          a qualquer hora.
        </p>

        <ServicesHero>
          <section>
            <div className="left-column">
              <div className="cart icon">
                <ShoppingCart weight="fill" size={16} />
              </div>
              <p>Compra simples e segura</p>
            </div>

            <div className="left-column">
              <div className="timer icon">
                <Timer weight="fill" size={16} />
              </div>
              <p>Entrega rápida e rastreada</p>
            </div>
          </section>

          <section>
            <div className="right-column">
              <div className="package icon">
                <Package weight="fill" size={16} />
              </div>
              <p>Embalagem mantém o café intacto</p>
            </div>
            
            <div className="right-column">
              <div className="coffee icon">
                <Coffee weight="fill" size={16} />
              </div>
              <p>O café chega fresquinho até você</p>
            </div>
          </section>

        </ServicesHero>
      </TitleHeroContent>

      <img className="img" src={marketingImg} alt="" />
    </HeroSectionConteiner>
  );
};
