import Logo from '@/assets/logo.png';
import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';
import { ButtonCart, HeaderContainer, LocationButton } from './styles';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';
import { ICartItem } from '../CoffeeCard';

export const Header = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { value } = useLocalStorage<ICartItem[]>('coffee-delivery-cart');

  return (
    <HeaderContainer>
      <img
        src={Logo}
        alt="Logo com um copo de café e está escrito 'Coffee Delivery'"
      />
      <div>
        <LocationButton>
          <MapPin size={22} color={theme['secondary']} weight="fill" />
          Londrina, PR
        </LocationButton>
        <ButtonCart onClick={() => navigate('checkout')}>
          {value.length > 0 && <span>{value.length}</span>}
          <ShoppingCart size={22} color={theme['primary-dark']} weight="fill" />
        </ButtonCart>
      </div>
    </HeaderContainer>
  );
};
