import { combineReducers } from "redux";

//login
import login from "./auth/login/reducer";

//register
import register from "./auth/register/reducer";

// User Profile
import profile from "./auth/profile/reducer";

// Forget Password
import forgetPassword from "./auth/forgetpwd/reducer";

const rootReducer = combineReducers({
  login,
  register,
  profile,
  forgetPassword,
});

export default rootReducer;
