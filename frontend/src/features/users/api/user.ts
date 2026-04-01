import { api } from '../../../global-api/axiosInstance';
import type {User} from '../types/index';

export const getUsers = async (): Promise<User[]> => {
  const { data } = await api.get<User[]>('/users');
  return data;
};