import React, {
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

// const API = "http://192.168.1.3:5000/api";
const API = "http://10.150.10.70:5000/api";

interface AuthContextInterface {
  token: string | null;
  isAuthenticated: boolean;
  login(email: string, password: string): Promise<boolean>;
  logout(): Promise<boolean>;
}

const AuthContext = createContext<AuthContextInterface>({} as AuthContextInterface);

const AuthProvider = (props: React.PropsWithChildren<any>) => {
  const [token, setToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loadToken = async () => {
    const storedToken = await SecureStore.getItemAsync("token");
    setToken(storedToken);
    setIsAuthenticated(!!storedToken);
  };

  useEffect(() => {
    loadToken();
  }, []);

  const login = async (email: string, password: string) => {
    const response = await axios.post(API + "/auth/login", {
      email: email,
      password: password,
    });

    if (response?.data?.success && response?.status === 200) {
      const token1 = response?.data?.token;
      await SecureStore.setItemAsync("token", token1);
      console.log(" ~ login ~ token1:", token1);
      setToken(token1);
      setIsAuthenticated(true);
      return true;
    } else {
      console.error("Login failed:", response?.statusText);
      return false;
    }
  };

  const logout = async () => {
    await SecureStore.deleteItemAsync("token");
    setToken(null);
    setIsAuthenticated(false);
    return true;
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
