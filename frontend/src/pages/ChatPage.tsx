import { useParams } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';
import { useUsers } from '../features/users/hooks/useUsers';
import { useMessages } from '../features/chat/hooks/useMessages';
import { ChatHeader, MessageList, MessageInput } from '../features/chat/components';

export const ChatPage = () => {
  const { userId: partnerId } = useParams<{ userId: string }>();
  const { user: currentUser } = useAppSelector((state) => state.auth);
  const { data: users } = useUsers();

  const currentUserId = currentUser?.id?.toString() || '';
  const effectivePartnerId = partnerId || '';

  const { messages, sendMessage, isLoading: isChatLoading } = useMessages(
    currentUserId,
    effectivePartnerId
  );

  const chatPartner = users?.find(u => u.id.toString() === partnerId);

  const handleSend = (content: string) => {
    if (!partnerId) return;
    sendMessage(content);
  };

  if (!partnerId) {
    return (
      <div className="p-4 w-full h-full flex items-center justify-center bg-gray-50 text-gray-400 font-light border rounded-xl">
        Nie znaleziono czatu.
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1 bg-white dark:bg-slate-900 rounded-3xl shadow-lg shadow-gray-200/50 dark:shadow-black/20 overflow-hidden h-full transition-all duration-300">
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
        disabled={!partnerId} 
      />
    </div>
  );
};
