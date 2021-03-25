import api from "../utils/api";
import { GET_USERS, USER_ERROR } from "./types";

// Get all users
export const getAllUsers = () => async (dispatch) => {
  try {
    const res = await api.get("/users");
    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
