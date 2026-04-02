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
        flex items-center gap-3 p-3 rounded-lg cursor-pointer transition
        ${isSelected ? 'bg-blue-600 text-white shadow-md' : 'hover:bg-gray-100 shadow-sm border border-transparent'}
      `}
    >
      {/* Avatar */}
      <img
        src={user.avatar}
        alt={`${user.username} avatar`}
        className="w-10 h-10 rounded-full object-cover bg-white"
      />

      {/* Username */}
      <div className="font-medium truncate">{user.username}</div>
    </Link>
  );
};