import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getMessages, sendMessageApi } from '../api/chat';
import type { ChatMessage } from '../slices/chatSlice';

export const useMessages = (currentUserId: string, partnerId: string) => {
  const queryClient = useQueryClient();

  const { data: allMessages, isLoading, isError } = useQuery({
    queryKey: ['messages'],
    queryFn: getMessages,
    refetchInterval: 1000, // Polling co 1 sekundę
  });

  // Filtruj wiadomośći tylko dla danej pary rozmówców
  const messages = allMessages?.filter(msg => 
    (msg.senderId === currentUserId && msg.receiverId === partnerId) ||
    (msg.senderId === partnerId && msg.receiverId === currentUserId)
  ) || [];

  const sendMessageMutation = useMutation({
    mutationFn: (content: string) => sendMessageApi({
      senderId: currentUserId,
      receiverId: partnerId,
      content,
      timestamp: new Date().toISOString()
    }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['messages'] });
    }
  });

  return {
    messages,
    isLoading,
    isError,
    sendMessage: sendMessageMutation.mutate,
    isSending: sendMessageMutation.isPending
  };
};
