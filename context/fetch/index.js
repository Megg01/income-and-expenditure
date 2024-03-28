import { Platform } from "react-native";

export function request({ url, method, body, isfiles, signal }) {
  return fetch(url, {
    method,
    signal,
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json, text/plain, */*",
      "Access-Control-Allow-Headers": "*",
      Authorization: Authorization,
      "user-agent": JSON.stringify({ isMobileApp: true, os: Platform.OS }),
    },
    credentials: "include",
    body: JSON.stringify(body),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return {
        success: false,
        message: `Хүсэлт илгээхэд алдаа гарлаа`,
      };
    });
}

function fetchRequest({ url, body, model, props, method, dispatchEvent }) {
  try {
    dispatchEvent({ type: model.request, clear });
    return request({
      url,
      method,
      body,
      props,
      isfiles,
      accesstoken,
      signal,
    }).then((res) => {
      res.success &&
        dispatchEvent({
          clear,
          response: res,
          type: model.response,
        });
      !res.success &&
        dispatchEvent({ type: model.error, response: res, iserrclear });

      return res;
    });
  } catch (error) {
    return error;
  }
}

export { fetchRequest };
