import axios from 'axios';
import createToast from '../../utils/createToast';
import { fetchUserData } from './User';

export const addToWatchLater = async (dispatch, id) => {
    try {
        const response = await axios.post("/movie/watchlist/", { movieId: id }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        const data = response.data.data;

        createToast("Added to watchlist", "success");

        fetchUserData(dispatch);
        return data;
    } catch (error) {
        createToast("Error in adding to watchlist", "error");
        createToast(error?.response?.data?.error, "error");
        console.error(error);
    }
}

export const removeFromWatchLater = async (dispatch, id) => {
    try {
        const response = await axios.delete("/movie/watchlist/", {
            data: { movieId: id },
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        const data = response.data.data;

        createToast("Removed from watchlist", "success");

        fetchUserData(dispatch);
        return data;
    } catch (error) {
        createToast("Error in removing from watchlist", "error");
        createToast(error?.response?.data?.error, "error");
        console.error(error);
    }
}