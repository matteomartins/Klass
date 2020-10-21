import axios from 'axios';

const api = axios.create({
    baseURL: 'https://klass-backend.herokuapp.com/',
    responseType: 'json'
});

export default api;