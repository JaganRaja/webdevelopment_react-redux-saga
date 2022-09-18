//sample  worker saga
// ref: https://redux-saga.js.org/docs/introduction/BeginnerTutorial/
function* helloSaga() {
  yield console.log("Hello Sagas!");
}

export default helloSaga;
