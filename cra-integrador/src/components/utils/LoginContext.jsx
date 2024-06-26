import { createContext, useContext, useEffect, useState } from 'react';

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  function decodeToken(token) {
    const payload = token.split('.')[1];
    const decodedPayload = JSON.parse(atob(payload));
    return {
        idUsuario: decodedPayload.idUsuario,
        username: decodedPayload.username,
        nombreUsuario: decodedPayload.nombreUsuario,
        apellidoUsuario: decodedPayload.apellidoUsuario,
        numTelefono: decodedPayload.numTelefono,
        email: decodedPayload.email,
        userRol: decodedPayload.userRol
    };

}
const handleLoginFailure = () => {
  localStorage.removeItem("token");
};
const handleLoginSuccess = (token) => {
  setUser(decodeToken(token));
};

useEffect(()=>{
  
  console.log(localStorage.getItem("token"));
  const localToken = localStorage.getItem("token");
  if(localToken !== 'undefined') {
    console.log(localStorage.getItem("token"));
    if (localToken&&!user){
      setUser(decodeToken(localToken))
    }
  }
  else{
    console.log("undefined");
  }
},[])

  const login = (userData, token) => {
    setUser(userData);
    setToken(token)
  };

  const logout = () => {
    window.location.replace(`${window.location.origin}`)
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