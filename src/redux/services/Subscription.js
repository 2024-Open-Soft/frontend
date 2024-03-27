import axios from "axios";

export const getSubscriptionPlans = async () => {

    const response = await axios.get("/plan", {
        headers: {
            "Content-Type": "application/json",
        }
    });

    const data = response.data.data;
    console.log(data);

    return response;
}

export const getSubscriptionPlan = async (id) => {
    const response = await axios.get("/plan"+id, {
        headers: {
            "Content-Type": "application/json",
        }
    });

    const data = response.data.data;
    console.log(data);

    return response;
}