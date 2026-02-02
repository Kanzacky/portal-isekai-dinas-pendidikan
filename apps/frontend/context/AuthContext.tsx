import React, { createContext, useContext, useState, useEffect } from 'react';
import apiClient from '../utils/api';

interface AuthContextType {
  isAuthenticated: boolean;
  user: any;
  login: (credentials: any) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Cek apakah ada session tersimpan saat app pertama kali dibuka
    const token = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user_info');
    if (token && savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (credentials: any) => {
    try {
      // 1. Hit Endpoint Login
      const response = await apiClient.post('/auth/login', credentials);
      
      if (response.data.status === "00") {
        const { credential, uniqueId, fullname, role } = response.data;
        
        // 2. Simpan ke LocalStorage untuk Persistent Session
        localStorage.setItem('token', credential);
        localStorage.setItem('uniqueId', uniqueId);
        
        const userInfo = { uniqueId, fullname, role };
        localStorage.setItem('user_info', JSON.stringify(userInfo));
        
        // 3. Update State Global
        setUser(userInfo);
      } else {
        throw new Error(response.data.message);
      }
    } catch (error: any) {
      throw error.response?.data?.message || "Login Gagal";
    }
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
    window.location.href = '/';
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};