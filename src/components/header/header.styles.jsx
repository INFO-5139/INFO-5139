import styled from "styled-components";

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

export const LogInButton = styled.button`
  background-color: transparent;
  border: 3px solid #388b37;
  border-radius: 40px;
  padding: 8px 65px;
  font-size: 24px;
  color: #388b37;
  cursor: pointer;
  transition: all 0.3s;
  margin-right: 30px;

  &:hover {
    background-color: #388b37;
    color: #fff;
  }
`;

export const CartButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
`;
