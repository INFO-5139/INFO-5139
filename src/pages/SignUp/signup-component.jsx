/** @format */

import {
  Title,
  ErrorMessageField,
  ErrorMessageTitle,
  SignUpForm,
  InputField,
  FieldWrapper,
  Reenter,
  TogglePasswordVisibility,
  SignUpButton,
} from './signup.styles';
import { auth } from './../../api//firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const SignUp = () => {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [reenteredPassword, setReenteredPassword] = useState('');
  const [errorMessages, setErrorMessages] = useState([]);
  const [showPasswords, setShowPasswords] = useState(false);
  const navigate = useNavigate();

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
      validate.push('Please enter a valid email address.');
    }
    if (!password.match(passwordStrength)) {
      validate.push(
        'Please enter a valid password that is at least 8 characters long, with an uppercase letter, lowercase letter, and a number.'
      );
    }
    if (password !== reenteredPassword) {
      validate.push('Please enter matching passwords.');
    }

    setErrorMessages(validate);
    if (validate.length === 0) {
      setErrorMessages([]);

      createUserWithEmailAndPassword(auth, emailAddress, password)
        .then(() => {
          window.alert('Account has been successfully created.');
          navigate('/login');
        })
        .catch((err) => {
          window.alert(err.message);
        });
    }
  };

  const showPasswordHandler = (e) => {
    e.preventDefault();
    setShowPasswords(showPasswords === true ? false : true);
  };

  return (
    <SignUpForm>
      <Title>Sign Up</Title>
      {errorMessages.length > 0 && (
        <ErrorMessageField>
          <ErrorMessageTitle>Invalid Data:</ErrorMessageTitle>
          <ul>
            {errorMessages.map((error, index) => {
              return <li key={index}>{error}</li>;
            })}
          </ul>
        </ErrorMessageField>
      )}
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
        <label>
          Password:
          <InputField
            type={showPasswords ? 'text' : 'password'}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <Reenter>
          Re-enter Password:
          <TogglePasswordVisibility
            onClick={showPasswordHandler}
            tabIndex='-1'
          >
            {showPasswords ? <AiFillEyeInvisible /> : <AiFillEye />}
          </TogglePasswordVisibility>
        </Reenter>
        <label>
          <InputField
            type={showPasswords ? 'text' : 'password'}
            onChange={(e) => {
              setReenteredPassword(e.target.value);
            }}
          />
        </label>
      </FieldWrapper>
      <SignUpButton onClick={(e) => createAccountHandler(e)}>
        Create Account
      </SignUpButton>
    </SignUpForm>
  );
};

export default SignUp;
