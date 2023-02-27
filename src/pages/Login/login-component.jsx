/** @format */

import { Link } from 'react-router-dom';

import {
  LoginForm,
  Title,
  EmailField,
  PasswordField,
  LoginButton,
  NoAccount,
  SignUpLink,
} from './login.styles';

const Login = () => {
  return (
    <LoginForm>
      <Title>Login</Title>
      <EmailField>
        <label>
          Email Address:
          <input type='email' />
        </label>
      </EmailField>
      <PasswordField>
        <label>
          Password:
          <input type='password' />
        </label>
      </PasswordField>
      <LoginButton>Login</LoginButton>
      <NoAccount>Don't have an account?</NoAccount>
      <SignUpLink>
        <Link
          to='/signup'
          style={{
            textDecoration: 'none',
            color: '#388b37',
            fontWeight: 'bold',
          }}
        >
          Sign up
        </Link>
      </SignUpLink>
    </LoginForm>
  );
};

export default Login;
