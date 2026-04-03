import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useAppSelector } from '../../../store/hooks';
import { getMessages, sendMessageApi } from '../api/chat';

export const useMessages = (currentUserId: string) => {
  const queryClient = useQueryClient();

  // Pobieramy ID z Reduxa (to jest nasze JEDYNE źródło prawdy o aktywnym czacie)
  const activePartnerId = useAppSelector((state) => state.chat.activePartnerId);

  // 1. Pobieranie danych
  const query = useQuery({
    queryKey: ['messages', currentUserId, activePartnerId],
    queryFn: () => getMessages(currentUserId, activePartnerId!),
    enabled: !!activePartnerId && !!currentUserId,
    refetchInterval: 1000,
  });

  // 2. Wysyłanie wiadomości
  const sendMessageMutation = useMutation({
    mutationFn: (content: string) => {
      if (!activePartnerId || !currentUserId) throw new Error("Brak danych sesji");
      return sendMessageApi({
        senderId: currentUserId,
        receiverId: activePartnerId,
        content,
        timestamp: new Date().toISOString()
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['messages', activePartnerId] });
    }
  });

  return {
    messages: query.data ?? [],
    isLoading: query.isLoading,
    isError: query.isError,
    activePartnerId, // Zwracamy to, żeby komponent wiedział, kogo renderować
    sendMessage: sendMessageMutation.mutate,
    isSending: sendMessageMutation.isPending
  };
};