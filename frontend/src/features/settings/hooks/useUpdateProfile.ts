import { useMutation, useQueryClient } from '@tanstack/react-query';
import { settingsApi, UpdateProfileData } from '../api/settingsApi';
import { useAppSelector } from '../../../store/hooks';
import toast from 'react-hot-toast';

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  const { user } = useAppSelector((state) => state.auth);

  return useMutation({
    mutationFn: (data: UpdateProfileData) => {
      if (!user?.id) throw new Error('Użytkownik nie jest zalogowany');
      return settingsApi.updateProfile(user.id, data);
    },
    onSuccess: () => {
      toast.success('Pomyślnie zaktualizowano profil!');
      queryClient.invalidateQueries({ queryKey: ['currentUser'] });
    },
    onError: (error: any) => {
      const msg = error?.response?.data?.message || error.message || 'Wystąpił błąd podczas aktualizacji profilu.';
      toast.error(msg);
    },
  });
};

