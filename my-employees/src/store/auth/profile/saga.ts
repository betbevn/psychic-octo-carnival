import { all, call, fork, put, takeEvery } from "redux-saga/effects";

// Login Redux States
import { getProfileAuth, putProfileAuth } from "api/api";
import * as url from "../../../helper/url_helper";
import { ProfileTypes } from "./actionTypes";
import {
  editProfileFailed,
  editProfileSuccess,
  getProfileError,
  getProfileSuccess,
} from "./actions";

//Include Both Helper File with needed methods

function* editProfile({ payload: { user } }: any) {
  try {
    const response: Promise<any> = yield call(
      putProfileAuth,
      url.UPDATE_AMBASSADOR,
      {
        first_name: user.firstName,
        last_name: user.lastName,
      }
    );
    yield put(editProfileSuccess(response));
  } catch (error) {
    yield put(editProfileFailed(error));
  }
}

function* getProfile() {
  try {
    const response: Promise<any> = yield call(
      getProfileAuth,
      url.GET_PROFILE_INFO_AMBASSADOR
    );
    yield put(getProfileSuccess(response));
  } catch (error) {
    yield put(getProfileError(error));
  }
}
export function* watchProfile() {
  yield takeEvery(ProfileTypes.GET_PROFILE, getProfile);
  yield takeEvery(ProfileTypes.EDIT_PROFILE, editProfile);
}

function* ProfileSaga() {
  yield all([fork(watchProfile)]);
}

export default ProfileSaga;
