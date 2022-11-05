import axios from "axios";
import { WEATHER_API_TOKEN } from "shared/config";



export const apiInstance = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/",
    params: {
        appid: WEATHER_API_TOKEN, 
        units: "metric",
        lang: "ru"
    }
});

