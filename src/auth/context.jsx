import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  // False until any persisted session has been restored.
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    // Load Firebase Auth after first paint so it stays out of the main bundle,
    // then restore a persisted session once.
    let cancelled = false;
    import("../firebase/auth").then(async ({ auth }) => {
      await auth.authStateReady();
      if (cancelled) return;
      if (auth.currentUser) {
        setCurrentUser(auth.currentUser);
      }
      setAuthReady(true);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser, authReady }}>
      {children}
    </AuthContext.Provider>
  );
};
