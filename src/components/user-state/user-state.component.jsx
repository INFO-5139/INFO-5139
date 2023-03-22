import { auth } from './../../api/firebaseConfig';
import { useDispatch } from 'react-redux';
import {
  setUserState,
  setDisplayName,
} from '../../redux/userState/userStateSlice';
// import { useState } from 'react';

const UserState = () => {
  const dispatch = useDispatch();
  //   const [displayName, setDisplayName] = useState();
  //   let displayName;

  auth.onAuthStateChanged((user) => {
    if (user) {
      //   console.log(user.displayName);
      dispatch(setDisplayName(true));
      dispatch(setUserState(true));
      //   console.log('From user-state-component ', user.displayName);
    } else {
      dispatch(setUserState(false));
    }
  });
};

export default UserState;
