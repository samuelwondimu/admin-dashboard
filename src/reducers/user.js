import { GET_USERS, USER_ERROR } from "../actions/types";

const initialState = {
  user: null,
  users: [],
  loading: true,
  error: {},
};

function userReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload,
        loading: false,
      };
    case USER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        user: null,
      };
    default:
      return state;
  }
}

export default userReducer;
