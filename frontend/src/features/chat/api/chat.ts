import { api } from '../../../global-api/axiosInstance';
import { ChatMessage } from '../types';

export const getMessages = async (currentUserId: string, partnerId: string): Promise<ChatMessage[]> => {
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

const CLOUDINARY_URL = import.meta.env.VITE_CLOUDINARY_URL;
const UPLOAD_PRESET = import.meta.env.VITE_UPLOAD_PRESET;

export const uploadImageToCloudinary = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', UPLOAD_PRESET);

  const response = await fetch(CLOUDINARY_URL, {
    method: 'POST',
    body: formData,
  });

  const data = await response.json();
  return data.secure_url;
};