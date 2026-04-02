import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getMessages, sendMessageApi } from '../api/chat';
import type { ChatMessage } from '../slices/chatSlice';

export const useMessages = (currentUserId: string, partnerId: string) => {
  const queryClient = useQueryClient();

  // 1. Pobieranie danych - React Query to jedyne źródło prawdy
  const { data: messages = [], isLoading, isError } = useQuery({
    queryKey: ['messages', partnerId], // Klucz zależny od rozmówcy
    queryFn: getMessages,
    select: (allMessages) =>
      allMessages.filter(msg =>
        (msg.senderId === currentUserId && msg.receiverId === partnerId) ||
        (msg.senderId === partnerId && msg.receiverId === currentUserId)
      ),
    refetchInterval: 1000,
  });

  // 2. Mutacja z Optimistic Update
  const sendMessageMutation = useMutation({
    mutationFn: (content: string) => sendMessageApi({
      senderId: currentUserId,
      receiverId: partnerId,
      content,
      timestamp: new Date().toISOString()
    }),
    // Opcjonalnie: aktualizacja cache'u przed odpowiedzią z serwera
    onMutate: async (newContent) => {
      await queryClient.cancelQueries({ queryKey: ['messages', partnerId] });
      const previousMessages = queryClient.getQueryData<ChatMessage[]>(['messages', partnerId]);

      // Tu można by dodać tymczasową wiadomość do cache, 
      // ale przy pollingu 1s invalidateQueries zazwyczaj wystarcza.

      return { previousMessages };
    },
    onSuccess: () => {
      // Unieważniamy cache, aby pobrać "prawdziwe" dane z ID z bazy
      queryClient.invalidateQueries({ queryKey: ['messages', partnerId] });
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