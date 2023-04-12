import { ProfileTypes } from "./actionTypes";

// Update Profile
export const editProfile = (user: any) => {
  return {
    type: ProfileTypes.EDIT_PROFILE,
    payload: { user },
  };
};

export const editProfileSuccess = (msg: any) => {
  return {
    type: ProfileTypes.EDIT_PROFILE_SUCCESS,
    payload: msg,
  };
};

export const editProfileFailed = (error: any) => {
  return {
    type: ProfileTypes.EDIT_PROFILE_FAILED,
    payload: error,
  };
};

// Get Profile
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

export const getProfileError = (error: any) => {
  return {
    type: ProfileTypes.GET_PROFILE_FAILED,
    payload: error,
  };
};
