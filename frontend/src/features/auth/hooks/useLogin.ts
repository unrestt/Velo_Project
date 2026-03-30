import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { loginUser } from '../api/login';
import { setCredentials } from '../slices/authSlice';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (user) => {
      // 1. Zapisujemy usera w globalnym stanie Redux
      dispatch(setCredentials(user));

      // 3. Przekierowujemy na dashboard
      navigate('/dashboard');
    },
    onError: (error) => {
      alert(error.message);
    }
  });
};