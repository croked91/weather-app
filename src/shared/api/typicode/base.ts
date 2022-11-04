import axios from "axios";
import { WEATHER_API_URL, DADATA_API_TOKEN, WEATHER_API_TOKEN } from "shared/config";



export const apiInstance = axios.create({
    baseURL: WEATHER_API_URL,
    params: {
        appid: WEATHER_API_TOKEN, 
        units: "metric",
        lang: "ru"
    }
});

