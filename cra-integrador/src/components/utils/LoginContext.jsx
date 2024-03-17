import { createContext, useContext, useState } from 'react';

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const login = (userData, token) => {
    // Lógica de inicio de sesión y actualización del estado de usuario
    setUser(userData);
    setToken(token)
  };

  const logout = () => {
    // Lógica de cierre de sesión y restablecimiento del estado de usuario
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <LoginContext.Provider value={{ token, user, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => {
  return useContext(LoginContext);
};