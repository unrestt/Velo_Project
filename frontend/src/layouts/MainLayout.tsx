import { Outlet } from 'react-router-dom';
import { UserProfile } from '../features/auth/components/UserProfile';
import { UsersSidebar } from '../features/users/components/UserSidebar';
import veloLogo from '../assets/velo_logo.png';

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col">
      <header className="flex justify-between items-center mb-10 pb-4 border-b shrink-0">
        <div className="flex justify-center">
            <img src={veloLogo} alt="Velo Logo" className="h-10 object-contain drop-shadow-sm" />
        </div>
        <UserProfile />
      </header>

      <main className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-6 max-h-[80vh]">
        <div className="md:col-span-1 max-h-full overflow-hidden">
          <UsersSidebar />
        </div>

        <div className="md:col-span-3 max-h-full overflow-hidden w-full h-full flex">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
