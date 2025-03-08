import { useTheme } from 'styled-components';
import Logo from '../../assets/logo.png';
import { Cart, HeaderContainer, LocationButton } from './styles';
import { MapPin, ShoppingCart } from '@phosphor-icons/react';

export const Header = () => {
  const theme = useTheme();
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
        <Cart>
          <ShoppingCart size={22} color={theme['primary-dark']} weight="fill" />
        </Cart>
      </div>
    </HeaderContainer>
  );
};
