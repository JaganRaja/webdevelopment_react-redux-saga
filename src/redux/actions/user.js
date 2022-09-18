import * as types from "../types";

export function getUser() {
  console.log("users inside action");
  return {
    type: types.GET_USERS_REQUESTED,
  };
}

// export const getUser = (users) => (dispatch) => {
//   dispatch({ type: types.GET_USERS, payload: users });
// };

// Uncaught Error: Actions must be plain objects.Instead, the actual type was: 'function'.
// You may need to add middleware to your store setup to handle dispatching other values, such
// as 'redux-thunk' to handle dispatching functions.
