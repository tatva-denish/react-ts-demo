import axios from "./api";

//login user
export const fetchAuthService = credentials => {
  return axios.get(
    `/users?_limit=1&email=${credentials.email}&password=${credentials.password}`
  );
};
