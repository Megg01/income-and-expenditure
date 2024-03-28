/**
 * @typedef {Object} 
 * @property {() => Promise<any>} request - The request function within the context.
 */

/**
 * @type {GlobalContext}
 */

import React, { createContext, useReducer } from "react";
import { showMessage } from "react-native-flash-message";

import { appReducer } from "../reducer";
import { API, initial } from "../../config";
import { fetchRequest } from "../fetch";

const models = {};

export const GlobalContext = createContext(initial);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(appReducer, { ...initial });

  const addmodel = ({ model }) => {
    models[model] = {
      request: `request_${model}`,
      response: `response_${model}`,
      error: `error_${model}`,
    };
  };

  const request = async ({
    url,
    model,
    body,
    method = "GET",
    clear = false,
    ismessage = false,
    props,
  }) => {
    addmodel({ model: model || url });
    const api = API;
    return fetchRequest({
      body,
      clear,
      method,
      props: props,
      url: api + url,
      dispatchEvent: dispatch,
      model: models[model || url],
    }).then((res) => {
      if (!ismessage) {
        return res;
      }

      if (ismessage && !state.reschecknetwork) {
        notification({ ...res, type: "success" });
      }

      if (!(res.success || state.reschecknetwork)) {
        console.log("%c Line:78 🍻", "color:#e41a6a", api + url);
        notification({ ...res, type: "warning" });
      }

      return res;
    });
  };

  const clearModel = (model) => dispatch({ type: "clearmodel", model: model });
  const clearContext = () => dispatch({ type: "clearcontext" });

  const setModel = ({ model, res }) =>
    dispatch({ type: "setmodel", model: model, response: res });

  const notification = ({ type, message, code, data }) => {
    return showMessage({
      icon: type,
      message: message,
      backgroundColor: "#fff",
      code,
      data,
    });
  };

  return (
    <GlobalContext.Provider
      {...props}
      value={{
        request,
        ...state,
        setModel,
        clearModel,
        notification,
        clearContext,
      }}
    />
  );
};
