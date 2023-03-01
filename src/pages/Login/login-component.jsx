/** @format */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './../../api/firebaseConfig';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import {
  LoginForm,
  Title,
  FieldWrapper,
  InputField,
  TogglePasswordVisibility,
  EnterPassword,
  LoginButton,
  NoAccount,
  SignUpLink,
} from './login.styles';

const Login = () => {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  // eslint-disable-next-line
  const [theUser, setTheUser] = useState('');
  const [showPasswords, setShowPasswords] = useState(false);

  const handleLogIn = async (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, emailAddress, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user) {
          console.log('login successful!');
        }
      })
      .catch((error) => {
        /* eslint-disable */
        const errorCode = error.code;
        const errorMessage = error.message;
        /* eslint-enable */
      });

    console.log('there is the user at the end of signiun: ', theUser);
  };

  // eslint-disable-next-line
  const logout = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        console.log('here is the user from logout: ', auth.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const showPasswordHandler = (e) => {
    e.preventDefault();
    setShowPasswords(showPasswords === true ? false : true);
  };

  return (
    <LoginForm>
      <Title>Login</Title>
      <FieldWrapper>
        <label>
          Email Address:
          <InputField
            type='email'
            onChange={(e) => {
              setEmailAddress(e.target.value);
            }}
          />
        </label>
      </FieldWrapper>
      <FieldWrapper>
        <EnterPassword>
          Password:
          <TogglePasswordVisibility
            onClick={showPasswordHandler}
            tabIndex='-1'
          >
            {showPasswords ? <AiFillEyeInvisible /> : <AiFillEye />}
          </TogglePasswordVisibility>
        </EnterPassword>
        <label>
          <InputField
            type={showPasswords ? 'text' : 'password'}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
      </FieldWrapper>
      <LoginButton onClick={handleLogIn}>Login</LoginButton>
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
