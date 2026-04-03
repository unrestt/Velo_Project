import { Link } from 'react-router-dom';
import type { User } from '../types';

type Props = {
  user: User;
  isSelected?: boolean;
};

export const UserItem = ({ user, isSelected }: Props) => {
  return (
    <Link
      to={`/chat/${user.id}`}
      className={`
        flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200
        ${isSelected ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' : 'hover:bg-gray-100 dark:hover:bg-neutral-800/80 text-gray-700 dark:text-neutral-300 border border-transparent'}
      `}
    >
      {/* Avatar */}
      <img
        src={user.avatar}
        alt={`${user.username} avatar`}
        className="w-10 h-10 rounded-full object-cover bg-white dark:bg-neutral-800 ring-1 ring-black/5 dark:ring-white/10"
      />

      {/* Username */}
      <div className="font-medium truncate">{user.username}</div>
    </Link>
  );
};