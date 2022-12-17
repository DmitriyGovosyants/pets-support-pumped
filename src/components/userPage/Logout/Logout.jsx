import { useDispatch } from 'react-redux';
import { TbLogout } from 'react-icons/tb';
import { useLogOutMutation } from 'redux/authApi';
import { usersApi } from 'redux/usersApi';
import { noticesApi } from 'redux/noticesApi';
import { setCategory } from 'redux/categorySlice';
import { requestErrorPopUp } from '../../../helpers';
import { LogoutButton } from './Logout.styled';

export const Logout = () => {
  const [logout] = useLogOutMutation();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await logout();
      dispatch(usersApi.util.resetApiState());
      dispatch(noticesApi.util.resetApiState());
      dispatch(setCategory('Sell'));
      return;
    } catch (error) {
      requestErrorPopUp(error);
    }
  };

  return (
    <LogoutButton type="button" onClick={() => handleLogout()}>
      <TbLogout size={18} color="F59256" />
      <span>Log Out</span>
    </LogoutButton>
  );
};
