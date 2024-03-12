import React, {
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

interface GlobalContextInterface {
  token: string | null;
  //   isAuthenticated: boolean;
  //   login(email: string, password: string): Promise<boolean>;
  //   logout(): Promise<boolean>;
}

const GlobalContext = createContext<GlobalContextInterface>(
  {} as GlobalContextInterface
);

const GlobalProvider = (props: React.PropsWithChildren<any>) => {
  const token = "";
  return (
    <GlobalContext.Provider value={{ token }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
