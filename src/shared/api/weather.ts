import { Weather } from './types';
import type { AxiosPromise } from 'axios';
import { apiInstance } from './base';

const BASE_URL = 'weather';

export interface GetCurrentWeatherParams {
	lat: string | null | number;
	lon: string | null | number;
}

export const getCurrentWeather = (
	params?: GetCurrentWeatherParams
): AxiosPromise<Weather> => apiInstance.get(BASE_URL, { params });

export const reloadWeatherFromArray = async (params?: Weather[]) => {
	const promises: false | AxiosPromise<Weather>[] =
		params != null &&
		params.map(async (el) => await getCurrentWeather(el.coord));
	return promises && (await Promise.all(promises));
};
