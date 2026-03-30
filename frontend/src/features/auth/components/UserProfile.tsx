import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { logout } from '../slices/authSlice';

export const UserProfile = () => {
  // TS wie dokładnie, że user ma pola: id, username, avatar itd.
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  if (!isAuthenticated) return <div>Niezalogowany</div>;

  const handleLogout = ()=>{
    dispatch(logout());
  }

  return <div>Witaj, {user?.username}!
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
    >
      Wyloguj się
    </button>
  </div>;
};