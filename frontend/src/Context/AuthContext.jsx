import React, { useState, createContext, useEffect } from "react";
import api from "../API/api";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const me = async () => {
      try {
        const response = await api.get("/getUser", { withCredentials: true });
        if (response.data.user) {
          setUser(response.data.user);
          //localStorage.setItem("user", response.data.user.id);
        }
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    me();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
