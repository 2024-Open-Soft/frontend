import axios from "axios";
import { setUser } from "../reducers/User";

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
      console.log("data: ", resData)
      dispatch(setUser(resData.user));
      return response;
    }
  }
  catch (err) {
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
    return response;
  }
  catch (err) {
    console.log(err);
  }
}
