/** @format */

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaLeaf } from 'react-icons/fa';
import { RxAvatar } from "react-icons/rx";

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: #c2edbf;
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
  background-color: transparent;
  cursor: pointer;
  border: none;
`;

export const NavbarLink = styled(Link)`
  background-color: transparent;
  border: 3px solid #388b37;
  border-radius: 40px;
  padding: 6px 65px 10px 65px;
  font-size: 24px;
  color: #388b37;
  cursor: pointer;
  transition: all 0.3s;
  margin-right: 30px;
  white-space: nowrap;
  text-decoration: none;

  &:hover {
    background-color: #388b37;
    color: white;
  }
`;

export const LoginLink = styled(Link)`
  background-color: transparent;
  border: 3px solid #388b37;
  border-radius: 40px;
  padding: 6px 65px 10px 65px;
  font-size: 24px;
  color: #388b37;
  cursor: pointer;
  transition: all 0.3s;
  margin-right: 1.1rem;
  white-space: nowrap;
  text-decoration: none;

  &:hover {
    background-color: #388b37;
    color: white;
  }
`;

export const LogoutButton = styled.button`
  background-color: transparent;
  border: 3px solid #388b37;
  border-radius: 40px;
  padding: 6px 65px 10px 65px;
  font-size: 24px;
  color: #388b37;
  cursor: pointer;
  transition: all 0.3s;
  margin-right: 1.1rem;
  white-space: nowrap;
  text-decoration: none;

  &:hover {
    background-color: #388b37;
    color: white;
  }
`;

export const StoreIcon = styled(FaLeaf)`
  color: #388b37;
  height: 2.5rem;
  width: 2.5rem;
  margin-right: 2.4rem;
`;

export const UserIcon = styled(RxAvatar)`
// border: 1px solid black;
font-size: 2em;
color: #388b37;
margin: auto 1rem auto 0;

`

export const UserName = styled.div`
font-size: 0.5em;

`
