// import React, {
//   createContext,
//   useState,
// } from "react";

// interface GlobalContextInterface {
//   user: string | undefined;
//   setUser: (user: string) => void;
//   userInfo: any;
//   setUserInfo: (userInfo: any) => void;
//   loading: boolean;
//   setLoading: (loading: boolean) => void;
//   startLoading: () => void;
//   stopLoading: () => void;
// }

// const GlobalContext = createContext<GlobalContextInterface>(
//   {} as GlobalContextInterface
// );

// const GlobalProvider = (props: React.PropsWithChildren<any>) => {
//   const [user, setUser] = useState<string | undefined>();
//   const [loading, setLoading] = useState<boolean>(false);

//   const [userInfo, setUserInfo] = useState<any>();

//   const startLoading = () => {
//     setLoading(true);
//   };

//   const stopLoading = () => {
//     setLoading(false);
//   };

//   return (
//     <GlobalContext.Provider
//       value={{
//         user,
//         setUser,
//         userInfo,
//         setUserInfo,
//         loading,
//         setLoading,
//         startLoading,
//         stopLoading,
//       }}
//     >
//       {props.children}
//     </GlobalContext.Provider>
//   );
// };

// export { GlobalContext, GlobalProvider };
