import { create } from 'zustand';

interface User {
  uid: string;
  phoneNumber?: string;
  role: 'admin' | 'viewer' | null;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  tempSignupData: Partial<User> | null;
  setUser: (user: User | null) => void;
  setLoading: (isLoading: boolean) => void;
  setTempSignup: (data: Partial<User> | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  tempSignupData: null,
  setUser: (user) => set({ user, isAuthenticated: !!user, isLoading: false, tempSignupData: null }),
  setLoading: (isLoading) => set({ isLoading }),
  setTempSignup: (tempSignupData) => set({ tempSignupData }),
  logout: () => set({ user: null, isAuthenticated: false, isLoading: false, tempSignupData: null }),
}));
