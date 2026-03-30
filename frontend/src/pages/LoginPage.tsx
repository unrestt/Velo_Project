import { useState } from 'react';
import { LoginForm } from '../features/auth/components/LoginForm';
import { RegisterForm } from '../features/auth/components/RegisterForm';
import veloLogo from '../assets/velo_logo.png'

export const LoginPage = () => {
  const [isLoginView, setIsLoginView] = useState(true);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <img src={veloLogo} alt="Logo" className="mb-8 w-32" />
      
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        {isLoginView ? <LoginForm /> : <RegisterForm />}

        <button 
          onClick={() => setIsLoginView(!isLoginView)}
          className="mt-6 text-sm text-blue-600 hover:underline w-full text-center"
        >
          {isLoginView ? 'Nie masz konta? Zarejestruj się' : 'Masz już konto? Zaloguj się'}
        </button>
      </div>
    </div>
  );
};