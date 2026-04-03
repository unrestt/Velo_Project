import { useMutation } from '@tanstack/react-query';
import { settingsApi, UpdatePasswordData } from '../api/settingsApi';
import { useAppSelector } from '../../../store/hooks';
import toast from 'react-hot-toast';

export const useUpdatePassword = () => {
    const { user } = useAppSelector((state) => state.auth);

    return useMutation({
        mutationFn: (data: UpdatePasswordData) => {
            if (!user?.id) throw new Error('Użytkownik nie jest zalogowany');
            return settingsApi.updatePassword(user.id, data);
        },
        onSuccess: () => {
            toast.success('Hasło zostało pomyślnie zmienione!');
        },
        onError: (error: any) => {
            const msg = error?.response?.data?.message || error.message || 'Wystąpił błąd podczas zmiany hasła.';
            toast.error(msg);
        },
    });
};

