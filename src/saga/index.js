import { all } from "redux-saga/effects";

import userSaga from "./userSaga";
import helloSaga from "./helloSaga";

export default function* rootSaga() {
  yield all([helloSaga(), userSaga()]);
}
