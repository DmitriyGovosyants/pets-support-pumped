import { useSelector } from 'react-redux';
import { selectCurrentUser, getIsLoggedIn } from 'redux/authSlice';
import { useGetCurrentQuery } from 'redux/authApi';
import { unwrapResult } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const GetCurrentUser = async () => {
  const token = useSelector(selectCurrentUser);
  const isAuthorized = useSelector(getIsLoggedIn);
  const data = useGetCurrentQuery('', {
    skip: token === null || isAuthorized === true,
  });

  try {
    unwrapResult(data);
  } catch (error) {
    if (error.status === 498) {
      window.localStorage.setItem('persist:auth', null);
      window.location.reload();
    }
    if (error.originalStatus === 404) {
      toast.error('Resourses not found');
    }
  }
};
