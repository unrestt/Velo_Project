import React, { useState, useRef, useEffect } from 'react';
import EmojiPicker, { Theme } from 'emoji-picker-react';
import { useAppSelector } from '../../../store/hooks';


interface Props {
  onSendMessage: (content: string) => void;
  disabled?: boolean;
}

export const MessageInput = ({ onSendMessage, disabled }: Props) => {
  const [inputText, setInputText] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const { mode } = useAppSelector((state) => state.theme);
  const pickerRef = useRef<HTMLDivElement>(null);

  // Close picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
        setShowEmojiPicker(false);
      }
    };

    if (showEmojiPicker) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showEmojiPicker]);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || disabled) return;

    onSendMessage(inputText.trim());
    setInputText('');
  };

  const onEmojiClick = (emojiData: any) => {
    setInputText(prev => prev + emojiData.emoji);
  };


  return (
    <div className="p-4 bg-white dark:bg-neutral-900 shrink-0 shadow-[0_-1px_10px_rgba(0,0,0,0.02)] dark:shadow-[0_-1px_10px_rgba(0,0,0,0.2)] transition-colors duration-300">
      <form onSubmit={handleSubmit} className="flex gap-3 items-center relative">
        <div className="relative" ref={pickerRef}>
          <button
            type="button"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            className="p-2 text-gray-500 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400 transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800"
            title="Dodaj emoji"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
            </svg>
          </button>

          {showEmojiPicker && (
            <div className="absolute bottom-full left-0 mb-4 z-50 shadow-2xl">
              <EmojiPicker
                onEmojiClick={onEmojiClick}
                theme={mode === 'dark' ? Theme.DARK : Theme.LIGHT}
                autoFocusSearch={false}
                skinTonesDisabled
                searchPlaceHolder="Szukaj..."
              />
            </div>
          )}
        </div>

        <input
          type="text"
          className="flex-1 bg-gray-50/80 dark:bg-neutral-800 rounded-full px-5 py-3.5 outline-none focus:ring-4 focus:ring-blue-500/10 dark:focus:ring-blue-500/20 focus:bg-white dark:focus:bg-neutral-800/90 border-transparent focus:border-blue-100 dark:focus:border-blue-900 transition-all text-sm placeholder-gray-400 dark:placeholder-neutral-500 text-gray-800 dark:text-neutral-200 font-medium disabled:opacity-50"
          placeholder={disabled ? "Wysyłanie..." : "Napisz wiadomość..."}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          disabled={disabled}
          autoFocus
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-3.5 rounded-full font-semibold hover:bg-blue-700 hover:scale-105 active:scale-95 shadow-md shadow-blue-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center min-w-[50px]"
          disabled={!inputText.trim() || disabled}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13" /><polyline points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </form>

    </div>
  );
};