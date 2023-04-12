import { RegisterTypes } from "./actionTypes";

export const registerUser = (user: any, history: any) => {
  return {
    type: RegisterTypes.REGISTER_USER,
    payload: { user, history },
  };
};

export const registerUserSuccessful = (user: any) => {
  return {
    type: RegisterTypes.REGISTER_USER_SUCCESSFUL,
    payload: user,
  };
};

export const registerUserFailed = (user: any) => {
  return {
    type: RegisterTypes.REGISTER_USER_FAILED,
    payload: user,
  };
};
