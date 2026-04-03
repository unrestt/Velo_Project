import { api } from '../../../global-api/axiosInstance';

export interface UpdateProfileData {
    username: string;
}

export interface UpdatePasswordData {
    currentPassword?: string;
    newPassword: string;
}

export const settingsApi = {
    updateProfile: async (userId: string | number, data: UpdateProfileData) => {
        const response = await api.patch(`/users/${userId}`, data);
        return response.data;
    },

    updatePassword: async (userId: string | number, data: UpdatePasswordData) => {
        // json-server nie waliduje obecnego hasła, po prostu aktualizujemy pole password
        const response = await api.patch(`/users/${userId}`, { password: data.newPassword });
        return response.data;
    },

    // uploadAvatar: async (userId: string | number, _file: File) => {
    //     // json-server nie obsługuje plików binarnych. 
    //     // Symulujemy zmianę avatara ustawiając przykładowy URL.
    //     const mockAvatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${userId}`;
    //     const response = await api.patch(`/users/${userId}`, { avatar: mockAvatarUrl });
    //     return response.data;
    // }
};

