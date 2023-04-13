import axios, { AxiosRequestConfig } from "axios";
import * as url from "./url_helper";

const API_URL = url.BASE_URL;

const axiosApi = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  withCredentials: false,
});

const axiosApiAuth = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  withCredentials: false,
});

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const data = JSON.parse(localStorage.getItem("authUser") || "");
  const token = data.data.jwt;
  config.headers!.Authorization = `Bearer ${token || ""}`;
  return config;
};

axiosApiAuth.interceptors.request.use(onRequest);

axiosApiAuth.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

// Without Auth
export async function get(url: string, config = {}) {
  return await axiosApi
    .get(url, { ...config })
    .then((response) => response.data);
}

export async function post(url: string, data: any, config = {}) {
  return axiosApi
    .post(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function put(url: string, data: any, config = {}) {
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function del(url: string, config = {}) {
  return await axiosApi
    .delete(url, { ...config })
    .then((response) => response.data);
}

// With Auth
export async function getAuth(url: string, config = {}) {
  return await axiosApiAuth
    .get(url, { ...config })
    .then((response) => response.data);
}

export async function postAuth(url: string, data: any, config = {}) {
  return axiosApiAuth
    .post(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function putAuth(url: string, data: any, config = {}) {
  return axiosApiAuth
    .put(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function delAuth(url: string, config = {}) {
  return await axiosApiAuth
    .delete(url, { ...config })
    .then((response) => response.data);
}
