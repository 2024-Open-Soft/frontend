import axios from "axios";
import { setUser } from "../reducers/User";

export const generateOTP = async (payload) => {
    const headers = {
        "Content-Type": "application/json",
    }
    if (payload.email) headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`

    const response = await axios.post("/otp/generate", payload, {
        headers
    });
    const data = response.data.data;
    console.log(data);
    localStorage.setItem("token", response.data.data.token);
    return response;
}

export const verifyOTP = async (payload) => {
    const response = await axios.post("/otp/verify", payload, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        }
    });
    const data = response.data.data;
    console.log(data);
    localStorage.setItem("token", response.data.data.token);
    return response;
}

export const register = async (dispatch, payload) => {
    const response = await axios.post("/user/register", payload, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        }
    });
    const data = response.data.data;
    console.log(data);
    localStorage.setItem("token", response.data.data.token);
    dispatch(setUser(data.user));
    return response;
}
