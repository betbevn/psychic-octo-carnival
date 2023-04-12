import { call, put, takeEvery } from "redux-saga/effects";

// Login Redux States
import { postLogin } from "api/api";
import { LoginTypes } from "./actionTypes";
import { apiError, loginSuccess } from "./actions";

import * as url from "../../../helper/url_helper";
import { UserEntity } from "@/types/common";

function* loginUser({ payload: { user, history } }: any) {
  try {
    const response: Promise<UserEntity> = yield call(
      postLogin,
      url.AMBASSADOR_LOGIN,
      {
        email: user.email,
        password: user.password,
      }
    );
    localStorage.setItem("authUser", JSON.stringify(response));
    yield put(loginSuccess(response));
    history.push("/dashboard");
  } catch (error) {
    yield put(apiError(error));
  }
}

function* logoutUser({ payload: { history } }: any) {
  try {
    localStorage.removeItem("authUser");
    history.push("/login");
  } catch (error) {
    yield put(apiError(error));
  }
}

function* authSaga() {
  yield takeEvery(LoginTypes.LOGIN_USER, loginUser);
  yield takeEvery(LoginTypes.LOGOUT_USER, logoutUser);
}

export default authSaga;
