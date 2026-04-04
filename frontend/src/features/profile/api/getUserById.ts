import { api } from '../../../global-api/axiosInstance';
import type { User } from '../../users/types';

export const getUserById = async (id: number | string): Promise<User> => {
    const { data } = await api.get<User>(`/users/${id}`);
    return data;
};