// BASE URL
export const BASE_URL = "http://localhost:8080/api/v1";

// REGISTER
export const ADMIN_REGISTER = "/admin/register";
export const AMBASSADOR_REGISTER = "/ambassador/register";

// LOGIN
export const ADMIN_LOGIN = "/admin/login";
export const AMBASSADOR_LOGIN = "/ambassador/login";

// UPDATE
export const UPDATE_ADMIN = "/admin/users/info";
export const UPDATE_AMBASSADOR = "/ambassador/users/info";

// UPDATE PASSWORD
export const UPDATE_PASSWORD_ADMIN = "/admin/users/password";
export const UPDATE_PASSWORD_AMBASSADOR = "/ambassador/users/password";

// GET PROFILE INFO
export const GET_PROFILE_INFO_ADMIN = "/admin/profile";
export const GET_PROFILE_INFO_AMBASSADOR = "/ambassador/profile";

// GET USER INFO
export const GET_USER_INFO_ADMIN = (id: string) => `/admin/user/info/${id}`;
export const GET_USER_INFO_AMBASSADOR = (id: string) =>
  `/ambassador/user/info/${id}`;

// GET ALL USERS
export const GET_ALL_USERS_ADMIN = "/admin/users";
export const GET_ALL_USERS_AMBASSADOR = "/ambassador/users";
