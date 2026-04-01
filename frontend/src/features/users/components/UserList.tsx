import type { User } from '../types';
import { UserItem } from './UserItem';

type Props = {
  users: User[];
  selectedUser: User | null;
  onSelect: (user: User) => void;
};

export const UserList = ({ users, selectedUser, onSelect }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      {users.map((user) => (
        <UserItem
          key={user.id}
          user={user}
          isSelected={selectedUser?.id === user.id}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};