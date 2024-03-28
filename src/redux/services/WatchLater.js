import axios from 'axios';
import createToast from '../../utils/createToast';
import { fetchUserData } from './User';

export const addToWatchLater = async (dispatch, id) => {
    try {
        const response = await axios.post(`/movie/watchlist/`, { movieId: id }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        const data = response.data.data;

        fetchUserData(dispatch);
        return data;
    } catch (error) {
        createToast("Error in adding to watchlist", "error");
        createToast(error?.response?.data?.error, "error");
        console.error(error);
    }
}