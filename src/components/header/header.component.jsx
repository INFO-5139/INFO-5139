/** @format */

import React from 'react';
import {
  HeaderContainer,
  HeaderLeftPart,
  HeaderRightPart,
  LoginLink,
  LogoutButton,
  CartButton,
  StoreIcon,
  UserIcon,
  DisplayName,
} from './header.styles';
import { Icon } from '@iconify/react';
import Navigation from '../navigation/navigation.component';
import { useDispatch, useSelector } from 'react-redux';
import { updateIsActive } from '../../redux/cart/cart.reducer';
import { auth } from './../../api/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import ThemeToggle from '../theme-toggle/theme-toggle';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const themeColor = useSelector((state) => state.theme);

  const logout = async () => {
    console.log('Here is the user before auth.signout: ', auth.currentUser);

    // sign user out
    try {
      await auth.signOut();
      navigate('/login');
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <HeaderContainer colors={themeColor}>
      <HeaderLeftPart>
        <StoreIcon colors={themeColor} />
        <Navigation />
      </HeaderLeftPart>
      <HeaderRightPart>
        {auth.currentUser === null && (
          <LoginLink
            to='login'
            colors={themeColor}
          >
            Log In
          </LoginLink>
        )}

        {auth.currentUser !== null && (
          <>
            <LogoutButton
              onClick={() => logout()}
              colors={themeColor}
            >
              Log out
            </LogoutButton>
            <DisplayName colors={themeColor}>
              <UserIcon colors={themeColor}></UserIcon>
              <p>{auth.currentUser.displayName}</p>
            </DisplayName>
          </>
        )}
        <CartButton
          colors={themeColor}
          onClick={(e) => {
            e.preventDefault();
            dispatch(updateIsActive(true));
          }}
        >
          <Icon
            icon='ic:round-shopping-cart'
            width={30}
            height={30}
            // color={themeColor.cartIconColor}
          />
        </CartButton>
        <ThemeToggle />
      </HeaderRightPart>
    </HeaderContainer>
  );
};

export default Header;
