import { getAuth, post } from "helper/api_helper";

// Without Auth
const postRegister = (url: string, data: any) => post(url, data);
const postLogin = (url: string, data: any) => post(url, data);

// With Auth

const getProfileAuth = (url: string) => getAuth(url);

export { postRegister, postLogin, getProfileAuth };
