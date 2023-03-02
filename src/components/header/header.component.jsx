/** @format */

import React from 'react';
import {
  HeaderContainer,
  HeaderLeftPart,
  HeaderRightPart,
  LoginLink,
  LogoutLink,
  CartButton,
  StoreIcon,
} from './header.styles';
import { Icon } from '@iconify/react';
import Navigation from '../navigation/navigation.component';
import { useDispatch } from 'react-redux';
import { updateIsActive } from '../../redux/cart/cart.reducer';


const Header = () => {
  const dispatch = useDispatch();
 

  return (
    <HeaderContainer>
      <HeaderLeftPart>
        <StoreIcon />
        <Navigation color='#333' />
      </HeaderLeftPart>
      <HeaderRightPart>
        <LogoutLink to='/'>Log out</LogoutLink>
        <LoginLink to='login'>Log In</LoginLink>
        <CartButton
          onClick={(e) => {
            e.preventDefault();
            dispatch(updateIsActive(true));
          }}
        >
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
