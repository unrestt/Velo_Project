import axios from 'axios';
import toast from 'react-hot-toast';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3001',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      // To się stanie, gdy backend jest wyłączony
      toast.error('Błąd sieci: Serwer nie odpowiada.');
    }
    return Promise.reject(error);
  }
);