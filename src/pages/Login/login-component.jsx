/** @format */

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { auth } from './../../api/firebaseConfig';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import {
  LoginForm,
  Title,
  FieldWrapper,
  InputField,
  TogglePasswordVisibility,
  EnterPassword,
  LoginEmailButton,
  LoginGoogleButton,
  NoAccount,
  SignUpLink,
} from './login.styles';
import { useSelector } from 'react-redux';

/**
 * Component that handles the login logic, and displays the login form.
 */
const Login = () => {
  const themeColor = useSelector((state) => state.theme);
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  // eslint-disable-next-line
  const [showPasswords, setShowPasswords] = useState(false);
  const provider = new GoogleAuthProvider();
  // initiating navigation hook
  const navigate = useNavigate();
  // local state for user logging in
  const [theUser, setTheUser] = useState('');

  /**
   * Function that handles authentication requests for email and password.
   * - Requires a valid email address.
   * - Requires a valid password.
   * - If email address or password is incorrect, non-verbose error message is displayed to the user.
   */
  const signInWithEmailHandler = async (e) => {
    e.preventDefault();
    // reset local state for any pre-exsiting users
    setTheUser('');

    // setPersistence(auth, browserLocalPersistence).then(() => {
    // return signInWithEmailAndPassword(auth, emailAddress, password)
    return signInWithEmailAndPassword(auth, emailAddress, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('User:', user);
        window.alert('Successfully signed in.');
        setTheUser(user);
      })
      .catch((err) => {
        if (err.code === 'auth/invalid-email') {
          window.alert(
            'Invalid email address. Please enter a valid email address.'
          );
          return;
        }
        if (err.code === 'auth/user-not-found') {
          window.alert('User not found. Please try again.');
          return;
        }
        if (err.code === 'auth/wrong-password') {
          window.alert('Wrong password. Please try again.');
          return;
        }
        console.log('Error Code:', err.code);
        console.log('Error Message:', err.message);
      });
  };

  /**
   * Function that handles authentication requests for Google accounts.
   * - Requires a valid Google email address.
   * - Requires a valid password.
   * - If email address or password is incorrect, access to Google account log in is denied..
   */
  const signInWithGoogleHandler = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setTheUser(user);
        console.log('Token:', token);
        console.log('User:', user);
      })
      .catch((err) => {
        const email = err.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(err);
        console.log('Error Code:', err.code);
        console.log('Error Message:', err.message);
        console.log('Email:', email);
        console.log('Credential:', credential);
      });
  };

  // navigate to shop when user logged in / clear fields.
  if (theUser !== '') {
    navigate('/shop');
    setTheUser('');
  }

  /**
   * Handler function for showing or hiding the password in the input field.
   */
  const showPasswordHandler = (e) => {
    e.preventDefault();
    setShowPasswords(showPasswords === true ? false : true);
  };

  return (
    <LoginForm>
      <Title colors={themeColor}>Login</Title>

      <FieldWrapper colors={themeColor}>
        <label>
          Email Address:
          <InputField
            type='email'
            value={emailAddress}
            onChange={(e) => {
              setEmailAddress(e.target.value);
            }}
          />
        </label>
      </FieldWrapper>
      <FieldWrapper colors={themeColor}>
        <EnterPassword>
          Password:
          <TogglePasswordVisibility
            colors={themeColor}
            onClick={showPasswordHandler}
            tabIndex='-1'
          >
            {showPasswords ? <AiFillEyeInvisible /> : <AiFillEye />}
          </TogglePasswordVisibility>
        </EnterPassword>
        <label>
          <InputField
            type={showPasswords ? 'text' : 'password'}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
      </FieldWrapper>
      <LoginEmailButton
        colors={themeColor}
        onClick={signInWithEmailHandler}
      >
        Login
      </LoginEmailButton>
      <LoginGoogleButton
        colors={themeColor}
        onClick={(e) => signInWithGoogleHandler(e)}
      >
        Sign in with Google
      </LoginGoogleButton>
      <NoAccount colors={themeColor}>Don't have an account?</NoAccount>
      <SignUpLink>
        <Link
          to='/signup'
          style={{
            textDecoration: 'none',
            color: themeColor.textHighlight,
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
