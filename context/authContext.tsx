import React from "react";
import { useStorageState } from "./useStorageState";
import axios from "axios";

const API = "http://192.168.1.3:5000/api";

const AuthContext = React.createContext<{
  signIn: (email: string, password: string) => Promise<boolean>;
  signUp: (
    fname: string,
    lname: string,
    email: string,
    password: string
  ) => Promise<boolean>;
  signOut: () => void;
  token?: string | null;
  isLoading: boolean;
}>({
  signIn: async () => false,
  signUp: async () => false,
  signOut: () => {},
  token: "",
  isLoading: false,
});

export function useToken() {
  const value = React.useContext(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }
  return value;
}

export function TokenProvider(props: React.PropsWithChildren<any>) {
  const [[isLoading, token], setToken] = useStorageState("token");

  const signIn = async (email: string, password: string) => {
    try {
      const response = await axios.post(API + "/auth/login", {
        email: email,
        password: password,
      });

      if (response?.data?.success && response?.status == 200) {
        console.log("🚀 ~ signIn ~ response:", response?.data?.token);
        setToken(response?.data?.token);
        return true;
      }
      return false;
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    }
  };

  const signUp = async (
    fname: string,
    lname: string,
    email: string,
    password: string
  ) => {
    try {
      const response = await axios.post(API + "/auth/signup", {
        fname: fname,
        lname: lname,
        email: email,
        password: password,
      });

      if (response?.data?.success && response.status === 200) {
        return true;
      }
      return false;
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    }
  };

  const signOut = () => {
    setToken("");
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signUp,
        signOut,
        token,
        isLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
