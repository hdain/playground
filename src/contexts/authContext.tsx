import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../firebase";

type AuthProviderProps = {
  children: JSX.Element | Array<JSX.Element>;
};

export type AuthProviderValues = {
  user: User | null;
  isLoading: boolean;
};

export const AuthContext = createContext<AuthProviderValues>({
  user: null,
  isLoading: false,
});

export const AuthProvider = (props: AuthProviderProps): JSX.Element => {
  const { children } = props;
  const [values, setValues] = useState<AuthProviderValues>({
    user: null,
    isLoading: true,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setValues({ user, isLoading: false });
      } else {
        setValues({ user: null, isLoading: false });
      }
    });

    return () => unsubscribe();
  }, []);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
