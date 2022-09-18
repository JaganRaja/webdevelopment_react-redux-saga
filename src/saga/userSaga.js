//refernece

// https://redux-saga.js.org/docs/introduction/BeginnerTutorial/

// sagas.js module:

// import { put, takeEvery } from 'redux-saga/effects'

// const delay = (ms) => new Promise(res => setTimeout(res, ms))

// // ...

// // Our worker Saga: will perform the async increment task
// export function* incrementAsync() {
//   yield delay(1000)
//   yield put({ type: 'INCREMENT' })
// }

// // Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
// export function* watchIncrementAsync() {
//   yield takeEvery('INCREMENT_ASYNC', incrementAsync)
// }

import { call, put, takeEvery } from "redux-saga/effects";
const apiUrl = "https://jsonplaceholder.typicode.com/users";

function getApiData() {
  return fetch(apiUrl).then((response) =>
    response.json().catch((error) => error)
  );
}

//worker saga
function* fetchUser() {
  try {
    const users = yield call(getApiData);
    yield put({ type: "GET_USERS_SUCCESS", users: users });
  } catch (error) {
    console.log("inside catch");
    yield put({ type: "GET_USERS_FAILED", message: error.message });
  }
}

//watcher saga
// it watches GET_USERS_REQUESTED and once captures GET_USERS_REQUESTED, execute fetchUser
function* userSaga() {
  yield takeEvery("GET_USERS_REQUESTED", fetchUser);
}

export default userSaga;
