import { useState } from 'react';
import { LoginForm } from '../features/auth/components/LoginForm';
import { RegisterForm } from '../features/auth/components/RegisterForm';
import { useAppSelector } from '../store/hooks';
import veloLogo from '../assets/velo_logo.png';
import lightVeloLogo from '../assets/velo_light_logo.png';
import { ThemeToggle } from '../components/ThemeToggle';


export const LoginPage = () => {
  const [isLoginView, setIsLoginView] = useState(true);
  const { mode } = useAppSelector((state) => state.theme);

  return (
    <div className="min-h-screen w-full flex bg-slate-50 dark:bg-[#0c0c0c] text-gray-900 dark:text-gray-100 relative overflow-hidden selection:bg-[#0022FF]/20 transition-colors duration-300">

      <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-50 scale-105 sm:scale-120 origin-top-right">
        <ThemeToggle />
      </div>
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-gradient-to-tr from-[#0022FF]/10 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-blue-400/10 to-[#0022FF]/5 rounded-full blur-3xl opacity-70 pointer-events-none"></div>

      <div className="flex flex-col flex-1 justify-center items-center p-4 sm:p-6 z-10 w-full relative">
        <div className="w-full max-w-md mx-auto relative perspective-1000">

          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img src={mode == 'light' ? veloLogo : lightVeloLogo} alt="Velo Logo" className="h-10 object-contain drop-shadow-sm" />
          </div>

          {/* Form Container */}
          <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md p-8 sm:p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-black/50 border border-white dark:border-neutral-800">

            <div className="transition-all duration-500 ease-in-out">
              {isLoginView ? <LoginForm /> : <RegisterForm />}
            </div>

            {/* Przełącznik logowania/rejestracji */}
            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-neutral-800">
              <p className="text-center text-gray-500 dark:text-neutral-400 text-sm">
                {isLoginView ? 'Nie masz jeszcze konta?' : 'Masz już konto?'}
                <button
                  onClick={() => setIsLoginView(!isLoginView)}
                  className="ml-2 font-semibold text-[#0022FF] dark:text-blue-500 hover:text-blue-800 dark:hover:text-blue-400 transition-colors bg-transparent border-none p-0 cursor-pointer focus:outline-none xl:hover:underline"
                >
                  {isLoginView ? 'Zarejestruj się' : 'Zaloguj się'}
                </button>
              </p>
            </div>

          </div>

          <div className="mt-8 text-center text-xs text-gray-400">
            <p>&copy; {new Date().getFullYear()} Velo. Wszelkie prawa zastrzeżone.</p>
          </div>
        </div>
      </div>
    </div>
  );
};