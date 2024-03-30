import axios from 'axios';
import createToast from '../../utils/createToast';
import { logout } from './User';

export const postComment = async (dispatch, payload) => {
    try {
        const headers = {
            "Content-type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        }
        const response = await axios.post(`/comment`, payload, { headers });
        const data = response.data.data;
        createToast(response.data.message, "success");
        return data;
    } catch (error) {
        if(error?.response?.data?.error || "An error occurred"?.startsWith("Token expired")){
            try{
                logout(dispatch);
            }catch(e){}
            localStorage.removeItem("token");
        }
        createToast(error?.response?.data?.error || "An error occurred", "error");
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
        return data;
    }
    catch (error) {
        createToast(error?.response?.data?.error || "An error occurred", "error");
        console.error(error);
    }
}

export const editComment = async (dispatch, payload) => {
    try {
        const headers = {
            "Content-type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        }
        const response = await axios.put(`/comment`, payload, { headers });
        const data = response.data.data;
        createToast(response.data.message, "success");
        return data;
    } catch (error) {
        if(error?.response?.data?.error || "An error occurred"?.startsWith("Token expired")){
            try{
                logout();
            } catch(e){}
            localStorage.removeItem("token");
        }
        createToast("Error in posting comment", "error")
        console.error(error);
    }
}