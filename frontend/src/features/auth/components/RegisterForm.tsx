import { useState } from 'react';
import { useRegister } from '../hooks/useRegister';
import toast from 'react-hot-toast';

export const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const avatar = "https://www.gravatar.com/avatar/?d=mp&f=y";

  const { mutate: register, isPending } = useRegister();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Hasła nie są identyczne!");
      return;
    }

    register({ username, password, email, avatar});
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Dołącz do nas</h2>
        <p className="text-sm text-gray-500 mt-2">Utwórz konto, by w pełni korzystać z platformy.</p>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="reg-username" className="block text-sm font-medium text-gray-700 mb-1.5">Nazwa użytkownika</label>
          <input
            id="reg-username"
            type="text"
            placeholder="np. jan_kowalski"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0022FF] focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
            required
          />
        </div>

        <div>
          <label htmlFor="reg-email" className="block text-sm font-medium text-gray-700 mb-1.5">Adres e-mail</label>
          <input
            id="reg-email"
            type="email"
            placeholder="jan@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0022FF] focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
            required
          />
        </div>

        <div>
          <label htmlFor="reg-password" className="block text-sm font-medium text-gray-700 mb-1.5">Hasło</label>
          <input
            id="reg-password"
            type="password"
            placeholder="Minimum 8 znaków"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0022FF] focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
            required
          />
        </div>

        <div>
          <label htmlFor="reg-confirm" className="block text-sm font-medium text-gray-700 mb-1.5">Potwierdź hasło</label>
          <input
            id="reg-confirm"
            type="password"
            placeholder="Powtórz hasło"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0022FF] focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-[#0022FF] hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/30 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center mt-6"
        >
          {isPending ? (
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : null}
          {isPending ? 'Tworzenie konta...' : 'Zarejestruj się'}
        </button>
      </div>
    </form>
  );
};