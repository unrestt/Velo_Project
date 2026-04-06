import { useEffect, useRef } from 'react';
import type { ChatMessage } from '../types';
import { MessageBubble } from './MessageBubble';

interface Props {
  messages: ChatMessage[];
  currentUserId: string;
  isLoading?: boolean;
}

export const MessageList = ({ messages, currentUserId, isLoading }: Props) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (isLoading) {
    return <div className="text-center py-10 text-gray-400 dark:text-neutral-500">Ładowanie wiadomości...</div>;
  }

  if (messages.length === 0) {
    return (
      <div className="text-gray-400 dark:text-neutral-500 text-center h-full flex flex-col items-center justify-center">
        <p className="font-light">Brak wiadomości. Rozpocznij konwersację!</p>
      </div>
    );
  }

  return (
    <div className="flex-1 p-6 overflow-y-auto bg-[#fafafa] dark:bg-[#121212] flex flex-col gap-4 transition-colors duration-300">
      {messages.map((msg) => (
        <MessageBubble
          key={msg.id}
          content={msg.content}
          imageUrl={msg.imageUrl}
          timestamp={msg.timestamp}
          isMe={msg.senderId === currentUserId}
        />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};
