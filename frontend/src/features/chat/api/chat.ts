import { api } from '../../../global-api/axiosInstance';
import type { ChatMessage } from '../slices/chatSlice';

export const getMessages = async (): Promise<ChatMessage[]> => {
  const { data } = await api.get<ChatMessage[]>('/messages');
  return data;
};

export const sendMessageApi = async (message: Omit<ChatMessage, 'id'>): Promise<ChatMessage> => {
  const { data } = await api.post<ChatMessage>('/messages', message);
  return data;
};
