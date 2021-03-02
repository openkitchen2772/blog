import axios from 'axios';

const axiosAPI = axios.create({
    baseURL: 'http://api:8080'
});

export default axiosAPI;