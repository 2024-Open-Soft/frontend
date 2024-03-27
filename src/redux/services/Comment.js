import axios from 'axios';

export const postComment = async (payload) => {
    try {
        const headers = {
            "Content-type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        }
        console.log(payload)
        const response = await axios.post(`/comment`, payload, { headers });
        const data = response.data.data;
        console.log("data: ", data)
        return data;
    } catch (error) {
        console.error(error);
    }
}