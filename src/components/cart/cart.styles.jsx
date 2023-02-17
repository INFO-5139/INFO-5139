import styled from "styled-components";

export const CartContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: #fff;
  transform: translate(-50%, -50%);
  width: 60%;
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
