import axios from 'axios';
import createToast from '../../utils/createToast';

export const postComment = async (payload) => {
    try {
        const headers = {
            "Content-type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        }
        console.log(payload)
        const response = await axios.post(`/comment`, payload, { headers });
        const data = response.data.data;
        createToast(response.data.message, "success");
        console.log("data: ", data)
        return data;
    } catch (error) {
        createToast("Error in posting comment", "error")
        console.error(error);
    }
}