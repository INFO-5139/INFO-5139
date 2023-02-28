/** @format */

import React from 'react';
import {
  HeaderContainer,
  HeaderLeftPart,
  HeaderRightPart,
  NavbarLink,
  CartButton,
  StoreIcon,
} from './header.styles';
import { Icon } from '@iconify/react';
import Navigation from '../navigation/navigation.component';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeftPart>
        <StoreIcon />
        <Navigation color='#333' />
      </HeaderLeftPart>
      <HeaderRightPart>
        <NavbarLink to='login'>Log In</NavbarLink>
        <CartButton>
          <Icon
            icon='ic:round-shopping-cart'
            width={30}
            height={30}
          />
        </CartButton>
      </HeaderRightPart>
    </HeaderContainer>
  );
};

export default Header;
