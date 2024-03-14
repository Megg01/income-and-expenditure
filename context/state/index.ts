import React, { createContext, useReducer } from "react";
import * as Native from "react-native";
import { MessageType, showMessage } from "react-native-flash-message";

import { appReducer } from "../";
import { API, initial } from "../../config";
import { fetchRequest } from "../fetch";
import { useRouter } from "expo-router";

const models: any = {};

export const GlobalContext = createContext(initial);


interface RequestInterface {
  url: string;
  model: string;
  body?:any;
  method? : "POST" | "PUT" | "DELETE" | "GET" | "PATCH";
  isfiles: boolean;
  clear: boolean;
  ismessage: boolean;
  accesstoken: string;
}

export const GlobalProvider = (props: React.PropsWithChildren) => {
  const router = useRouter();
  const [state, dispatch] = useReducer(appReducer, { ...initial });

  const addmodel = ({ model }:any) => {
    models[model] = {
      request: `request_${model}`,
      response: `response_${model}`,
      error: `error_${model}`,
    };
  };

  const request = async ({
    url = "",
    model = "",
    body = {},
    method = "GET",
    isfiles = false,
    clear = false,
    ismessage = false,
    accesstoken = "",
  }:RequestInterface) => {
    addmodel({ model: model || url });
    return fetchRequest({
      body,
      clear,
      method,
      isfiles,
      ismessage,
      url: API + url,
      dispatchEvent: dispatch,
      model: models[model || url],
      accesstoken: state.resaccesstoken || accesstoken,
    }).then((res: any) => {
      if (!ismessage) {
        return res;
      }

      if (ismessage && !state.reschecknetwork) {
        notification({ ...res, type: "success" });
      }

      if (res?.status === 401) {
        router?.navigate?.("/(sign-in)");
        return res;
      }

      if (!(res.success || state.reschecknetwork)) {
        console.log("%c Line:78 🍻", "color:#e41a6a", API + url);
        notification({ ...res, type: "warning" });
      }

      return res;
    });
  };

  const setAuth = (res: any) => dispatch({ type: "autsetauthh", response: res });
  const setLanguage = (lang: any) => dispatch({ type: "language", response: lang });
  const clearModel = (model: any) => dispatch({ type: "clearmodel", model: model });
  const clearContext = () => dispatch({ type: "clearcontext" });
  const setModel = ({ model, res }:any) =>
    dispatch({ type: "setmodel", model: model, response: res });

  const notification = ({ type, message, code, data }:{type: MessageType, message: string, code: string, data: any}) => {
    return showMessage({
      type: type,
      message: message,
      backgroundColor: "#fff",
      // code,
      // data,
    });
  };

  const setlogin = (islogged: boolean) =>
    dispatch({ type: "mobileauth", response: islogged });


  return (
    <GlobalContext.Provider
      value={{
        request,
        setAuth,
        ...state,
        setlogin,
        setModel,
        clearModel,
        setLanguage,
        notification,
        clearContext,
        HomeWidgetRef: React.useRef(),
      }}
    >
    {props?.children}
    </GlobalContext.Provider>
  );
};
