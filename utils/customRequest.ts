import axios from "axios";
import { API } from "@/config";
import { showMessage } from "react-native-flash-message";
import dayjs from "dayjs";
import uriToBase64 from "./uriToBase64";
interface Props {
  method?: string;
  url: string;
  isNotification?: boolean;
  body?: Object | null | any;
}

const request = async ({
  method = "GET",
  url,
  isNotification = false,
  body = null,
}: Props) => {
  console.log("🚀 ~ body:", body);
  let result = null;
  let image: any = null;
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
      if (isNotification && result) {
        showMessage({
          message:
            result?.message || (result?.success ? "Амжилттай" : "Амжилтгүй"),
          type: result?.success ? "success" : "warning",
        });
      }
    }
  } catch (error) {
    if (isNotification) {
      showMessage({
        message: "Хүсэлт илгээхэд алдаа гарлаа",
        type: "danger",
      });
    }
  }
  return result;
};

export default request;
