import { auth } from './../../api/firebaseConfig';
import { useDispatch } from 'react-redux';
import { setUserState } from '../../redux/userState/userStateSlice';

const UserState = () => {
  const dispatch = useDispatch();

  auth.onAuthStateChanged((user) => {
    if (user) {
      dispatch(setUserState(true));
    } else {
      dispatch(setUserState(false));
    }
  });
};

export default UserState;
