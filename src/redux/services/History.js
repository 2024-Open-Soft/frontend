import axios from "axios";
import createToast from "../../utils/createToast";

export const updateHistory = async data => {
    try {
        const headers = {
            "Content-type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        }
        const response = await axios.post(`/movie/history`, data, { headers })

        return response;
    } catch (error) {
        console.error(error);
        if(error?.response.status === 401){
            localStorage.removeItem("token");
            return
        }
        createToast("Error in updating history", "error");
        createToast(error?.response?.data?.error, "error");
        console.error(error);
    }
}