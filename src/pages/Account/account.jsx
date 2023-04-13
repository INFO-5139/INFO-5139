import { auth } from './../../api/firebaseConfig';
import { PrimaryButton } from './account-styles';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
const Account = () => {
  const themeColor = useSelector((state) => state.theme);
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
  return (
    <div>
      <PrimaryButton
        colors={themeColor}
        onClick={DeleteUser}
      >
        Delete Account
      </PrimaryButton>
    </div>
  );
};

export default Account;
