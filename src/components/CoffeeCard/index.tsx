import { ShoppingCartSimple } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';
import { InputNumber } from '../InputNumber';
import { ButtonCart, CoffeeCardContainer, Tag, ValueCoffee } from './styles';
import { useState } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export interface ICoffeeCardProps {
  id: string;
  image: string;
  title: string;
  description: string;
  price: string;
}

interface ICartItem {
  id: string;
  name: string;
  price: string;
  amount: number;
}

export const CoffeeCard = ({
  id,
  image,
  title,
  description,
  price,
}: ICoffeeCardProps) => {
  const [amount, setAmout] = useState(0);
  const { updateLocalStorage } = useLocalStorage<ICartItem[]>(
    'coffee-delivery-cart'
  );
  const theme = useTheme();
  const item = {
    id,
    name: title,
    price,
    amount,
  };

  const handleClickAddCoffeeCart = () => {
    const cartItems = localStorage.getItem('coffee-delivery-cart') ?? '';

    if (cartItems) {
      const cartItemsArray: ICartItem[] = JSON.parse(
        localStorage.getItem('coffee-delivery-cart') ?? ''
      );

      const itemIndex = cartItemsArray.findIndex((item) => item.id === id);

      if (itemIndex != -1) {
        cartItemsArray[itemIndex].amount += amount;
      } else {
        cartItemsArray.push(item);
      }
      updateLocalStorage(cartItemsArray);
    } else {
      updateLocalStorage([item]);
    }
  };

  const handleClickAmount = (isAdd: boolean) => {
    if (isAdd) {
      setAmout(amount + 1);
    } else if (amount > 0) {
      setAmout(amount - 1);
    }
  };

  return (
    <CoffeeCardContainer>
      <img src={image} alt="" height="100px" width="100px" />
      <Tag>TRADICIONAL</Tag>
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        <ValueCoffee>
          <span>R$</span>
          {price}
        </ValueCoffee>
        <InputNumber amount={amount} handleClickAmount={handleClickAmount} />
        <ButtonCart onClick={handleClickAddCoffeeCart} disabled={amount === 0}>
          <ShoppingCartSimple size={22} weight="fill" color={theme.white} />
        </ButtonCart>
      </div>
    </CoffeeCardContainer>
  );
};
