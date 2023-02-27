/** @format */

import React from 'react';
import {
  HeaderContainer,
  HeaderLeftPart,
  HeaderRightPart,
  LogInButton,
  CartButton,
  ButtonLink,
} from './header.styles';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import Navigation from '../navigation/navigation.component';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeftPart>
        <img
          src=''
          alt='Logo'
          style={{ marginRight: '60px' }}
        />
        <Navigation color='#333' />
      </HeaderLeftPart>
      <HeaderRightPart>
        <LogInButton>
          <ButtonLink>
            {/* //! TODO: fix padding on link within button */}
            <Link
              style={{
                textDecoration: 'none',
              }}
              to='/login'
            >
              Log In
            </Link>
          </ButtonLink>
        </LogInButton>
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
