import axios from 'axios';

const instance = axios.create ({
    baseURL : 'https://burger-builder-3d055.firebaseio.com/'
});

export default instance;