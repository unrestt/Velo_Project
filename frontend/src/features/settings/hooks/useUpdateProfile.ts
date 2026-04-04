import { useMutation, useQueryClient } from '@tanstack/react-query';
import { settingsApi, UpdateProfileData } from '../api/settingsApi';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { setCredentials } from '../../auth/slices/authSlice';
import toast from 'react-hot-toast';

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  return useMutation({
    mutationFn: (data: UpdateProfileData) => {
      if (!user?.id) throw new Error('Użytkownik nie jest zalogowany');
      return settingsApi.updateProfile(user.id, data);
    },
    onSuccess: (updatedUser) => {
      toast.success('Pomyślnie zaktualizowano profil!');
      
      // Update Redux state immediately
      dispatch(setCredentials(updatedUser));
      
      // Invalidate specific user queries to force refetch on Profile Page
      queryClient.invalidateQueries({ queryKey: ['currentUser'] });
      if (user?.id) {
        queryClient.invalidateQueries({ queryKey: ['user', user.id.toString()] });
        queryClient.invalidateQueries({ queryKey: ['user', Number(user.id)] });
      }
    },
    onError: (error: any) => {
      const msg = error?.response?.data?.message || error.message || 'Wystąpił błąd podczas aktualizacji profilu.';
      toast.error(msg);
    },
  });
};

