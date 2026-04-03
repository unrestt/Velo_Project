import React from 'react';
import { useAppSelector } from '../store/hooks';
// import { AvatarUpload } from '../features/settings/components/AvatarUpload';
import { ProfileSettingsForm } from '../features/settings/components/ProfileSettingsForm';
import { PasswordChangeForm } from '../features/settings/components/PasswordChangeForm';
import { Settings as SettingsIcon } from 'lucide-react';

const SettingsPage = () => {
  const user = useAppSelector((state) => state.auth.user);

  return (
    /* h-full i overflow-y-auto naprawią problem ze scrollem */
    <div className="overflow-y-auto h-full w-full px-4 py-8 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="mb-10 space-y-1">
          <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase text-sm">
            <SettingsIcon className="w-4 h-4" />
            <span>Konto i Preferencje</span>
          </div>
          <h1 className="text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Ustawienia
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg">
            Zarządzaj swoimi danymi, bezpieczeństwem i wyglądem profilu.
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* <AvatarUpload currentAvatarUrl={user?.avatar} /> */}

          {/* flex-wrap + flex-1 sprawią, że formy będą równe szerokościowo.
            min-w-[300px] wymusi przejście jednego pod drugi na małych ekranach.
          */}
          <div className="flex flex-wrap items-start gap-8">
            <div className="flex-1 min-w-[320px]">
              <ProfileSettingsForm initialUsername={user?.username} />
            </div>
            <div className="flex-1 min-w-[320px]">
              <PasswordChangeForm />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SettingsPage;