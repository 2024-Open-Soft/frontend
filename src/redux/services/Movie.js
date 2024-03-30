import axios from 'axios';
import createToast from '../../utils/createToast';

export const getMovies = async (page) => {
    try {
        const response = await axios.get(`/movie/?page=${page}`);
        const data = response.data.data;
        return data;
    } catch (error) {
        if (error?.response?.data?.error || "An error occurred"?.startsWith("Token expired")) {
            localStorage.removeItem("token");
        }
        createToast(error?.response?.data?.error || "An error occurred", "error");
        console.error(error);
    }
}

export const getLatestMovies = async (page) => {
    try {
        const response = await axios.get(`/movie/latest/?page=${page}`);
        const data = response.data.data;
        return data;
    } catch (error) {
        if (error?.response?.data?.error || "An error occurred"?.startsWith("Token expired")) {
            localStorage.removeItem("token");
        }
        createToast(error?.response?.data?.error || "An error occurred", "error");
        console.error(error);
    }
}

export const getUpcomingMovies = async (page) => {
    try {
        const response = await axios.get(`/movie/upcoming/?page=${page}`);
        const data = response.data.data;
        return data;
    } catch (error) {
        if (error?.response?.data?.error || "An error occurred"?.startsWith("Token expired")) {
            localStorage.removeItem("token");
        }
        createToast(error?.response?.data?.error || "An error occurred", "error");
        console.error(error);
    }
}

export const getMovie = async (dispatch, id) => {
    try {
        const response = await axios.get(`/movie/${id}`);
        const data = response.data.data;
        return data;
    } catch (error) {
        if (error?.response?.data?.error || "An error occurred"?.startsWith("Token expired")) {
            localStorage.removeItem("token");
        }
        createToast(error?.response?.data?.error || "An error occurred", "error");
        console.error(error);
    }
}


export const getMovieURLs = async (id, type) => {
    try {
        const headers = {
            "Content-type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        }
        const body = {
            movieId: id,
        }
        const response = await axios.post(`/movie/watch`, body, { headers })
        const data = response.data.urls;
        return data;
    } catch (error) {
        if (error.response.status === 401) {
            createToast("Please login to watch", "error");
            return
        }
        createToast("Error in getting movie URLs", "error");
        console.error(error);
    }
}


export const getFeaturedMovies = async () => {
    try {
        const response = await axios.get(`/movie/featured`);
        const data = response.data.data;
        return data;
    } catch (error) {
        createToast("Error in getting featured movies", "error")
        console.error(error);
    }
}


export const filterMovies = async (queries) => {
    try {
        const url = `/movie/filter/?genres=${queries.genres.join(",")}&languages=${queries.languages.join(",")}&rating=${queries.rating ? queries.rating : ""}`
        const response = await axios.get(url);
        const data = response.data.data;
        createToast("Movies filtered successfully", "success")
        return data;
    } catch (error) {
        createToast("Error in filtering movies", "error")
        console.error(error);
    }
}
