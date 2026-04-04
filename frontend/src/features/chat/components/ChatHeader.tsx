import { Link } from "react-router-dom";

interface Props {
  username?: string;
  avatar?: string;
  userId?: number;
}

export const ChatHeader = ({ username, avatar, userId }: Props) => {
  return (
    <div className="px-6 py-4 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-md shrink-0 flex items-center justify-between transition-colors duration-300">
      <Link to={`/profile/${userId}`}>
        <div className="flex items-center gap-3">
          <div className="relative">
            {avatar && (
              <img
                src={avatar}
                alt={username}
                className="w-11 h-11 rounded-full object-cover ring-2 ring-white shadow-sm"
              />
            )}
            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full shadow-sm animate-pulse" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-lg font-bold text-gray-800 dark:text-neutral-100 leading-tight tracking-tight">
              {username || 'Użytkownik'}
            </h2>
            <span className="text-xs text-gray-400 dark:text-neutral-500 font-medium tracking-wide first-letter:uppercase">Aktywny(a) teraz</span>
          </div>
        </div>
      </Link>


      <div className="flex items-center gap-2">
        <button className="p-2 text-gray-400 dark:text-neutral-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-900/30 rounded-full transition-all duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
        </button>
      </div>
    </div>
  );
};
