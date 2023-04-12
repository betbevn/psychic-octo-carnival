import { combineReducers } from "redux";

//login
import login from "./auth/login/reducer";

//register
import register from "./auth/register/reducer";

// User Profile
import profile from "./auth/profile/reducer";

const rootReducer = combineReducers({
  login,
  register,
  profile,
});

export default rootReducer;
