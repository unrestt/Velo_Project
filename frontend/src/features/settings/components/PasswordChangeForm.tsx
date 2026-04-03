import { useState, FormEvent } from 'react';
import { useUpdatePassword } from '../hooks/useUpdatePassword';
import { KeyRound, Loader2, AlertCircle } from 'lucide-react';
import { SettingsSection } from './SettingsSection';

export const PasswordChangeForm = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  
  const { mutate: updatePassword, isPending } = useUpdatePassword();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setPasswordError('');

    if (newPassword !== confirmPassword) {
      setPasswordError('Hasła nie są identyczne.');
      return;
    }

    if (newPassword.length < 6) {
      setPasswordError('Nowe hasło musi mieć min. 6 znaków.');
      return;
    }

    updatePassword(
      { currentPassword, newPassword },
      {
        onSuccess: () => {
          setCurrentPassword('');
          setNewPassword('');
          setConfirmPassword('');
        }
      }
    );
  };

  return (
    <SettingsSection 
      title="Bezpieczeństwo" 
      description="Zarządzaj swoim hasłem, aby chronić dostęp do konta."
      icon={<KeyRound className="w-6 h-6 stroke-[1.5]" />}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
            Obecne hasło
          </label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full px-5 py-3.5 bg-zinc-50/50 dark:bg-[#18181A] border border-zinc-200 dark:border-zinc-800 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 dark:focus:ring-blue-500/20 dark:text-white transition-all outline-none font-medium placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
            placeholder="Wpisz obecne hasło"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          <div>
            <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
              Nowe hasło
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-5 py-3.5 bg-zinc-50/50 dark:bg-[#18181A] border border-zinc-200 dark:border-zinc-800 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 dark:focus:ring-blue-500/20 dark:text-white transition-all outline-none font-medium placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
              placeholder="Min. 6 znaków"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
              Potwierdź nowe hasło
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`w-full px-5 py-3.5 bg-zinc-50/50 dark:bg-[#18181A] border ${passwordError ? 'border-red-500/50 focus:ring-red-500/10 focus:border-red-500' : 'border-zinc-200 dark:border-zinc-800 focus:ring-blue-500/10 focus:border-blue-500 dark:focus:ring-blue-500/20'} rounded-2xl focus:ring-4 dark:text-white transition-all outline-none font-medium placeholder:text-zinc-400 dark:placeholder:text-zinc-600`}
              placeholder="Powtórz hasło"
            />
          </div>
        </div>

        {passwordError && (
          <div className="flex items-center gap-2 text-red-500 mt-2 bg-red-50 dark:bg-red-500/10 px-4 py-3 rounded-xl border border-red-100 dark:border-red-500/20">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <p className="text-sm font-medium">{passwordError}</p>
          </div>
        )}
        
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            disabled={isPending || !newPassword || !confirmPassword || !currentPassword}
            className="flex items-center justify-center gap-2 px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 dark:text-zinc-900 disabled:opacity-50 text-white font-semibold rounded-2xl transition-all active:scale-[0.98] shadow-sm"
          >
            {isPending ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Zaktualizuj hasło'}
          </button>
        </div>
      </form>
    </SettingsSection>
  );
};


