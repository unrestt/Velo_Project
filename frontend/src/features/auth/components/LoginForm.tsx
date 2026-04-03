import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { mutate: login, isPending } = useLogin();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({ username, password });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">Witaj w velo</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Zaloguj się, aby uzyskać dostęp do swojego konta.</p>
      </div>

      <div className="space-y-5">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Nazwa użytkownika</label>
          <input
            id="username"
            type="text"
            placeholder="Wprowadź nazwę użytkownika"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800/50 focus:bg-white dark:focus:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#0022FF] focus:border-transparent transition-all duration-200 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
            required
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Hasło</label>
          </div>
          <input
            id="password"
            type="password"
            placeholder="Wprowadź hasło"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800/50 focus:bg-white dark:focus:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#0022FF] focus:border-transparent transition-all duration-200 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
            required
          />
        </div>

        <button

          type="submit"
          disabled={isPending}
          className="w-full bg-[#0022FF] cursor-pointer hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center mt-6"
        >
          {isPending ? (
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : null}
          {isPending ? 'Logowanie...' : 'Zaloguj się'}
        </button>
      </div>
    </form>
  );
};