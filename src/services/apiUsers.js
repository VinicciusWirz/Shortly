import axios from "axios";
import headerGen from "../utils/headerGen";

const url = process.env.REACT_APP_API_URL;

function userLinks(token) {
  const config = headerGen(token);
  return axios.get(`${url}/users/me`, config);
}

function ranks() {
  return axios.get(`${url}/`);
}

const apiUsers = { userLinks, ranks };
export default apiUsers;
