import axios from "axios";
import { setUser } from "../reducers/User";

export async function fetchUserData(dispatch) {
  if (localStorage.getItem("token")) {
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await axios.get(`/user/profile`, config)
    const data = response.data.data;
    dispatch(setUser(data.user));
    return response
  }
}

export const login = async (dispatch, payload) => {
  const response = await axios.post("/user/login", payload);
  const data = response.data.data;
  console.log("data: ", data);
  dispatch(setUser(data.user));
  localStorage.setItem("token", response.data.data.token);
  return response;
}
