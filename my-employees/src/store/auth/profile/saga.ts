import { takeEvery, fork, put, all, call } from "redux-saga/effects";

// Login Redux States
import { ProfileTypes } from "./actionTypes";
import { profileSuccess, profileError, getProfileSuccess } from "./actions";
import { getProfileAuth } from "api/api";
import * as url from "../../../helper/url_helper";

//Include Both Helper File with needed methods

function* editProfile({ payload: { user } }: any) {
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      // yield put(profileSuccess(response));
    } else if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
      // const response: Promise<any> = yield call(postJwtProfile, "/post-jwt-profile",  {
      //   username: user.username,
      //   idx: user.idx,
      // })
      // yield put(profileSuccess(response))
    } else if (process.env.REACT_APP_DEFAULTAUTH === "fake") {
      // const response: Promise<any> = yield call(postFakeProfile, {
      //   username: user.username,
      //   idx: user.idx,
      // });
      // yield put(profileSuccess(response));
    }
  } catch (error) {
    yield put(profileError(error));
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
    yield put(profileError(error));
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
