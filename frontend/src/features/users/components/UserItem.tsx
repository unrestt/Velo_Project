import type { User } from '../types';

type Props = {
  user: User;
  isSelected?: boolean;
  onSelect: (user: User) => void;
};

export const UserItem = ({ user, isSelected, onSelect }: Props) => {
  return (
    <div
      onClick={() => onSelect(user)}
      className={`
        flex items-center gap-3 p-3 rounded cursor-pointer transition
        ${isSelected ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}
      `}
    >
      {/* Avatar */}
      <img
        src={user.avatar}
        alt={`${user.username} avatar`}
        className="w-10 h-10 rounded-full object-cover"
      />

      {/* Username */}
      <div className="font-medium">{user.username}</div>
    </div>
  );
};