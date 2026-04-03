import { useEffect } from 'react'; // Dodaj useEffect
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux'; // Dodaj dispatch
import { useAppSelector } from '../store/hooks';
import { useUsers } from '../features/users/hooks/useUsers';
import { useMessages } from '../features/chat/hooks/useMessages';
import { setActiveChat } from '../features/chat/slices/chatSlice'; // Importuj akcję
import { ChatHeader, MessageList, MessageInput } from '../features/chat/components';
export const ChatPage = () => {
  const { userId: partnerIdFromUrl } = useParams<{ userId: string }>();
  const dispatch = useDispatch();

  const { user: currentUser } = useAppSelector((state) => state.auth);
  const { data: users } = useUsers();

  // SYNCHRONIZACJA: Kiedy zmienia się ID w adresie, aktualizuj Redux
  useEffect(() => {
    if (partnerIdFromUrl) {
      dispatch(setActiveChat(partnerIdFromUrl));
    }
    // Cleanup: opcjonalnie czyść przy wyjściu z czatu
    return () => { dispatch(setActiveChat(null)); };
  }, [partnerIdFromUrl, dispatch]);

  const currentUserId = currentUser?.id?.toString() || '';

  // Teraz useMessages sam sobie weźmie activePartnerId z Reduxa
  const { messages, sendMessage, isLoading: isChatLoading, activePartnerId } = useMessages(
    currentUserId
  );

  const chatPartner = users?.find(u => u.id.toString() === activePartnerId);

  const handleSend = (content: string) => {
    if (activePartnerId) {
      sendMessage(content);
    }
  };

  if (!activePartnerId) {
    return (
      <div className="p-4 w-full h-full flex items-center justify-center bg-gray-50 dark:bg-[#0c0c0c] text-gray-400 font-light border border-transparent dark:border-neutral-800 rounded-xl transition-colors duration-300">
        Wybierz rozmówcę z listy.
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1 bg-white dark:bg-neutral-900 rounded-3xl shadow-lg shadow-gray-200/50 dark:shadow-black/50 overflow-hidden h-full transition-colors duration-300 border border-transparent dark:border-neutral-800/50">
      <ChatHeader
        username={chatPartner?.username}
        avatar={chatPartner?.avatar}
      />
      <MessageList
        messages={messages}
        currentUserId={currentUserId}
        isLoading={isChatLoading}
      />
      <MessageInput
        onSendMessage={handleSend}
        disabled={!activePartnerId}
      />
    </div>
  );
};