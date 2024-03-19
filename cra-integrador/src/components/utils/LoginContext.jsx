import { createContext, useContext, useEffect, useState } from 'react';

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  function decodeToken(token) {
    const payload = token.split('.')[1];
    const decodedPayload = JSON.parse(atob(payload));
    return {
        username: decodedPayload.username,
        nombreUsuario: decodedPayload.nombreUsuario,
        apellidoUsuario: decodedPayload.apellidoUsuario,
        numTelefono: decodedPayload.numTelefono,
        email: decodedPayload.email,
        userRol: decodedPayload.userRol
    };

}
useEffect(()=>{
  const localToken = localStorage.getItem("token")
  if (localToken&&!user){
    setUser(decodeToken(localToken))
  }
})

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
  useEffect(()=>{console.log(user);},[user])

  return (
    <LoginContext.Provider value={{ token, user, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => {
  return useContext(LoginContext);
};