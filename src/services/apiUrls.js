import axios from "axios";
import headerGen from "../utils/headerGen";

const url = `${process.env.REACT_APP_API_URL}/urls`;

function createShort(body, token) {
  const config = headerGen(token);
  return axios.post(`${url}/shorten`, body, config);
}

const apiUrls = { createShort };
export default apiUrls;
