import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await AsyncStorage.getItem("User");
      setLoading(true);
      if (data) {
        setUser(JSON.parse(data));
      }
      setLoading(false);
    })();
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    if (email === "test@test.com" && password === "123456") {
      const userData = { email };
      setUser(userData);
      await AsyncStorage.setItem("User", JSON.stringify(userData));
      setLoading(false);
      return true;
    }
    setLoading(false);
    return false;
  };

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem("User");
  };

  return (
    <AuthContext.Provider value={{ login, logout, user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
