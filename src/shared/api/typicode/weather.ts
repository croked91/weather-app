import { Weather } from './models';
import type { AxiosPromise } from "axios";
import { apiInstance } from "./base";


const BASE_URL = "weather"

export type GetCurrentWeatherParams = {
    lat: string | null | number;
    lon: string | null | number;
};

export const getCurrentWeather = (params?: GetCurrentWeatherParams): AxiosPromise<Weather> => {
    return apiInstance.get(BASE_URL, { params });
};



export const reloadWeatherFromArray = async (params?: Weather[]) => {
    const promises = params && params.map((el) => getCurrentWeather(el.coord))
    const res = promises && await Promise.all(promises)
    return res
};