import axios from "axios";
import { setUser } from "../reducers/User";
import createToast from "../../utils/createToast";

export async function fetchUserData(dispatch, navigate) {
  try {
    if (
      localStorage.getItem("token") &&
      !(localStorage.getItem("token") === "undefined")
    ) {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const response = await axios.get(`/user/profile`, config);
      const data = response.data.data;
      dispatch(setUser(data));
      return data;
    }
  } catch (error) {
    createToast(error?.response?.data?.error, "error");
    createToast("Please Re-Login", "error");
    localStorage.removeItem("token");
    console.log(error);
    navigate("/login");
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

      const response = await axios.put(`/user/profile`, body, config);
      const resData = response.data.data;
      createToast(response.data.message, "success");
      fetchUserData(dispatch);
      // console.log("data: ", resData)
      dispatch(setUser(resData.user));
      return response;
    }
  } catch (error) {
    createToast("Error in editing user data", "error");
    createToast(error?.response?.data?.error, "error");
    console.log(error);
  }
}

export const login = async (dispatch, payload) => {
  try {
    // console.log("payload: ", payload);
    const response = await axios.post("/user/login", payload);
    const data = response.data.data;
    // console.log("data: ", data);
    dispatch(setUser(data.user));
    localStorage.setItem("token", response.data.data.token);
    createToast("Logged in successfully", "success");
    return response;
  } catch (error) {
    createToast(error?.response?.data?.error, "error");
    console.log(error);
  }
};

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
  } catch (error) {
    createToast("Error in logging out", "error");
    createToast(error?.response?.data?.error, "error");
    console.log(error?.response?.data?.error);
  }
};
