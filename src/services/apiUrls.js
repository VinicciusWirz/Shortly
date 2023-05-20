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

function redirectShort(shortUrl) {
  return axios.get(`${url}/open/${shortUrl}`);
}

function getLinkInfo(id) {
  return axios.get(`${url}/${id}`);
}

function getRankUrlsList(id) {
  return axios.get(`${url}/user/${id}`);
}

const apiUrls = {
  createShort,
  deleteShort,
  redirectShort,
  getLinkInfo,
  getRankUrlsList,
};
export default apiUrls;
