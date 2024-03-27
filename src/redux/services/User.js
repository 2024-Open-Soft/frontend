import axios from "axios";
import { setUser } from "../reducers/User";
import createToast from "../../utils/createToast";

export async function fetchUserData(dispatch) {
  try {
    if (localStorage.getItem("token")) {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const response = await axios.get(`/user/profile`, config)
      const data = response.data.data;
      console.log("data: ", data)
      dispatch(setUser(data.user));
      return response;
    }
  }
  catch (err) {
    createToast("Error in fetching user data", "error")
    console.log(err);
  }
}

export async function editUserData(dispatch, data) {
  try {
    if (localStorage.getItem("token")) {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const body = {
        name: data.name ? data.name : undefined,
        genres: data.genres || [],
        languages: data.languages || [],
        password: data.password ? data.password : undefined,
      };

      const response = await axios.put(`/user/profile`, body, config)
      const resData = response.data.data;
      createToast(response.data.message, "success");
      console.log("data: ", resData)
      dispatch(setUser(resData.user));
      return response;
    }
  }
  catch (err) {
    createToast("Error in editing user data", "error")
    console.log(err);
  }
}

export const login = async (dispatch, payload) => {
  try {
    const response = await axios.post("/user/login", payload);
    const data = response.data.data;
    console.log("data: ", data);
    dispatch(setUser(data.user));
    localStorage.setItem("token", response.data.data.token);
    createToast("Logged in successfully", "success");
    return response;
  }
  catch (err) {
    createToast("Error in logging in", "error")
    console.log(err);
  }
}
