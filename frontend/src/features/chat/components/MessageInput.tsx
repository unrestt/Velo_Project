import React, { useState } from 'react';

interface Props {
  onSendMessage: (content: string) => void;
  disabled?: boolean;
}

export const MessageInput = ({ onSendMessage, disabled }: Props) => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || disabled) return;

    onSendMessage(inputText.trim());
    setInputText('');
  };

  return (
    <div className="p-4 bg-white dark:bg-slate-900 shrink-0 shadow-[0_-1px_10px_rgba(0,0,0,0.02)] transition-colors duration-300">
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="text"
          className="flex-1 bg-gray-50/80 dark:bg-slate-800/80 dark:text-slate-100 rounded-full px-5 py-3.5 outline-none focus:ring-4 focus:ring-blue-500/10 dark:focus:ring-blue-500/5 focus:bg-white dark:focus:bg-slate-800 border-transparent focus:border-blue-100 dark:focus:border-slate-700 transition-all text-sm placeholder-gray-400 dark:placeholder-slate-500 font-medium"
          placeholder="Napisz wiadomość..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          autoFocus
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-3.5 rounded-full font-semibold hover:bg-blue-700 hover:scale-105 active:scale-95 shadow-md shadow-blue-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center min-w-[50px]"
          disabled={!inputText.trim() || disabled}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polyline points="22 2 15 22 11 13 2 9 22 2"/></svg>
        </button>
      </form>
    </div>
  );
};
