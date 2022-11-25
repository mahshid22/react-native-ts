/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable curly */
/* eslint-disable prettier/prettier */
import React, {createContext, Dispatch, SetStateAction, useState} from 'react';

interface IContextProps {
  user: string;
  setUser: Dispatch<SetStateAction<string>>;
  login: any;
  register: any;
  logout: any;
}
export const AuthContext = createContext({} as IContextProps);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState('logedin');

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email: string, password: string) => {},
        register: async (email: string, password: string) => {},
        logout: async () => {},
      }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
