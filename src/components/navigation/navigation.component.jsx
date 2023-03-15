/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import { NavigationContainer, NavigationListItem } from './navigation.styles';
import { useSelector } from 'react-redux';

const Navigation = ({ align }) => {
  const themeColor = useSelector((state) => state.theme);
  return (
    <nav>
      <NavigationContainer align={align}>
        <NavigationListItem color={themeColor}>
          <Link to='/'>Home</Link>
        </NavigationListItem>
        <NavigationListItem color={themeColor}>
          <Link to='/shop'>Shop</Link>
        </NavigationListItem>
        <NavigationListItem color={themeColor}>
          <Link to='/contact'>Contact</Link>
        </NavigationListItem>
        <NavigationListItem color={themeColor}>
          <Link to='/about'>About</Link>
        </NavigationListItem>
        <NavigationListItem color={themeColor}>
          <Link to='/account'>Account</Link>
        </NavigationListItem>
      </NavigationContainer>
    </nav>
  );
};

export default Navigation;
