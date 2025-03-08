import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';
import CoffeeIntro from '../../assets/image_coffee_intro.png';
import { LabelWithIcon } from '../../components/LabelWithIcon';
import { BannerContainer, Itens, Title } from './styles';
import { CoffeeList } from './CoffeeList';

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
            <LabelWithIcon
              label="Compra simples e segura"
              icon={<ShoppingCart color={theme.background} weight="fill" />}
              background={theme['primary-dark']}
            />
            <LabelWithIcon
              label="Embalagem mantém o café intacto"
              icon={<Package color={theme.background} weight="fill" />}
              background={theme['base-text']}
            />
            <LabelWithIcon
              label="Entrega rápida e rastreada"
              icon={<Timer color={theme.background} weight="fill" />}
              background={theme.primary}
            />
            <LabelWithIcon
              label="O café chega fresquinho até você"
              icon={<Coffee color={theme.background} weight="fill" />}
              background={theme.secondary}
            />
          </Itens>
        </div>
        <img src={CoffeeIntro} alt="" />
      </BannerContainer>
      <CoffeeList />
    </>
  );
};
