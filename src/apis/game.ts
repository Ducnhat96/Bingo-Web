import axios from "axios";
import { API_URL } from "../../utils";
import { CreateGameParams } from "@/types";

const getListOfGameApi = () => {
  return axios.get(`${API_URL}/games`).then((res) => res.data?.data);
};

const createNewGameApi = (body: CreateGameParams) => {
  return axios.post(`${API_URL}/games`, body).then((res) => res.data?.data);
};

const getDetailGameApi = (id: string) => {
  return axios.get(`${API_URL}/games/${id}`).then((res) => res.data?.data);
};

const joinGameApi = (id: string) => {
  return axios
    .post(`${API_URL}/games/${id}/join`)
    .then((res) => res.data?.data);
};

const startGameApi = (id: string) => {
  return axios
    .put(`${API_URL}/games/${id}/start`)
    .then((res) => res.data?.data);
};

const endGameApi = (id: string) => {
  return axios.put(`${API_URL}/games/${id}/end`).then((res) => res.data?.data);
};

const randomNumberOfGameApi = (id: string) => {
  return axios
    .put(`${API_URL}/games/${id}/random`)
    .then((res) => res.data?.data);
};

const bingoOfGameApi = (id: string) => {
  return axios
    .post(`${API_URL}/games/${id}/bingo`)
    .then((res) => res.data?.data);
};

export {
  getListOfGameApi,
  createNewGameApi,
  getDetailGameApi,
  joinGameApi,
  startGameApi,
  endGameApi,
  randomNumberOfGameApi,
  bingoOfGameApi,
};
