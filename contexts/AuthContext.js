import { createContext, useContext, useState, useEffect } from "react";
import { useAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = useAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          name: user.name,
          email: user.email,
          password: user.password,
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
