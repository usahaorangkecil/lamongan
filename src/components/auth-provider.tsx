
import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  email: string;
  role: 'bupati' | 'opd' | 'camat' | 'admin';
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  // Check for saved auth on mount
  useEffect(() => {
    const savedAuth = localStorage.getItem('smartLamonganAuth');
    if (savedAuth) {
      setUser(JSON.parse(savedAuth));
    }
  }, []);

  const mockUsers = [
    { email: 'bupati@lamongan.go.id', password: 'password123', role: 'bupati', name: 'Bupati Lamongan' },
    { email: 'opd@lamongan.go.id', password: 'password123', role: 'opd', name: 'Kepala Dinas Kesehatan' },
    { email: 'camat@lamongan.go.id', password: 'password123', role: 'camat', name: 'Camat Deket' },
    { email: 'admin@lamongan.go.id', password: 'password123', role: 'admin', name: 'Admin System' }
  ];

  const login = (email: string, password: string) => {
    const foundUser = mockUsers.find(u => u.email === email && u.password === password);
    
    if (foundUser) {
      const userData = {
        email: foundUser.email,
        role: foundUser.role as 'bupati' | 'opd' | 'camat' | 'admin',
        name: foundUser.name
      };
      
      setUser(userData);
      localStorage.setItem('smartLamonganAuth', JSON.stringify(userData));
      
      // Navigate based on role
      switch(foundUser.role) {
        case 'bupati':
          navigate('/dashboard/bupati/statistik');
          break;
        case 'opd':
          navigate('/dashboard/opd/statistik');
          break;
        case 'camat':
          navigate('/dashboard/camat/statistik');
          break;
        case 'admin':
          navigate('/dashboard/admin/statistik');
          break;
      }
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('smartLamonganAuth');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};
