/** @format */

import {
  Title,
  ErrorMessageField,
  SignUpForm,
  EmailField,
  PasswordField,
  ReenterPasswordField,
  SignUpButton,
} from './signup.styles';
import { auth } from './../../api//firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

const SignUp = () => {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [reenteredPassword, setReenteredPassword] = useState('');
  const [errorMessages, setErrorMessages] = useState([]);

  const createAccountHandler = (e) => {
    e.preventDefault();

    const validate = [];
    setErrorMessages([]);

    const emailFormat = new RegExp(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    );

    const passwordStrength = new RegExp(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
    );
    if (!emailAddress.match(emailFormat)) {
      validate.push('Please enter a valid email address');
    }
    if (!password.match(passwordStrength)) {
      validate.push(
        'Please enter a valid password that is at least 8 characters long, with an upper and lowercase letter, and a number.'
      );
    }
    if (password !== reenteredPassword) {
      validate.push('Please enter matching passwords.');
    }

    setErrorMessages(validate);
    if (validate.length === 0) {
      setErrorMessages([]);

      createUserWithEmailAndPassword(auth, emailAddress, password).then(
        (userCredentials) => {}
      );
    }
    // setErrorMessages(validate);
  };

  return (
    <SignUpForm>
      <Title>Sign Up</Title>
      {errorMessages.length > 0 && (
        <ErrorMessageField>
          Invalid Data:
          <ul>
            {errorMessages.map((error, index) => {
              return <li key={index}>{error}</li>;
            })}
          </ul>
        </ErrorMessageField>
      )}
      <EmailField>
        <label>
          Email Address:
          <input
            type='email'
            onChange={(e) => {
              setEmailAddress(e.target.value);
            }}
          />
        </label>
      </EmailField>
      <PasswordField>
        <label>
          Password:
          <input
            type='password'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
      </PasswordField>
      <ReenterPasswordField>
        <label>
          Re-enter Password:
          <input
            type='password'
            onChange={(e) => {
              setReenteredPassword(e.target.value);
            }}
          />
        </label>
      </ReenterPasswordField>
      <SignUpButton onClick={(e) => createAccountHandler(e)}>
        Create Account
      </SignUpButton>
    </SignUpForm>
  );
};

export default SignUp;
