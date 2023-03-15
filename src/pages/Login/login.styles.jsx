/** @format */

import styled from 'styled-components';

export const LoginForm = styled.form`
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

export const TogglePasswordVisibility = styled.button`
  display: flex;
  padding: 0.4rem 0.5rem 0.1rem 0.5rem;
  font-size: 2rem;
  color: ${(props) => props.colors.passwordVisibilityToggle};
  background-color: transparent;
  border-radius: 25px;
  border: none;
  margin: -1rem 0 0 auto;
`;

export const EnterPassword = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LoginEmailButton = styled.button`
  background-color: ${(props) => props.colors.solidButtonColor};
  border-radius: 25px;
  border: none;
  padding: 0.8rem 5rem 0.8rem 5rem;
  color: ${(props) => props.colors.solidButtonColorText};
  font-size: 18px;
`;

export const LoginGoogleButton = styled.button`
  background-color: ${(props) => props.colors.solidButtonColor};
  border-radius: 25px;
  border: none;
  padding: 0.8rem 1.5rem 0.8rem 1.5rem;
  color: ${(props) => props.colors.solidButtonColorText};
  font-size: 18px;
  margin 2rem 0 0 0;
`;

export const NoAccount = styled.div`
  color: ${(props) => props.colors.textColor};
  font-weight: bold;
  margin-top: 3rem;
`;

export const SignUpLink = styled.div`
  margin: 0.5rem 0 2rem 0;
  text-decoration: none;
`;
