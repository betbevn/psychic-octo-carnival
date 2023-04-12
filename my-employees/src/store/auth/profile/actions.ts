import { ProfileTypes } from "./actionTypes";

export const editProfile = (user: any) => {
  return {
    type: ProfileTypes.EDIT_PROFILE,
    payload: { user },
  };
};

export const profileSuccess = (msg: any) => {
  return {
    type: ProfileTypes.PROFILE_SUCCESS,
    payload: msg,
  };
};

export const profileError = (error: any) => {
  return {
    type: ProfileTypes.PROFILE_ERROR,
    payload: error,
  };
};

export const resetProfileFlag = () => {
  return {
    type: ProfileTypes.RESET_PROFILE_FLAG,
  };
};

export const getProfile = () => {
  return {
    type: ProfileTypes.GET_PROFILE,
  };
};

export const getProfileSuccess = (reponse: any) => {
  return {
    type: ProfileTypes.GET_PROFILE_SUCCESSFUL,
    payload: reponse,
  };
};

export const getProfileError = () => {
  return {
    type: ProfileTypes.GET_PROFILE_FAILED,
  };
};
