/** @format */

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaLeaf } from 'react-icons/fa';
import { RxAvatar } from 'react-icons/rx';

export const HeaderContainer = styled.header`
  transition: all 0.3s;
  width: 100%;
  background-color: ${(props) => props.colors.backdropColor};
  padding: 23px 53px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLeftPart = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderRightPart = styled.div`
  display: flex;
  align-items: center;
`;

export const CartButton = styled.button`
  transition: all 0.3s;
  color: ${(props) => props.colors.cartIconColor};
  background-color: transparent;
  cursor: pointer;
  border: none;
`;

export const LoginLink = styled(Link)`
  background-color: transparent;
  border: 3px solid ${(props) => props.colors.solidButtonColor};
  border-radius: 40px;
  padding: 6px 65px 10px 65px;
  font-size: 24px;
  color: ${(props) => props.colors.textHighlight};
  cursor: pointer;
  transition: all 0.3s;
  margin-right: 1.1rem;
  white-space: nowrap;
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props.colors.solidButtonColor};
    color: ${(props) => props.colors.solidButtonColorText};
  }
`;

export const LogoutButton = styled.button`
  background-color: transparent;
  border: 3px solid ${(props) => props.colors.solidButtonColor};
  border-radius: 40px;
  padding: 6px 50px 10px 50px;
  font-size: 24px;
  color: ${(props) => props.colors.textHighlight};
  cursor: pointer;
  transition: all 0.3s;
  margin-right: 1.1rem;
  white-space: nowrap;
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props.colors.solidButtonColor};
    color: ${(props) => props.colors.solidButtonColorText};
  }
`;

export const StoreIcon = styled(FaLeaf)`
  transition: all 0.3s;
  color: ${(props) => props.colors.solidButtonColor};
  height: 2.5rem;
  width: 2.5rem;
  margin-right: 2.4rem;
`;

export const UserIcon = styled(RxAvatar)`
  transition: all 0.3s;
  font-size: 2em;
  color: ${(props) => props.colors.storeIconColor};
  margin: 1rem 1rem 0 0;
`;

export const DisplayName = styled.div`
  transition: all 0.3s;
  color: ${(props) => props.colors.textColor};
`;
