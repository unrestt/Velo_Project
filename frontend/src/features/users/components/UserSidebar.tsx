import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useUsers } from '../hooks/useUsers';
import { UserList } from './UserList';
import type { User } from '../types';

export const UsersSidebar = () => {
  const { data: users, isLoading, isError, error } = useUsers();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Błąd pobierania użytkowników');
    }
  }, [isError, error]);

  if (isLoading) {
    return <div className="p-4">Ładowanie użytkowników...</div>;
  }

  return (
    <aside className="w-64 bg-white shadow rounded p-4">
      <h2 className="text-lg font-semibold mb-4">Użytkownicy</h2>

      {users && (
        <UserList
          users={users}
          selectedUser={selectedUser}
          onSelect={setSelectedUser}
        />
      )}
    </aside>
  );
};