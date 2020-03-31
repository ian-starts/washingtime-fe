import axios from 'axios';


const getClient = (token) => axios.create({
    baseURL: 'https://api.wannawash.nl/api',
    timeout: 60000,
    headers: {
        authorization: 'Bearer ' + token
    }
});
export default getClient;