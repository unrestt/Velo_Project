export interface User{
    id: number;
    username: string;
    password: string;
    email: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}