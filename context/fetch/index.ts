import axios from "axios";
import React from "react";

const API = "http://192.168.1.3:5000/api/";

interface RequestInterface {
  url: string;
  body?: any;
  model: any;
  method?: "POST" | "PUT" | "DELETE" | "GET" | "PATCH";
  isfiles?: boolean;
  clear?: boolean;
  ismessage?: boolean;
  accesstoken: string;
  dispatchEvent?: React.Dispatch<any>;
}

function request({ method = "GET", url, body, accesstoken, isfiles = false, ismessage = false, clear = false, model }: RequestInterface) {
  const headers = {
    Authorization: `Bearer ${accesstoken}`,
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json, text/plain, */*",
    "Access-Control-Allow-Headers": "*",
  };

  return axios.request({
    headers,
    method,
    url: API + url,
    data: body,
  });
}

function fetchRequest({
  url,
  body,
  clear,
  model,
  ismessage,
  method,
  isfiles,
  accesstoken,
  dispatchEvent,
}: RequestInterface) {
  try {
    dispatchEvent?.({ type: "request", clear });
    return request({
      url,
      method,
      body,
      isfiles,
      ismessage,
      clear,
      accesstoken,
      model,
    }).then((res) => {
      res?.status === 200 &&
        dispatchEvent?.({ clear, response: res, type: "response" });
      !(res?.status === 200) &&
        dispatchEvent?.({ type: "error", response: res });

      return res;
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    dispatchEvent?.({ type: "error", message: error });
    return error;
  }
}

export { fetchRequest };
