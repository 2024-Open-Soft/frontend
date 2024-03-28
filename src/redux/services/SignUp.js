import axios from "axios";
import { setUser } from "../reducers/User";
import createToast from "../../utils/createToast";

export const generateOTP = async (payload) => {
    try {
        const headers = {
            "Content-Type": "application/json",
        }
        if (payload.email) headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`

        const response = await axios.post("/otp/generate", payload, {
            headers
        });
        const data = response.data.data;
        console.log(data);
        createToast(response.data.message, "success");
        localStorage.setItem("temp-token", response.data.data.token);
        return response;
    }
    catch (error) {
        createToast("Error in generating OTP", "error");
        createToast(error?.response?.data?.error, "error");
        console.error(error);
    }
}

export const verifyOTP = async (payload) => {
    try {
        const response = await axios.post("/otp/verify", payload, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("temp-token")}`,
            }
        });
        const data = response.data.data;
        console.log(data);
        createToast(response.data.message, "success");
        localStorage.setItem("temp-token", response.data.data.token);
        return response;
    }
    catch (error) {
        createToast("Error in verifying OTP", "error");
        createToast(error?.response?.data?.error, "error");
        console.error(error);
    }
}

export const register = async (dispatch, payload) => {
    try {
        const response = await axios.post("/user/register", payload, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("temp-token")}`,
            }
        });
        const data = response.data.data;
        console.log(data);
        localStorage.setItem("token", response.data.data.token);
        dispatch(setUser(data.user));
        createToast("User registered successfully", "success");
        return response;
    }
    catch (error) {
        if(error?.response?.data?.error === "Token expired") {
            localStorage.removeItem("temp-token");
            createToast("OTP expired. Please try again", "error");
        }
        createToast(error?.response?.data?.error, "error")
        console.error(error);
    }
}
