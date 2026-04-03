import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useUsers } from '../hooks/useUsers';
import { UserList } from './UserList';
import { useAppSelector } from '../../../store/hooks';

export const UsersSidebar = () => {
  const { data: users, isLoading, isError, error } = useUsers();
  const { userId } = useParams<{ userId: string }>();
  const { user: currentUser } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Błąd pobierania użytkowników');
    }
  }, [isError, error]);

  if (isLoading) {
    return <div className="p-4">Ładowanie użytkowników...</div>;
  }

  // Odfiltruj zalogowanego użytkownika
  const filteredUsers = users?.filter(u => u.id !== currentUser?.id);

  return (
    <aside className="w-full h-full p-4 flex flex-col transition-colors duration-300">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Kontakty</h2>

      <div className="flex-1 overflow-y-auto pr-2">
        {filteredUsers && (
          <UserList
            users={filteredUsers}
            selectedUserId={userId}
          />
        )}
      </div>
    </aside>
  );
};