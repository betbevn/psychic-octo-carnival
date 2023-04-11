import { takeEvery, fork, put, all, call } from "redux-saga/effects";

//Account Redux states
import { RegisterTypes } from "./actionTypes";
import { registerUserSuccessful, registerUserFailed } from "./actions";

import * as url from "../../../helper/url_helper";
import { postRegister } from "api/api";

function* registerUser({ payload: { user } }: any) {
  try {
    const data = {
      first_name: user.firstName,
      last_name: user.lastName,
      email: user.email,
      password: user.password,
      password_confirm: user.passwordConfirm,
    };

    const response: Promise<any> = yield call(
      postRegister,
      url.AMBASSADOR_REGISTER,
      data
    );
    localStorage.setItem("authUser", JSON.stringify(response));
    yield put(registerUserSuccessful(response));
  } catch (error) {
    yield put(registerUserFailed(error));
  }
}

export function* watchUserRegister() {
  yield takeEvery(RegisterTypes.REGISTER_USER, registerUser);
}

function* registerSaga() {
  yield all([fork(watchUserRegister)]);
}

export default registerSaga;
