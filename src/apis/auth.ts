import axios from "axios";
import { API_URL } from "../../utils";
import { CreateGameParams } from "@/types";

const loginApi = (params: any) => {
  return axios
    .post(`${API_URL}/authentications/login`, params)
    .then((res) => res.data?.data ?? res.data);
};
const createNewGameApi = (body: CreateGameParams) => {
  return axios.post(`${API_URL}/game`, body).then((res) => res.data?.data);
};

export { loginApi, createNewGameApi };
