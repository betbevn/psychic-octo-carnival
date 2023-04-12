import { RegisterStore } from "@/types/store/register/register";
import { RegisterTypes } from "./actionTypes";

const initialState: RegisterStore = {
  registrationError: null,
  message: null,
  loading: false,
  user: undefined,
};

const register = (state = initialState, action: any) => {
  switch (action.type) {
    case RegisterTypes.REGISTER_USER:
      state = {
        ...state,
        loading: true,
        registrationError: null,
      };
      break;
    case RegisterTypes.REGISTER_USER_SUCCESSFUL:
      state = {
        ...state,
        loading: false,
        user: action.payload,
        registrationError: null,
      };
      break;
    case RegisterTypes.REGISTER_USER_FAILED:
      state = {
        ...state,
        user: undefined,
        loading: false,
        registrationError: action.payload,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default register;
