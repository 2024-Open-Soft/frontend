import axios from "axios";
import createToast from "../../utils/createToast";

export const getSubscriptionPlans = async () => {
    try {
        const response = await axios.get("/plan", {
            headers: {
                "Content-Type": "application/json",
            }
        });
        return response;
    }
    catch (error) {
        createToast(error?.response?.data?.error || "An error occurred", "error");
        console.error(error);
    }
}

export const getSubscriptionPlan = async (id) => {
    try {
        const response = await axios.get("/plan" + id, {
            headers: {
                "Content-Type": "application/json",
            }
        });
        return response;
    }
    catch (error) {
        createToast(error?.response?.data?.error || "An error occurred", "error");
        console.error(error);
    }
}