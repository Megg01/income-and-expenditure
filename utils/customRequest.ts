import axios from "axios";
import { AuthContext } from "@/context/authContext";
import { useContext } from "react";

const API = "http://192.168.1.3:5000/api/";

interface Props {
  method?: string;
  url: string;
  data?: object;
}

const fetchRequest = ({ method = "GET", url, data }: Props) => {
  const context = useContext(AuthContext);
  const headers = { Authorization: `Bearer ${context?.token}` };

  if (data) {
    return axios.request({
      headers,
      method,
      url: API + url,
      data,
    });
  }
  return axios.request({
    headers,
    method,
    url: API + url,
  });
};

export default fetchRequest;
