import React from "react";
import {
  HeaderContainer,
  HeaderLeftPart,
  HeaderRightPart,
  LogInButton,
  CartButton,
} from "./header.styles";
import { Icon } from "@iconify/react";
import Navigation from "../navigation/navigation.component";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeftPart>
        <img src="" alt="Logo" style={{ marginRight: "60px" }} />
        <Navigation color="#333" />
      </HeaderLeftPart>
      <HeaderRightPart>
        <LogInButton>Log In</LogInButton>
        <CartButton>
          <Icon icon="ic:round-shopping-cart" width={30} height={30} />
        </CartButton>
      </HeaderRightPart>
    </HeaderContainer>
  );
};

export default Header;
