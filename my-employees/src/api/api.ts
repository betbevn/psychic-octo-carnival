import { get, getAuth, post, putAuth } from "helper/api_helper";

// Without Auth

const postRegister = (url: string, data: any) => post(url, data);
const postLogin = (url: string, data: any) => post(url, data);
const getAllUsers = (url: string, params: any) => get(url, { params });

// With Auth

const getProfileAuth = (url: string) => getAuth(url);
const putProfileAuth = (
  url: string,
  data: { first_name: string; last_name: string }
) => putAuth(url, data);
const getUserInfoAuth = (url: string) => getAuth(url);

export {
  postRegister,
  postLogin,
  getProfileAuth,
  putProfileAuth,
  getAllUsers,
  getUserInfoAuth,
};
