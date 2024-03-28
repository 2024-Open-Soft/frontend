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
      dispatch(setUser(data));
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
    console.log("payload: ", payload);
    const response = await axios.post("/user/login", payload);
    const data = response.data.data;
    console.log("data: ", data);
    dispatch(setUser(data.user));
    localStorage.setItem("token", response.data.data.token);
    createToast("Logged in successfully", "success");
    return response;
  }
  catch (err) {
    createToast(err.response.data.error, "error")
    console.log(err);
  }
}

export const logout = async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await axios.get("/user/logout", config);
    dispatch(setUser(null));
    localStorage.removeItem("token");
    createToast("Logged out successfully", "success");
    return response;
  }
  catch (err) {
    createToast("Error in logging out", "error")
    console.log(err.response.data.error);
  }
}
