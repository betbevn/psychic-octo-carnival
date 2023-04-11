import { all, fork, put, takeEvery } from "redux-saga/effects";

// Login Redux States
import { ForgetPwdTypes } from "./actionTypes";
import { userForgetPasswordError, userForgetPasswordSuccess } from "./actions";

//Include Both Helper File with needed methods

//If user is send successfully send mail link then dispatch redux action's are directly from here.
function* forgetUser({ payload: { user, history } }: any) {
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      yield put(
        userForgetPasswordSuccess(
          "Reset link are sended to your mailbox, check there first"
        )
      );
    } else if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
      yield put(
        userForgetPasswordSuccess(
          "Reset link are sended to your mailbox, check there first"
        )
      );
    } else {
      yield put(
        userForgetPasswordSuccess(
          "Reset link are sended to your mailbox, check there first"
        )
      );
    }
  } catch (error) {
    yield put(userForgetPasswordError(error));
  }
}

export function* watchUserPasswordForget() {
  yield takeEvery(ForgetPwdTypes.FORGET_PASSWORD, forgetUser);
}

function* forgetPasswordSaga() {
  yield all([fork(watchUserPasswordForget)]);
}

export default forgetPasswordSaga;
