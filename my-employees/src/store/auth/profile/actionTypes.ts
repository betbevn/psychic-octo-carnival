/**
 *  interface for Login Type
 */
export enum ProfileTypes {
  EDIT_PROFILE = "@@profile/EDIT_PROFILE",
  PROFILE_SUCCESS = "@@profile/PROFILE_SUCCESS",
  PROFILE_ERROR = "@@profile/PROFILE_ERROR",
  RESET_PROFILE_FLAG = "@@profile/RESET_PROFILE_FLAG",

  GET_PROFILE = "@@register/GET_PROFILE",
  GET_PROFILE_SUCCESSFUL = "@@register/GET_PROFILE_SUCCESSFUL",
  GET_PROFILE_FAILED = "@@register/GET_PROFILE_FAILED",
}
