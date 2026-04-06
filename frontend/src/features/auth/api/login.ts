import { api } from '../../../global-api/axiosInstance';
import type { User } from '../types/index';

export const loginUser = async (credentials: { username: string; password: string }): Promise<User> => {
  const { data } = await api.get<User[]>(
    `/users?username=${credentials.username}&password=${credentials.password}`
  );

  if (data.length === 0) {
    throw new Error('Nieprawidłowy login lub hasło');
  }

  return data[0];
};