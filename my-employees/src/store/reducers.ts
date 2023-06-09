import { combineReducers } from "redux";
import { StoreState } from "../types";

//login
import login from "./auth/login/reducer";

//register
import register from "./auth/register/reducer";

// Profile
import profile from "./auth/profile/reducer";

// Profile

import users from "./user/users/reducer";

const rootReducer = combineReducers<StoreState>({
  login,
  register,
  profile,
  users,
});

export default rootReducer;
