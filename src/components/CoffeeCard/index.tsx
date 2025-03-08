import { ShoppingCartSimple } from '@phosphor-icons/react';
import { InputNumber } from '../InputNumber';
import { ButtonCart, CoffeeCardContainer, Tag, ValueCoffee } from './styles';
import { useTheme } from 'styled-components';

export interface ICoffeeCardProps {
  image: string;
  title: string;
  description: string;
  value: string;
}

export const CoffeeCard = ({
  image,
  title,
  description,
  value,
}: ICoffeeCardProps) => {
  const theme = useTheme();

  return (
    <CoffeeCardContainer>
      <img src={image} alt="" height="100px" width="100px" />
      <Tag>TRADICIONAL</Tag>
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        <ValueCoffee>
          <span>R$</span>
          {value}
        </ValueCoffee>
        <InputNumber />
        <ButtonCart>
          <ShoppingCartSimple size={20} weight="fill" color={theme.white} />
        </ButtonCart>
      </div>
    </CoffeeCardContainer>
  );
};
