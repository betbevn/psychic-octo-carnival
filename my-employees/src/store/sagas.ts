import { all, fork } from "redux-saga/effects";

//Login
import authSaga from "./auth/login/saga";

//Register
import registerSaga from "./auth/register/saga";

//User Profile
import ProfileSaga from "./auth/profile/saga";

// Forget Password
import forgetPasswordSaga from "./auth/forgetpwd/saga";

export default function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(registerSaga),
    fork(ProfileSaga),
    fork(forgetPasswordSaga),
  ]);
}
