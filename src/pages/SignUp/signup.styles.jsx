/** @format */

import styled from 'styled-components';

export const ErrorMessageField = styled.div``;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
margin-top 3rem;
  margin-bottom: 3rem;
`;

export const EmailField = styled.div`
  input[type='email'] {
    width: 100%;
    padding: 0.3rem 0 0.3rem 0;
  }
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const PasswordField = styled.div`
  input[type='password'] {
    width: 100%;
    padding: 0.3rem 0 0.3rem 0;
    margin: 0 2.2rem 0 0;
  }
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const ReenterPasswordField = styled.div`
  input[type='password'] {
    width: 100%;
    padding: 0.3rem 0.3rem 0.3rem 0;
    margin-right: -40px;
  }
  font-weight: bold;
  margin-bottom: 2rem;
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
