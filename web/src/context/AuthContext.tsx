import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';

const Context = createContext({
  loading: true,
  authenticated: false,
  handleLogin: () => {},
  handleLogout: () => {}
});

const AuthProvider:React.FC = ({ children }) => {
  const {
    authenticated, loading, handleLogin, handleLogout,
  } = useAuth();

  return (
    <Context.Provider value={{ loading, authenticated, handleLogin, handleLogout }}>
      {children}
    </Context.Provider>
  );
}

function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  async function handleLogin() {
    setAuthenticated(true);
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    api.defaults.headers.Authorization = undefined;
    window.location.href = "/";
  }
  
  return { authenticated, loading, handleLogin, handleLogout };
}

export { Context, AuthProvider };
