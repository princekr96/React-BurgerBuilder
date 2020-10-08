import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-f1eb6.firebaseio.com/'
});

export default instance;