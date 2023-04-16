/** @format */

import styled from "styled-components";

export const FormStyle = styled.div`
  color: ${(props) => props.colors.textColor};
  label {
    display: block;
    font-weight: bold;
  }
`;

export const ImageStyle = styled.div`
  overflow: hidden;
  max-width: 450px;
  box-shadow: -20px 20px 3px rgba(0, 0, 0, 0.25);
  content-align: center;
  margin: 0 auto;
`;

export const CTAImage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

export const GridMain = styled.div`
  display: grid;
  // place-items: center;
  grid-template-columns: 30% 30% 40%;
`;

export const LeftSide = styled.div`
  grid-area: Left;
  grid-column: 1;
  width: 80%;
  margin-left: 3rem;
`;

export const MiddleSide = styled.div`
  grid-area: middle;
  grid-column: 2;
  width: 80%;
`;

export const RightSide = styled.div`
  grid-area: Right;
  grid-column: 3;
  padding-bottom: 5%;
  p {
    padding-bottom: 20px;
    color: ${(props) => props.colors.textColor};
  }
  // padding-bottom: 20%;
`;

export const HeaderGrid = styled.div`
  grid-column: span 2;
  /*same rule as*/
  grid-column-start: span 2;
  grid-column-end: auto;
  display: flex;
  padding-top: 3%;
  padding-bottom: 3%;
  padding-left: 22vw;
  color: ${(props) => props.colors.textColor};
`;

export const SendButton = styled.div`
  background-color: ${(props) => props.colors.solidButtonColor};
  border-radius: 25px;
  border: none;
  padding: 0.8rem 0 0.8rem 0;
  color: ${(props) => props.colors.solidButtonColorText};
  margin-left: 6vw;
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;
  // margin-bottom: 120%;
  width: 50%;
  text-align: center;
`;

export const TextBox = styled.div`
  padding-top: 2%;
  padding-bottom: 10%;
  textarea {
    width: 100%;
    height: 200px;
  }
`;

export const InputStyle = styled.div`
  padding-bottom: 10%;
  input {
    width: 100%;
    padding: 0.3rem 0 0.3rem 0;
  }
`;
