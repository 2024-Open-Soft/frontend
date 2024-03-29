import axios from 'axios';
import createToast from '../../utils/createToast';

export const postComment = async (payload) => {
    try {
        const headers = {
            "Content-type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        }
        // console.log(payload)
        const response = await axios.post(`/comment`, payload, { headers });
        const data = response.data.data;
        createToast(response.data.message, "success");
        // console.log("data: ", data)
        return data;
    } catch (error) {
        createToast("Error in posting comment", "error");
        createToast(error?.response?.data?.error, "error");
        console.error(error);
    }
}

export const getComments = async (movie_id) => {
    try {
        const headers = {
            "Content-type": "application/json",
        }
        const response = await axios.get(`/comment?${movie_id}`, { headers });
        const data = response.data.data;
        // console.log(data);
        return data;
    }
    catch (error) {
        createToast("Error in getting comments", "error");
        createToast(error?.response?.data?.error, "error");
        console.error(error);
    }
}

export const editComment = async (payload) => {
    try {
        const headers = {
            "Content-type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        }
        console.log(payload)
        const response = await axios.put(`/comment`, payload, { headers });
        const data = response.data.data;
        createToast(response.data.message, "success");
        console.log("data: ", data)
        return data;
    } catch (error) {
        createToast("Error in posting comment", "error")
        console.error(error);
    }
}