import axios from 'axios';


const getClient = (token) => axios.create({
    baseURL: 'http://localhost:5000/api',
    timeout: 60000,
    headers: {
        authorization: 'Bearer ' + token
    }
});
export default getClient;