import axios from 'axios';
import createToast from '../../utils/createToast';
import { queries } from '@testing-library/react';
import { logout } from './User';

export const getMovies = async (page) => {
    try {
        const response = await axios.get(`/movie/?page=${page}`);
        const data = response.data.data;
        return data;
    } catch (error) {
        if (error?.response?.data?.error?.startsWith("Token expired")) {
            localStorage.removeItem("token");
        }
        createToast(error?.response?.data?.error, "error");
        console.error(error);
    }
}

export const getLatestMovies = async (page) => {
    try {
        console.log(axios.defaults.baseURL)
        const response = await axios.get(`/movie/latest/?page=${page}`);
        const data = response.data.data;
        return data;
    } catch (error) {
        if (error?.response?.data?.error?.startsWith("Token expired")) {
            localStorage.removeItem("token");
        }
        createToast(error?.response?.data?.error, "error");
        console.error(error);
    }
}

export const getUpcomingMovies = async (page) => {
    try {
        const response = await axios.get(`/movie/upcoming/?page=${page}`);
        const data = response.data.data;
        return data;
    } catch (error) {
        if (error?.response?.data?.error?.startsWith("Token expired")) {
            localStorage.removeItem("token");
        }
        createToast(error?.response?.data?.error, "error");
        console.error(error);
    }
}

export const getMovie = async (dispatch, id) => {
    try {
        // console.log(id)
        const response = await axios.get(`/movie/${id}`);
        const data = response.data.data;
        return data;
    } catch (error) {
        if (error?.response?.data?.error?.startsWith("Token expired")) {
            localStorage.removeItem("token");
        }
        createToast(error?.response?.data?.error, "error");
        console.error(error);
    }
}

export const getFeaturedMovies = async () => {
    try {
        const response = await axios.get(`/movie/featured`);
        const data = response.data.data;
        console.log("data: ", data)
        return data;
    } catch (error) {
        createToast("Error in getting featured movies", "error")
        console.error(error);
    }
}


export const filterMovies = async (queries) => {
    try {
        console.log("Queries:", queries)
        const url = `/movie/filter/?genres=${queries.genres.join(",")}&languages=${queries.languages.join(",")}&rating=${queries.rating ? queries.rating : ""}`
        console.log(url)
        const response = await axios.get(url);
        const data = response.data.data;
        console.log("response:", response)
        createToast("Movies filtered successfully", "success")
        return data;
    } catch (error) {
        createToast("Error in filtering movies", "error")
        console.error(error);
    }
}
