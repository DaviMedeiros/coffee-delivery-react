import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';
import CoffeeIntro from '../../assets/image_coffee_intro.png';
import { BannerContainer, ItemContainer, Itens, Title } from './styles';
import { useTheme } from 'styled-components';

export const Home = () => {
  const theme = useTheme();
  return (
    <>
      <BannerContainer>
        <div>
          <Title>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </Title>
          <Itens>
            <ItemContainer>
              <div>
                <ShoppingCart color={theme.background} weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </ItemContainer>
            <ItemContainer>
              <div>
                <Package color={theme.background} weight="fill" />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </ItemContainer>
            <ItemContainer>
              <div>
                <Timer color={theme.background} weight="fill" />
              </div>
              <span>Entrega rápida e rastreada</span>
            </ItemContainer>
            <ItemContainer>
              <div>
                <Coffee color={theme.background} weight="fill" />
              </div>
              <span>O café chega fresquinho até você</span>
            </ItemContainer>
          </Itens>
        </div>
        <img src={CoffeeIntro} alt="" />
      </BannerContainer>
    </>
  );
};
