import * as types from "../types";

const initialState = {
  users: [],
  loading: false,
  error: "",
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case types.GET_USERS_REQUESTED:
      console.log("inside reducer get user requested");
      return {
        ...state,
        loading: true,
      };
    case types.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users,
      };
    case types.GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
}
