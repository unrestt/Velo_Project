interface Props {
  content: string;
  timestamp: string;
  isMe: boolean;
}

export const MessageBubble = ({ content, timestamp, isMe }: Props) => {
  return (
    <div className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[70%] px-4 py-3 rounded-2xl shadow-sm ${
          isMe
            ? 'bg-blue-600 text-white rounded-br-none'
            : 'bg-white text-gray-800 border-gray-100 border drop-shadow-sm rounded-bl-none'
        }`}
      >
        <p className="text-sm leading-relaxed">{content}</p>
        <div className={`text-[10px] mt-1.5 font-medium ${isMe ? 'text-blue-200' : 'text-gray-400'}`}>
          {new Date(timestamp).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </div>
      </div>
    </div>
  );
};
