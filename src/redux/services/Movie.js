import axios from 'axios';
import createToast from '../../utils/createToast';
import { queries } from '@testing-library/react';

export const getMovies = async (page) => {
    try {
        const response = await axios.get(`/movie/?page=${page}`);
        const data = response.data.data;
        console.log("data: ", data)
        return data;
    } catch (error) {
        createToast("Error in getting movies", "error")
        console.error(error);
    }
}

export const getLatestMovies = async (page) => {
    try {
        console.log(axios.defaults.baseURL)
        const response = await axios.get(`/movie/latest/?page=${page}`);
        const data = response.data.data;
        console.log("data: ", data)
        return data;
    } catch (error) {
        createToast("Error in getting latest movies", "error")
        console.error(error);
    }
}

export const getUpcomingMovies = async (page) => {
    try {
        const response = await axios.get(`/movie/upcoming/?page=${page}`);
        const data = response.data.data;
        console.log("data: ", data)
        return data;
    } catch (error) {
        createToast("Error in getting upcoming movies", "error")
        console.error(error);
    }
}

export const getMovie = async (dispatch, id) => {
    try {
        console.log(id)
        const response = await axios.get(`/movie/${id}`);
        const data = response.data.data;
        console.log("data: ", data)
        return data;
    } catch (error) {
        createToast("Error in getting movie", "error")
        console.error(error);
    }
}

export const filterMovies = async (queries) => {
    try {
        const url = `/movie/filter/?genre=${queries.genres.join(",")}&language=${queries.languages.join(",")}&rating=${queries.rating}`
        console.log(url)
        const response = await axios.get(`/movie/filter/?genres=${queries.genres.join(",")}&languages=${queries.languages.join(",")}&rating=${queries.rating}`);
        const data = response.data.data;
        console.log("response:",response)
        return data;
    } catch (error) {
        createToast("Error in filtering movies", "error")
        console.error(error);
    }
}