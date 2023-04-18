import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage"; 

export const AuthContext = createContext();

export const AuthProvider = ({
  children,
}) => { 
  const [user, setUser] = useLocalStorage('user', {})

  const userLogin = (user) => {
    setUser(user)
  }
  const userLogout = () => {
    setUser({})
  }

  const authContextValue = { user, userLogin, userLogout};

  return(
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  )
}