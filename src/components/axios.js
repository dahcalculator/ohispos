import axios from 'axios';

const baseURL = ' https://ohisstores.pgis.org.ng/api';


export default axios.create({
    baseURL: baseURL
});

export const axiosPrivate = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-type': 'application/json'
    },
    withCredentials: true
    
});

