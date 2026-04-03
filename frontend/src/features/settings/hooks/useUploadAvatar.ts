// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { settingsApi } from '../api/settingsApi';
// import { useAppSelector } from '../../../store/hooks';
// import toast from 'react-hot-toast';

// export const useUploadAvatar = () => {
//     const queryClient = useQueryClient();
//     const { user } = useAppSelector((state) => state.auth);

//     return useMutation({
//         mutationFn: (file: File) => {
//             if (!user?.id) throw new Error('Użytkownik nie jest zalogowany');
//             return settingsApi.uploadAvatar(user.id, file);
//         },
//         onSuccess: () => {
//             toast.success('Pomyślnie zaktualizowano avatar!');
//             queryClient.invalidateQueries({ queryKey: ['currentUser'] });
//         },
//         onError: (error: any) => {
//             const msg = error?.response?.data?.message || error.message || 'Wystąpił błąd podczas wgrywania avatara.';
//             toast.error(msg);
//         },
//     });
// };

