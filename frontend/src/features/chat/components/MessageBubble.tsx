import { useState } from 'react';

interface Props {
  content: string;
  imageUrl?: string;
  timestamp: string;
  isMe: boolean;
}

export const MessageBubble = ({ content, imageUrl, timestamp, isMe }: Props) => {
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  return (
    <>
      <div className={`flex ${isMe ? 'justify-end' : 'justify-start'} transition-colors duration-300`}>
        <div
          className={`max-w-[70%] px-4 py-3 rounded-2xl shadow-sm ${
            isMe
              ? 'bg-blue-600 text-white rounded-br-none shadow-blue-500/10'
              : 'bg-white dark:bg-neutral-800 text-gray-800 dark:text-neutral-200 border-gray-100 dark:border-transparent border drop-shadow-sm rounded-bl-none'
          }`}
        >
          {imageUrl && (
            <img
              src={imageUrl}
              alt="Zdjęcie w wiadomości"
              className={`rounded-xl max-w-full max-h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity ${
                content ? 'mb-2' : ''
              }`}
              onClick={() => setIsImageExpanded(true)}
              loading="lazy"
            />
          )}
          {content && <p className="text-sm leading-relaxed">{content}</p>}
          <div className={`text-[10px] mt-1.5 font-medium ${isMe ? 'text-blue-200/80' : 'text-gray-400'}`}>
            {new Date(timestamp).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </div>
        </div>
      </div>

      {/* Lightbox / fullscreen preview */}
      {isImageExpanded && imageUrl && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 cursor-pointer animate-[fadeIn_0.15s_ease-out]"
          onClick={() => setIsImageExpanded(false)}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 flex items-center justify-center text-xl transition-all"
            onClick={() => setIsImageExpanded(false)}
          >
            ✕
          </button>
          <img
            src={imageUrl}
            alt="Powiększone zdjęcie"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};
