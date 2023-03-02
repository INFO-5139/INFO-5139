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
  UserName,
} from './header.styles';
import { Icon } from '@iconify/react';
import Navigation from '../navigation/navigation.component';
import { useDispatch } from 'react-redux';
import { updateIsActive } from '../../redux/cart/cart.reducer';
import { auth } from './../../api/firebaseConfig'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 

  const logout = async () => {
    
    console.log('Here is the user before auth.signout: ', auth.currentUser)

    // sign user out
    try {
        await auth.signOut()
        console.log('here is the user after sign out: ', auth.currentUser)
        navigate('/login')  
    }
    catch (err) {
            console.log(err.message);
    }
  }
  
  return (
    <HeaderContainer>
      <HeaderLeftPart>
        <StoreIcon />
        <Navigation color='#333' />
      </HeaderLeftPart>
      <HeaderRightPart>      
    
        { auth.currentUser === null && 
            <LoginLink to='login'>Log In</LoginLink>
        }

        { auth.currentUser !== null &&
          <>
          <LogoutButton onClick={() => logout()}>Log out</LogoutButton>
            <UserIcon ></UserIcon>
          
          </>
        }
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
