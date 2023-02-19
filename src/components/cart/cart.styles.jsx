import styled from "styled-components";

export const CartContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: #fff;
  transform: translate(-50%, -50%);
  width: 70%;
  padding: 40px;
`;

export const Overlay = styled.div`
  background-color: #000;
  opacity: 0.5;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

export const CartItemHeadings = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  span {
    font-size: 20px;
    &:nth-child(1) {
      width: 35%;
    }
    &:nth-child(2) {
      width: 25.5%;
    }
    &:nth-child(3) {
      width: 17.5%;
    }
  }
`;

export const TotalText = styled.p`
  font-weight: 700;
  font-size: 24px;

  span {
    color: #388b37;
  }
`;

export const CartBottomContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CartButton = styled.button`
  background-color: #388b37;
  border-radius: 30px;
  font-size: 22px;
  border: none;
  color: #fff;
  padding: 14px 40px;
  cursor: pointer;
`;
