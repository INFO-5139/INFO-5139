import React from "react";
import { FooterContainer, SocialsContainer } from "./footer.styles";
import { Icon } from "@iconify/react";
import Navigation from "../navigation/navigation.component";

const Footer = () => {
  return (
    <FooterContainer>
      <SocialsContainer>
        <a href="https://www.instagram.com" target="_blank">
          <Icon
            icon="ph:instagram-logo-bold"
            width={36}
            height={36}
            color="#388b37"
          />
        </a>
        <a href="https://www.facebook.com" target="_blank">
          <Icon
            icon="ic:baseline-facebook"
            width={36}
            height={36}
            color="#388b37"
          />
        </a>
        <a href="https://web.telegram.org/" target="_blank">
          <Icon
            icon="ic:baseline-telegram"
            width={36}
            height={36}
            color="#388b37"
          />
        </a>
      </SocialsContainer>

      <Navigation align="center" color="#388b37" />
    </FooterContainer>
  );
};

export default Footer;
