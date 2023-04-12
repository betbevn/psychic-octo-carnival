import { all, fork } from "redux-saga/effects";

// Login
import authSaga from "./auth/login/saga";

// Register
import registerSaga from "./auth/register/saga";

// Profile
import profileSaga from "./auth/profile/saga";

// Users
import usersSaga from "./user/users/saga";

export default function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(registerSaga),
    fork(profileSaga),
    fork(usersSaga),
  ]);
}
