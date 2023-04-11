import { post } from "helper/api_helper";

const postRegister = (url: string, data: any) => post(url, data);
const postLogin = (url: string, data: any) => post(url, data);

export { postRegister, postLogin };
