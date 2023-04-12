import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import { getProfileAuth, getUserInfoAuth } from "api/api";
import * as url from "../../../helper/url_helper";
import { ProfileTypes } from "./actionTypes";
import {
  getAllUsersFailed,
  getAllUsersSuccess,
  getUserInfoSuccess,
} from "./actions";

function* getAllUsers() {
  try {
    const response: Promise<any> = yield call(
      getProfileAuth,
      url.GET_ALL_USERS_AMBASSADOR
    );
    yield put(getAllUsersSuccess(response));
  } catch (error) {
    yield put(getAllUsersFailed(error));
  }
}
function* getUserInfo({ payload: { id } }: any) {
  try {
    const response: Promise<any> = yield call(
      getUserInfoAuth,
      url.GET_USER_INFO_AMBASSADOR(id)
    );
    yield put(getUserInfoSuccess(response));
  } catch (error) {
    yield put(getAllUsersFailed(error));
  }
}
export function* watchProfile() {
  yield takeEvery(ProfileTypes.GET_ALL_USERS, getAllUsers);
  yield takeEvery(ProfileTypes.GET_USER_INFO, getUserInfo);
}

function* ProfileSaga() {
  yield all([fork(watchProfile)]);
}

export default ProfileSaga;
