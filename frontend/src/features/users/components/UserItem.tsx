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
        p-3 rounded cursor-pointer transition
        ${isSelected ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}
      `}
    >
      <div className="font-medium">{user.username}</div>
    </div>
  );
};