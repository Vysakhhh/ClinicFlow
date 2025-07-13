import React, { createContext, useState } from "react";


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  const login = (email, password) => {
    if (email === "staff@clinic.com" && password === "123456") {
      setUser({ email }); 
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};


