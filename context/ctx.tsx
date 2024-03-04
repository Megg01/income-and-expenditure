import React from "react";
import { useStorageState } from "./useStorageState";
import axios from "axios";

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
  token: null,
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
      const response = await axios({
        method: "post",
        url: "http://192.168.1.3:5000/api/users/login",
        data: {
          email: email,
          password: password,
        },
      });

      if (response?.data?.success && response?.status == 200) {
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
      const response = await axios({
        method: "post",
        url: "http://localhost:5000/api/users/signup",
        data: {
          fname: fname,
          lname: lname,
          email: email,
          password: password,
        },
      });

      if (response.status === 200) {
        setToken("xxx");
        return true;
      }
      return false;
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    }
  };

  const signOut = () => {
    setToken(null);
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
