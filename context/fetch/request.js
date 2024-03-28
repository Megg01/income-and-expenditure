import axios from "axios";
import { API } from "@/config";
import { showMessage } from "react-native-flash-message";
import dayjs from "dayjs";
import uriToBase64 from "../../utils/uriToBase64";
// interface Props {
//   method?: string;
//   url: string;
//   model?: string;
//   ismessage?: boolean;
//   body?: Object | null | any;
// }

/**
 * Makes a HTTP request.
 * @param {{ method?: string, url: string, model?: string, ismessage?: boolean, body?: object | null }} params - The request parameters.
 */

const request = async ({
  method = "GET",
  url,
  model,
  ismessage = false,
  body = null,
}) => {
  let result = null;
  let image = null;
  let response = null;
  try {
    if (body?.image) {
      image = await uriToBase64(body.image);
    }

    if (method === "GET") {
      response = await axios({
        method,
        responseEncoding: "utf8",
        url: API + url,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      });
    } else {
      response = await axios({
        method,
        responseEncoding: "utf8",
        url: API + url,
        data: { ...body, image },
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json; charset=utf-8",
        },
      });
    }
    if (response) {
      result = response?.data;
      if (!result) {
        showMessage({
          message: "Хүсэлт илгээхэд алдаа гарлаа",
          type: "danger",
        });
      }
      if (ismessage && result) {
        showMessage({
          message:
            result?.message || (result?.success ? "Амжилттай" : "Амжилтгүй"),
          type: result?.success ? "success" : "warning",
        });
      }
    }
  } catch (error) {
    if (ismessage) {
      showMessage({
        message: "Хүсэлт илгээхэд алдаа гарлаа",
        type: "danger",
      });
    }
  }
  return result;
};

export default request;
