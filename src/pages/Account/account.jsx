import { auth } from './../../api/firebaseConfig';
import { PrimaryButton, SubmitButton, FormStyle } from './account-styles';
import React, { useRef } from 'react';

import { useSelector } from 'react-redux';
const Account = () => {
  const themeColor = useSelector((state) => state.theme);
  const form = useRef();
  const DeleteUser = () => {
    const user = auth.currentUser;
    user
      .delete()
      .then(() => {
        // User deleted.
        console.log('User Account Deleted Successful');
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };

  const signUp = () => {
    console.log("Signed up for emails!")
  }

  return (
    <><div>
      <PrimaryButton
        colors={themeColor}
        onClick={DeleteUser}
      >
        Delete Account
      </PrimaryButton>
      <FormStyle colors = {themeColor}>
      <h1>Be the first to know!</h1>
      <p>Sign up to our email listing to know about
        <br></br>Up coming deals, new items and more!</p>
      <form
      ref={form}
      onSubmit={signUp}
    >

        <input
          type='text'
          name='email' />
      </form>
      </FormStyle>
      <SubmitButton
        colors={themeColor}
      >Sign up!</SubmitButton>
    </div>
    </>
  );
};

export default Account;
