import Logo from '@/assets/logo.png';
import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';
import { ButtonCart, HeaderContainer, LocationButton } from './styles';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export const Header = () => {
  const theme = useTheme();
  const { value } = useLocalStorage('coffee-delivery-cart');

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
        <ButtonCart>
          {value.length > 0 && <span>{value.length}</span>}
          <ShoppingCart size={22} color={theme['primary-dark']} weight="fill" />
        </ButtonCart>
      </div>
    </HeaderContainer>
  );
};
