import { useState } from 'react';
import { useRegister } from '../hooks/useRegister';

export const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const { mutate: register, isPending } = useRegister();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Hasła nie są identyczne!");
      return;
    }

    // Wywołujemy hooka z danymi (id serwer nada sam)
    register({ username, password, email});
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 border rounded shadow max-w-md">
      <h2 className="text-xl font-bold">Stwórz konto</h2>
      
      <input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        className="p-2 border rounded"
        required
      />
      
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        className="p-2 border rounded"
        required
      />

      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        className="p-2 border rounded"
        required
      />

      <input 
        type="password" 
        placeholder="Confirm Password" 
        value={confirmPassword} 
        onChange={(e) => setConfirmPassword(e.target.value)} 
        className="p-2 border rounded"
        required
      />

      <button 
        type="submit" 
        disabled={isPending}
        className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition"
      >
        {isPending ? 'Tworzenie konta...' : 'Zarejestruj się'}
      </button>
    </form>
  );
};