export interface User{
    id: number;
    username: string;
    password: string;
    email: string;
    avatar: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}