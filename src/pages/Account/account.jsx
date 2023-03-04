import { auth } from './../../api/firebaseConfig';
import { PrimaryButton } from './account-styles';
import React, { useState } from 'react';
const Account = () => {
    const DeleteUser = () => {
        const user = auth.currentUser;
        user
            .delete()
            .then(() => {
                // User deleted.
                console.log("User Account Deleted Successful");
            })
            .catch((error) => {
                // An error occurred
                // ...
            });
    }
    return(
    <div>
        <PrimaryButton onClick={DeleteUser}>Delete Account</PrimaryButton>
    </div>

    );
};

export default Account; 