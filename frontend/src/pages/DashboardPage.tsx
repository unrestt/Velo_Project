import { UserProfile } from '../features/auth/components/UserProfile';
import { UsersSidebar } from '../features/users/components/UserSidebar';
import veloLogo from '../assets/velo_logo.png'

export const DashboardPage = () => {
  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-10">
        <div className="flex justify-center mb-8">
            <img src={veloLogo} alt="Velo Logo" className="h-10 object-contain drop-shadow-sm" />
        </div>
        <UserProfile /> {/* Przycisk wyloguj i info o userze */}
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <UsersSidebar />

        <div className="p-4 bg-white shadow rounded">Twoje Wiadomości</div>
        <div className="p-4 bg-white shadow rounded">Ustawienia</div>
      </main>
    </div>
  );
};