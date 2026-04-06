import React, { useState, useRef, useEffect } from 'react';
import EmojiPicker, { Theme } from 'emoji-picker-react';
import { useAppSelector } from '../../../store/hooks';
import { uploadImageToCloudinary } from '../api/chat';

interface Props {
  onSendMessage: (content: string, imageUrl?: string) => void;
  disabled?: boolean;
}

export const MessageInput = ({ onSendMessage, disabled }: Props) => {
  const [inputText, setInputText] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const { mode } = useAppSelector((state) => state.theme);
  const pickerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) return;
      if (file.size > 10 * 1024 * 1024) {
        alert('Plik jest za duży. Maksymalny rozmiar to 10MB.');
        return;
      }
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
    // Reset input so the same file can be re-selected
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const removeImage = () => {
    setSelectedImage(null);
    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
      setImagePreview(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if ((!inputText.trim() && !selectedImage) || disabled || isUploading) return;

    let imageUrl: string | undefined;

    if (selectedImage) {
      try {
        setIsUploading(true);
        imageUrl = await uploadImageToCloudinary(selectedImage);
      } catch (error) {
        console.error('Błąd przesyłania obrazu:', error);
        alert('Nie udało się przesłać obrazu. Spróbuj ponownie.');
        setIsUploading(false);
        return;
      } finally {
        setIsUploading(false);
      }
    }

    onSendMessage(inputText.trim(), imageUrl);
    setInputText('');
    removeImage();
  };

  const onEmojiClick = (emojiData: any) => {
    setInputText(prev => prev + emojiData.emoji);
  };

  const isDisabled = disabled || isUploading;

  return (
    <div className="p-4 bg-white dark:bg-neutral-900 shrink-0 shadow-[0_-1px_10px_rgba(0,0,0,0.02)] dark:shadow-[0_-1px_10px_rgba(0,0,0,0.2)] transition-colors duration-300">
      {/* Image Preview */}
      {imagePreview && (
        <div className="mb-3 relative inline-block group">
          <img
            src={imagePreview}
            alt="Podgląd"
            className="max-h-32 max-w-[200px] rounded-xl object-cover border-2 border-blue-500/30 shadow-md"
          />
          <button
            type="button"
            onClick={removeImage}
            className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs shadow-lg transition-all hover:scale-110 opacity-0 group-hover:opacity-100"
            title="Usuń zdjęcie"
          >
            ✕
          </button>
          {isUploading && (
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
            </div>
          )}
        </div>
      )}

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

        {/* Image Upload Button */}
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className={`p-2 transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 ${
            selectedImage
              ? 'text-blue-600 dark:text-blue-400'
              : 'text-gray-500 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400'
          }`}
          title="Dodaj zdjęcie"
          disabled={isUploading}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
          </svg>
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageSelect}
          className="hidden"
        />

        <input
          type="text"
          className="flex-1 bg-gray-50/80 dark:bg-neutral-800 rounded-full px-5 py-3.5 outline-none focus:ring-4 focus:ring-blue-500/10 dark:focus:ring-blue-500/20 focus:bg-white dark:focus:bg-neutral-800/90 border-transparent focus:border-blue-100 dark:focus:border-blue-900 transition-all text-sm placeholder-gray-400 dark:placeholder-neutral-500 text-gray-800 dark:text-neutral-200 font-medium disabled:opacity-50"
          placeholder={isUploading ? "Przesyłanie zdjęcia..." : disabled ? "Wysyłanie..." : "Napisz wiadomość..."}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          disabled={isDisabled}
          autoFocus
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-3.5 rounded-full font-semibold hover:bg-blue-700 hover:scale-105 active:scale-95 shadow-md shadow-blue-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center min-w-[50px]"
          disabled={(!inputText.trim() && !selectedImage) || isDisabled}
        >
          {isUploading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" /><polyline points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          )}
        </button>
      </form>

    </div>
  );
};