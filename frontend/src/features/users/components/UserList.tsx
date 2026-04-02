import type { User } from '../types';
import { UserItem } from './UserItem';

type Props = {
  users: User[];
  selectedUserId?: string;
};

export const UserList = ({ users, selectedUserId }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      {users.map((user) => (
        <UserItem
          key={user.id}
          user={user}
          isSelected={selectedUserId === user.id.toString()}
        />
      ))}
    </div>
  );
};