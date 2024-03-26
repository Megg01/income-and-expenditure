import axios from "axios";
import { API } from "@/config";
import { showMessage } from "react-native-flash-message";
import uriToBase64 from "./uriToBase64";
import dayjs from "dayjs";
import uriToFile from "./uriToFile";
import uploadImage from "./uploadImage";

interface Props {
  method: string;
  url: string;
  isNotification?: boolean;
  body?: Object | null | any;
}

const request = async ({
  method,
  url,
  isNotification = false,
  body = null,
}: Props) => {
  console.log("🚀 ~ body:", body);
  let result = null;
  let image: any = null;

  if (body?.image) {
    image = await uriToBase64(body?.image);
    const a = uploadImage(image);
    console.log("🚀 ~ image:", a);
  }

  // await axios({
  //   method,
  //   url: API + url,
  //   data: body,
  //   headers: {
  //     "Content-Type": "application/json; multipart/form-data; charset=utf-8",
  //   },
  // })
  //   .then((response: any) => {
  //     result = response?.data;
  //     if (isNotification) {
  //       showMessage({
  //         message: response?.message,
  //         type: "success",
  //       });
  //     }
  //   })
  //   .catch((error) => {
  //     showMessage({
  //       message: error?.message,
  //       type: "warning",
  //     });
  //   });

  return result;
};

export default request;
