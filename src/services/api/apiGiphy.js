import Axios from 'axios';

const api = Axios.create({
    baseURL: `http://api.giphy.com/v1/gifs`
});

export default api;