import React, {
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";

interface GlobalContextInterface {
  user: string | undefined;
  setUser: (user: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

const GlobalContext = createContext<GlobalContextInterface>(
  {} as GlobalContextInterface
);

const GlobalProvider = (props: React.PropsWithChildren<any>) => {
  const [user, setUser] = useState<string | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <GlobalContext.Provider value={{ user, setUser, loading, setLoading }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
