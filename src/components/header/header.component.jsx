/** @format */

import React, { useState, useEffect } from 'react';
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
  const [displayName, setDisplayName] = useState();
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const themeColor = useSelector((state) => state.theme);

  // console.log('first load from header: ', auth.currentUser);

  // let userLoggedIn;

  auth.onAuthStateChanged((user) => {
    if (user) {
      setUserLoggedIn(true);
      // userLoggedIn = true;
      setDisplayName(auth.currentUser.displayName);
      console.log(displayName);
    }
  });

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
        {userLoggedIn === false && (
          <LoginLink
            to='login'
            colors={themeColor}
          >
            Log In
          </LoginLink>
        )}

        {userLoggedIn !== true && (
          <>
            <LogoutButton
              onClick={() => logout()}
              colors={themeColor}
            >
              Log out
            </LogoutButton>
            <DisplayName colors={themeColor}>
              <UserIcon colors={themeColor}></UserIcon>
              <p>{displayName}</p>
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
          />
        </CartButton>
        <ThemeToggle />
      </HeaderRightPart>
    </HeaderContainer>
  );
};

export default Header;
