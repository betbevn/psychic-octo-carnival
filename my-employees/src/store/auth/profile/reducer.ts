import { ProfileTypes } from "./actionTypes";

const initialState = {
  error: "",
  success: "",
};

const profile = (state = initialState, action: any) => {
  switch (action.type) {
    case ProfileTypes.EDIT_PROFILE:
      state = { ...state };
      break;
    case ProfileTypes.EDIT_PROFILE_SUCCESS:
      state = { ...state, success: action.payload };
      break;
    case ProfileTypes.EDIT_PROFILE_FAILED:
      state = { ...state, error: action.payload };
      break;
    case ProfileTypes.GET_PROFILE:
      state = { ...state };
      break;
    case ProfileTypes.GET_PROFILE_SUCCESSFUL:
      state = { ...state, success: action.payload };
      break;
    case ProfileTypes.GET_PROFILE_FAILED:
      state = { ...state, error: action.payload };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default profile;
