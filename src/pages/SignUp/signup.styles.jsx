/** @format */

import styled from 'styled-components';

export const ErrorMessageField = styled.div`
  width: 60%;
  color: black;
  margin-bottom: 3rem;
  list-style-type: none;
`;

export const ErrorMessageTitle = styled.div`
  font-weight: bold;
  color: red;
`;

export const SignUpForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
margin-top 3rem;
  margin-bottom: 3rem;
`;

export const FieldWrapper = styled.div`
  width: 30%;
  font-weight: bold;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 0.3rem 0 0.3rem 0;
  margin-bottom: 2rem;
`;

export const Reenter = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TogglePasswordVisibility = styled.button`
  display: flex;
  padding: 0.4rem 0.5rem 0.1rem 0.5rem;
  font-size: 2rem;
  color: black;
  background-color: white;
  border-radius: 25px;
  border: none;
  margin: -1rem 0 0 auto;
  // tab-index: -1;
`;

export const SignUpButton = styled.button`
  background-color: #388b37;
  border-radius: 25px;
  border: none;
  padding: 0.8rem 2rem 0.8rem 2rem;
  margin-bottom: 2rem;
  color: #fff;
  font-size: 18px;
`;
