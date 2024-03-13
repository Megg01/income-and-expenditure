import axios from "axios";

const API = "http://192.168.1.3:5000/api/";

interface RequestInterface {
  method?: string;
  url: string;
  body?: object;
  accesstoken: string;
  isfiles?: boolean;
}
interface FetchRequestInterface {
  url: string;
  model: any;
  body: any;
  method?: "POST" | "PUT" | "DELETE" | "GET" | "PATCH";
  isfiles: boolean;
  clear: boolean;
  ismessage: boolean;
  accesstoken: string;
  dispatchEvent: any;
}

function request({ method = "GET", url, body, accesstoken }: RequestInterface) {
  const headers = {
    Authorization: `Bearer ${accesstoken}`,
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json, text/plain, */*",
    "Access-Control-Allow-Headers": "*",
  };

  if (body) {
    return axios.request({
      headers,
      method,
      url: API + url,
      data: body,
    });
  }
  return axios.request({
    headers,
    method,
    url: API + url,
  });
}

function fetchRequest({
  url,
  body,
  clear,
  model,
  method,
  isfiles,
  accesstoken,
  dispatchEvent,
}: FetchRequestInterface) {
  try {
    dispatchEvent({ type: model.request, clear });
    return request({
      url,
      method,
      body,
      isfiles,
      accesstoken,
    }).then((res) => {
      res?.status === 200 &&
        dispatchEvent({
          clear,
          response: res,
          type: model?.response,
        });
      !(res.status === 200) &&
        dispatchEvent({ type: model.error, response: res });
      // !res.success && console.log(url, method, body, res);

      return res;
    });
  } catch (error) {
    return error;
  }
}

export { fetchRequest };
