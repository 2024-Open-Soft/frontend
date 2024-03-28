import axios from "axios";
import createToast from "../../utils/createToast";

export const getSubscriptionPlans = async () => {
    try {
        const response = await axios.get("/plan", {
            headers: {
                "Content-Type": "application/json",
            }
        });

        const data = response.data.data;
        console.log(data);

        return response;
    }
    catch (error) {
        createToast("Error in getting subscription plans", "error")
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

        const data = response.data.data;
        console.log(data);

        return response;
    }
    catch (error) {
        createToast("Error in getting subscription plan", "error")
        console.error(error);
    }
}