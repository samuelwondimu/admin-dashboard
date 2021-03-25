import api from "../utils/api";

import { GET_PROFILES, PROFILE_ERROR } from "./types";

// Get all profiles
export const getAllProfiles = () => async (dispatch) => {
  try {
    const res = await api.get("/profile");
    dispatch({
      type: GET_PROFILES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
