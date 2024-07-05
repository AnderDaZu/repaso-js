import axios from "axios";
import type { GIFResponse } from "../interfaces/gif.response";

const apiKey = 'XhX74fXNYYViBS6vllwQBNQ7t19UAeoN';

export const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey, // 👈 = 👇
        // apiKey
    }
});

giphyApi.get<GIFResponse>('/random')
    .then( resp => console.log(resp.data.data.images.downsized_medium.url) )
    .catch( error => console.log(error) );