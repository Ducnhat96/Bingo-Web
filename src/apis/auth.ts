import axios from "axios";
import { API_URL } from "../../utils";

const loginApi = (params: any) => {
  return axios
    .post(`${API_URL}/authentications/login`, params)
    .then((res) => res.data?.data ?? res.data);
};

export { loginApi };
