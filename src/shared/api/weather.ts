import {GetCurrentWeatherParams, Weather} from './types';
import type { AxiosPromise } from 'axios';
import { apiInstance } from './base';

const BASE_URL = 'weather';

export const getCurrentWeather = (
	params: GetCurrentWeatherParams
): AxiosPromise<Weather> => apiInstance.get(BASE_URL, { params });

export const reloadWeatherFromArray = async (params: Weather[]) => {
	const promises: AxiosPromise<Weather>[] = params.map(
		async (el) => await getCurrentWeather(el.coord)
	);
	return await Promise.all(promises);
};
