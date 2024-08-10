import axios from 'axios';

const apiKey = process.env.API_KEY;

const API = {
    search: (query, apiKey) => {
        const url = `http://www.omdbapi.com/?t=${query}&apikey=${apiKey}`;
        return axios.get(url);
    }
};

export default API;