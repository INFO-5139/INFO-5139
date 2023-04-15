import React from 'react';
import { FooterContainer, SocialsContainer } from './footer.styles';
import { Icon } from '@iconify/react';
import Navigation from '../navigation/navigation.component';
import { useSelector } from 'react-redux';

const Footer = () => {
  const themeColor = useSelector((state) => state.theme);
  return (
    <FooterContainer colors={themeColor}>
      <SocialsContainer colors={themeColor}>
        <a
          href='https://www.instagram.com'
          target='_blank'
        >
          <Icon
            icon='ph:instagram-logo-bold'
            width={36}
            height={36}
          />
        </a>
        <a
          href='https://www.facebook.com'
          target='_blank'
        >
          <Icon
            icon='ic:baseline-facebook'
            width={36}
            height={36}
          />
        </a>
        <a
          href='https://twitter.com/Fauxliage4Real'
          target='_blank'
        >
          <Icon
            icon='ant-design:twitter-outlined'
            width={36}
            height={36}
          />
        </a>
      </SocialsContainer>

      <Navigation align='center' />
    </FooterContainer>
  );
};

export default Footer;
