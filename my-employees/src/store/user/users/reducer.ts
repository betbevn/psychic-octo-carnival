import { UsersStore } from "@/types/store/users/users";
import { ProfileTypes } from "./actionTypes";

const initialState: UsersStore = {
  error: "",
  users: [],
  userInfo: undefined,
};

const profile = (state = initialState, action: any) => {
  switch (action.type) {
    case ProfileTypes.GET_ALL_USERS:
      state = { ...state };
      break;
    case ProfileTypes.GET_ALL_USERS_SUCCESSFUL:
      state = { ...state, users: action.payload };
      break;
    case ProfileTypes.GET_ALL_USERS_FAILED:
      state = { ...state, error: action.payload };
      break;
    case ProfileTypes.GET_USER_INFO:
      state = { ...state };
      break;
    case ProfileTypes.GET_USER_INFO_SUCCESSFUL:
      state = { ...state, userInfo: action.payload };
      break;
    case ProfileTypes.GET_USER_INFO_FAILED:
      state = { ...state, error: action.payload };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default profile;
