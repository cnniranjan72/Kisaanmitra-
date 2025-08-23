import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getCurrentUser } from '@/services/auth';

type User = {
  id: string;
  username: string;
  email: string;
  // Add other user fields as needed
} | null;

type AuthContextType = {
  user: User | null;
  loading: boolean;
  setUser: (user: User | null) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setUser(null);
          setLoading(false);
          return;
        }
        
        const userData = await getCurrentUser();
        if (userData) {
          setUser(userData);
        } else {
          localStorage.removeItem('token');
          setUser(null);
        }
      } catch (error) {
        console.error('Error loading user:', error);
        localStorage.removeItem('token');
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, setUser }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
