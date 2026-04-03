import { api } from '../../../global-api/axiosInstance';
import { ChatMessage } from '../types';

export const getMessages = async (currentUserId: string, partnerId: string): Promise<ChatMessage[]> => {
  // json-server nie filtruje po ?with=, pobieramy wszystkie i filtrujemy lokalnie
  const { data } = await api.get<ChatMessage[]>('/messages');
  return data.filter(
    (msg) =>
      (msg.senderId === currentUserId && msg.receiverId === partnerId) ||
      (msg.senderId === partnerId && msg.receiverId === currentUserId)
  );
};

export const sendMessageApi = async (message: Omit<ChatMessage, 'id'>): Promise<ChatMessage> => {
  const { data } = await api.post<ChatMessage>('/messages', message);
  return data;
};