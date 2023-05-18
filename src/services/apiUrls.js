import axios from "axios";
import headerGen from "../utils/headerGen";

const url = `${process.env.REACT_APP_API_URL}/urls`;

function createShort(body, token) {
  const config = headerGen(token);
  return axios.post(`${url}/shorten`, body, config);
}

function deleteShort(id, token) {
  const config = headerGen(token);
  return axios.delete(`${url}/${id}`, config);
}

const apiUrls = { createShort, deleteShort };
export default apiUrls;
