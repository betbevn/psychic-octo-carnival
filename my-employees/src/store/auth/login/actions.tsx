import { LoginPayload, UserEntity } from "@/types/common";
import { LoginTypes } from "./actionTypes";
import { History } from "history";

export const loginUser = (user: LoginPayload, history: History) => {
  return {
    type: LoginTypes.LOGIN_USER,
    payload: { user, history },
  };
};

export const loginSuccess = (user: Promise<UserEntity>) => {
  return {
    type: LoginTypes.LOGIN_SUCCESS,
    payload: user,
  };
};

export const logoutUser = (history: History) => {
  return {
    type: LoginTypes.LOGOUT_USER,
    payload: { history },
  };
};

export const logoutUserSuccess = (response: any) => {
  return {
    type: LoginTypes.LOGOUT_USER_SUCCESS,
    payload: response,
  };
};

export const apiError = (error: any) => {
  return {
    type: LoginTypes.API_ERROR,
    payload: error,
  };
};
