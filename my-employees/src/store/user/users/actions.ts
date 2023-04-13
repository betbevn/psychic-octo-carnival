import { ProfileTypes } from "./actionTypes";

// Get all users
export const getAllUsers = (params: any) => {
  return {
    type: ProfileTypes.GET_ALL_USERS,
    payload: { params },
  };
};

export const getAllUsersSuccess = (reponse: any) => {
  return {
    type: ProfileTypes.GET_ALL_USERS_SUCCESSFUL,
    payload: reponse,
  };
};

export const getAllUsersFailed = (error: any) => {
  return {
    type: ProfileTypes.GET_ALL_USERS_FAILED,
    payload: error,
  };
};

// Get user info
export const getUserInfo = (id: string) => {
  return {
    type: ProfileTypes.GET_USER_INFO,
    payload: { id },
  };
};

export const getUserInfoSuccess = (reponse: any) => {
  return {
    type: ProfileTypes.GET_USER_INFO_SUCCESSFUL,
    payload: reponse,
  };
};

export const getUserInfoFailed = (error: any) => {
  return {
    type: ProfileTypes.GET_USER_INFO_FAILED,
    payload: error,
  };
};
