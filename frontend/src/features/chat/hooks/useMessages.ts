import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useAppSelector } from '../../../store/hooks';
import { getMessages, sendMessageApi } from '../api/chat';

export const useMessages = (currentUserId: string) => {
  const queryClient = useQueryClient();

  const activePartnerId = useAppSelector((state) => state.chat.activePartnerId);

  const query = useQuery({
    queryKey: ['messages', currentUserId, activePartnerId],
    queryFn: () => getMessages(currentUserId, activePartnerId!),
    enabled: !!activePartnerId && !!currentUserId,
    refetchInterval: 1000,
  });

  const sendMessageMutation = useMutation({
    mutationFn: ({ content, imageUrl }: { content: string; imageUrl?: string }) => {
      if (!activePartnerId || !currentUserId) throw new Error("Brak danych sesji");
      return sendMessageApi({
        senderId: currentUserId,
        receiverId: activePartnerId,
        content,
        imageUrl,
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
    activePartnerId,
    sendMessage: sendMessageMutation.mutate,
    isSending: sendMessageMutation.isPending
  };
};