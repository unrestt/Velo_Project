import { api } from '../../../global-api/axiosInstance';
import type { User } from '../types/index';

export type RegisterCredentials = Omit<User, 'id'>; 

export const registerUser = async (credentials: RegisterCredentials): Promise<User> => {
  const { data } = await api.post<User>('/users', credentials);
  
  return data;
};