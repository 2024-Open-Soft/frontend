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
        console.log(data);
        createToast(response.data.message, "success");
        return response
    } 
    catch (error) {
        createToast("Error in getting payment link", "error")
        console.error(error);
    }
}