import { Outlet } from 'react-router-dom';
import { UserProfile } from '../features/auth/components/UserProfile';
import { UsersSidebar } from '../features/users/components/UserSidebar';
import { ThemeToggle } from '../features/ui/components/ThemeToggle';
import veloLogo from '../assets/velo_logo.png';

export const MainLayout = () => {
  return (
    <div className="h-screen bg-gray-50 dark:bg-slate-950 p-6 flex flex-col overflow-hidden transition-colors duration-300">
      <header className="flex justify-between items-center mb-4 pb-2 shrink-0 border-b border-transparent dark:border-slate-800/50">
        <div className="flex items-center gap-4">
            <img src={veloLogo} alt="Velo Logo" className="h-10 object-contain drop-shadow-sm dark:brightness-110 dark:invert-[0.05]" />
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <UserProfile />
        </div>
      </header>

      <main className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-6 min-h-0">
        <div className="md:col-span-1 h-full overflow-hidden">
          <UsersSidebar />
        </div>

        <div className="md:col-span-3 h-full overflow-hidden w-full flex">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
