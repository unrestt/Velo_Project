import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { logout } from '../slices/authSlice';

export const UserProfile = () => {
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  if (!isAuthenticated) return null;

  const handleLogout = () => {
    dispatch(logout());
  };

  const initials = user?.username?.charAt(0).toUpperCase() || '?';

  return (
    <div className="flex items-center gap-3 pl-2 pr-1 py-1 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-white/20 dark:border-slate-700/50 rounded-full shadow-sm hover:shadow-md transition-all duration-300 group">
      <div className="flex items-center gap-2">
        {user?.avatar ? (
          <img
            src={user.avatar}
            alt={user.username}
            className="w-8 h-8 rounded-full object-cover ring-2 ring-white dark:ring-slate-800 shadow-sm"
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold ring-2 ring-white dark:ring-slate-800 shadow-sm">
            {initials}
          </div>
        )}
        <div className="flex flex-col pr-2">
          <span className="text-sm font-semibold text-gray-800 dark:text-slate-200 leading-none">
            {user?.username}
          </span>
          <span className="text-[10px] text-gray-500 dark:text-slate-500 font-medium">Online</span>
        </div>
      </div>

      <button
        onClick={handleLogout}
        title="Wyloguj się"
        className="flex items-center justify-center w-8 h-8 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <polyline points="16 17 21 12 16 7" />
          <line x1="21" y1="12" x2="9" y2="12" />
        </svg>
      </button>
    </div>
  );
};