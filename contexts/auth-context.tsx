"use client";

import { createContext, useContext, useEffect, useState } from "react";

import { onAuthStateChanged, User } from "firebase/auth";

import { auth } from "@/lib/firebase/config";

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
  const [user, setUser] = useState<AuthProviderValues["user"]>(null);
  const [isLoading, setIsLoading] =
    useState<AuthProviderValues["isLoading"]>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }

      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = (): AuthProviderValues => useContext(AuthContext);
