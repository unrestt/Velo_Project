import { useState, FormEvent, useEffect } from 'react';
import { useUpdateProfile } from '../hooks/useUpdateProfile';
import { User, Loader2 } from 'lucide-react';
import { SettingsSection } from './SettingsSection';

export const ProfileSettingsForm = ({ initialUsername = '' }: { initialUsername?: string }) => {
    const [username, setUsername] = useState(initialUsername);
  const { mutate: updateProfile, isPending } = useUpdateProfile();

    useEffect(() => {
        setUsername(initialUsername);
    }, [initialUsername]);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!username.trim()) return;
        updateProfile({ username });
    };

  return (
    <SettingsSection 
      title="Profil Użytkownika" 
      description="Zaktualizuj swoje publiczne informacje widoczne dla innych użytkowników."
      icon={<User className="w-6 h-6 stroke-[1.5]" />}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="nickname" className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
            Nazwa użytkownika
          </label>
          <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-5 py-3.5 bg-zinc-50/50 dark:bg-[#18181A] border border-zinc-200 dark:border-zinc-800 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 dark:focus:ring-blue-500/20 dark:text-white transition-all font-medium placeholder:text-zinc-400 dark:placeholder:text-zinc-600 outline-none"
                        placeholder="Wpisz nową nazwę"
                    />
                </div>

                <div className="flex justify-end pt-2">
                    <button
                        type="submit"
                        disabled={isPending || !username.trim() || username === initialUsername}
            className="flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:hover:bg-blue-600 text-white font-semibold rounded-2xl transition-all active:scale-[0.98] shadow-sm shadow-blue-600/20"
          >
            {isPending ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Zapisz zmiany profilu'}
          </button>
        </div>
      </form>
    </SettingsSection>
  );
};


