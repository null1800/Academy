import { useState, useCallback } from "react";

export default function useAuth() {
  const [user, setUser] = useState(null);
  const login = useCallback((uid) => {
    setUser({ uid });
  }, []);
  const logout = useCallback(() => {
    setUser(null);
  }, []);
  return { user, isAuthenticated: !!user, login, logout };
}
