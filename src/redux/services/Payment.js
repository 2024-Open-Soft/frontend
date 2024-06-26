import axios from "axios";
import createToast from "../../utils/createToast";

export const getPaymentLink = async (payload) => {
    try {
        const response = await axios.post("/payment/link", payload, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
            }
        });
        const data = response.data.data;
        createToast(response.data.message, "success");
        return response
    }
    catch (error) {
        if(error?.response?.data?.error || "An error occurred"?.startsWith("Token expired")){
            localStorage.removeItem("token");
        }
        createToast(error?.response?.data?.error || "An error occurred", "error")
        console.error(error);
        return { error: error?.response?.data?.error || "An error occurred" }
    }
}