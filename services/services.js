import axios from 'axios';

export const baseURL = 'http://localhost:1337/api/';

export const getRequest = async (url, params) => {
    console.log(process.env.API_KEY)

    try {
        const { data } = await axios.get(`${baseURL}${url}`, {
            headers: {
                Authorization: `Bearer ${process.env.API_KEY}`
            },
            params
        });
        return data;
    } catch (error) {
        console.log(error);
    }
}