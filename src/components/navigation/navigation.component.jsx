/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { NavigationContainer, NavigationListItem } from "./navigation.styles";

const Navigation = ({ color, align }) => {
  return (
    <nav>
      <NavigationContainer align={align}>
        <NavigationListItem color={color}>
          <Link to="/">Home</Link>
        </NavigationListItem>
        <NavigationListItem color={color}>
          <Link to="/shop">Shop</Link>
        </NavigationListItem>
        <NavigationListItem color={color}>
          <Link to="/contact">Contact</Link>
        </NavigationListItem>
        <NavigationListItem color={color}>
          <Link to="/about">About</Link>
        </NavigationListItem>
      </NavigationContainer>
    </nav>
  );
};

export default Navigation;
