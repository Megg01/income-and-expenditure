import React from "react";
import { useStorageState } from "./useStorageState";
import axios from "axios";

const AuthContext = React.createContext<{
  signIn: (email: string, password: string) => boolean;
  signUp: (
    fname: string,
    lname: string,
    email: string,
    password: string
  ) => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}>({
  signIn: () => false,
  signUp: () => false,
  signOut: () => false,
  session: null,
  isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = React.useContext(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }

  return value;
}

export function SessionProvider(props: React.PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState("session");

  return (
    <AuthContext.Provider
      value={{
        signIn: (email, password) => {
          axios({
            method: "get",
            url: "http://localhost:5000/api/users/login",
            data: {
              email: email,
              password: password,
            },
          }).then((response) => {
            if (response.status === 200) {
              setSession("xxx");
              return true;
            }
          });
          return false;
        },
        signUp: () => {
          setSession("xxx");
        },
        signOut: () => {
          setSession(null);
        },
        session,
        isLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
