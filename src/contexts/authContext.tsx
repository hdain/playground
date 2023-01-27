import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../firebase";

type AuthProviderProps = {
  children: JSX.Element | Array<JSX.Element>;
};

export const AuthContext = createContext<User | null>(null);

export const AuthProvider = (props: AuthProviderProps): JSX.Element => {
  const { children } = props;
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        // signed in
        setUser(firebaseUser);
      } else {
        // signed out
        setUser(null);
      }
    });
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
