import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { registerUser } from '../api/register';
import { setCredentials } from '../slices/authSlice';
import { useNavigate } from 'react-router-dom';

export const useRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: registerUser,
    onSuccess: (newUser) => {
      // Automatyczne logowanie po rejestracji
      dispatch(setCredentials(newUser));
      
      navigate('/dashboard');
    },
    onError: (error) => {
      // Obsługa błędów (np. użytkownik już istnieje)
      alert(error+ 'Błąd podczas rejestracji');
    }
  });
};