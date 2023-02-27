/** @format */

import styled from 'styled-components';

export const LoginForm = styled.form`
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
    padding: 0.3rem 1rem 0.3rem 1rem;
  }
  font-weight: bold;
  margin-bottom: 3rem;
`;

export const LoginButton = styled.button`
  background-color: #388b37;
  border-radius: 25px;
  border: none;
  padding: 0.8rem 5rem 0.8rem 5rem;
  color: #fff;
  font-size: 18px;
`;

export const NoAccount = styled.div`
  font-weight: bold;
  margin-top: 3rem;
`;

export const SignUpLink = styled.div`
  margin: 0.5rem 0 2rem 0;
  text-decoration: none;
`;
