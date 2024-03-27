import axios from "axios";

export const getPaymentLink = async (payload) => {

    const response = await axios.post("/payment/link", payload, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        }
    });
    const data = response.data.data;
    console.log(data);
    return response
}