import { getAuth, post, putAuth } from "helper/api_helper";

// Without Auth

const postRegister = (url: string, data: any) => post(url, data);
const postLogin = (url: string, data: any) => post(url, data);

// With Auth

const getProfileAuth = (url: string) => getAuth(url);
const putProfileAuth = (url: string, data: any) => putAuth(url, data);

export { postRegister, postLogin, getProfileAuth, putProfileAuth };
