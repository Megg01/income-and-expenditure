import axios from "axios";

interface Props {
  method: string;
  url: string;
  isNotification?: boolean;
  body?: Object;
}


const request = async ({ method, url, isNotification = false, body={} }:Props) => {
  
  let result = null;
  
  await axios({
    method, url,
  }).then((response) => {
    result = response?.data;
  })
  return result;
}


export default request;