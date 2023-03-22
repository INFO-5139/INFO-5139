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
import { auth } from './../../api/firebaseConfig';
import { updateIsActive } from '../../redux/cart/cart.reducer';
import { useNavigate } from 'react-router-dom';
import ThemeToggle from '../theme-toggle/theme-toggle';
import UserState from '../user-state/user-state.component';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [userDisplayName, setUserDisplayName] = useState();
  const themeColor = useSelector((state) => state.theme);
  const userLoggedIn = useSelector(
    (state) => state.userState.userLoggedIn
  );
  const displayName = useSelector(
    (state) => state.userState.DisplayName
  );
  let userDisplayName = displayName;

  console.log(userDisplayName);

  // useEffect(() => {
  //   // userDisplayName = displayName;
  //   console.log(displayName);
  //   // console.log(userDisplayName);
  // }, [displayName]);

  // console.log(dis);

  // setUserDisplayName(DisplayName);
  // console.log('from header-component', displayName);
  // const [displayName, setDisplayName] = useState();

  // setDisplayName(auth.currentUser.displayName);
  // console.log(displayName);

  const logout = async () => {
    console.log(
      'Here is the user before auth.signout: ',
      auth.currentUser
    );

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
      <UserState />
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

        {userLoggedIn !== false && (
          <>
            <LogoutButton
              onClick={() => logout()}
              colors={themeColor}
            >
              Log out
            </LogoutButton>
            <DisplayName colors={themeColor}>
              <UserIcon colors={themeColor}></UserIcon>
              {displayName !== false && (
                <p>{displayName !== false ? 'No go' : 'Go'}</p>
              )}
              {displayName === false && (
                <p>User info unable to load</p>
              )}
              {/* <p>{displayName}</p> */}
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
