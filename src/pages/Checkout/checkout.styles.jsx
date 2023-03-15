/** @format */

import styled from 'styled-components';

export const FormStyle = styled.div`
  padding-left: 5%;
  label {
    display: block;
    font-weight: bold;
    padding-top: 5%;
    color: ${(props) => props.colors.textColor};
  }
`;

export const SendButton = styled.div`
  background-color: ${(props) => props.colors.solidButtonColor};
  border-radius: 25px;
  border: none;
  padding: 1rem 0 1rem 0;
  color: ${(props) => props.colors.solidButtonColorText};
  margin-left: 2vw;
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;
  // margin-bottom: 120%;
  width: 10%;
  text-align: center;
  margin-top: 2vw;
  margin-bottom: 2vw;
`;

export const HeaderStyle = styled.div`
  margin-left: 2vw;
  margin-top: 2vw;
  color: ${(props) => props.colors.textColor};
`;
