import { Coordinates, CorrectName, DEFAULT_CITY } from './config';
import { DaDataSuggestion, DaDataAddress } from 'react-dadata';
import { reloadWeatherFromArray } from 'shared/api/weather';
import { Weather } from 'shared/api/types';
import { getCurrentWeather } from '../../shared/api/weather';
import { createEffect, sample, createEvent, createStore } from 'effector';
import { interval } from 'patronum';
import { createGate } from 'effector-react';
import connectLocalStorage from 'effector-localstorage/sync';

export const startReloadTrigger = createEvent();
export const stopReloadTrigger = createEvent();
export const setCitiesWeather = createEvent();
export const deleteItem = createEvent<number>();

const citiesWeatherLocalStorage = connectLocalStorage('citiesWeather')
	.onError((err) => console.log(err))
	.onChange(setCitiesWeather);

export const getCityWeatherFX = createEffect(
	async (payload: {
		coordinates: Coordinates;
		correctName: CorrectName;
	}): Promise<Weather> => {
		const req = await getCurrentWeather(payload.coordinates);
		return { ...req.data, name: payload.correctName };
	}
);

export const reloadCityWeatherFX = createEffect(async (payload: Weather[]) => {
	const req = await reloadWeatherFromArray(payload);
	return req && req?.map((el) => el.data);
});

export const $citiesWeather = createStore<Weather[]>(
	citiesWeatherLocalStorage.init([])
)
	.on(getCityWeatherFX.doneData, (state, res) => {
		if (state.find((item) => item.name === res.name) != null) {
			return state;
		}
		return [...state, res];
	})
	.on(reloadCityWeatherFX.doneData, (state, res) => {
		res &&
			res.map((el) => {
				return {
					...el,
					name: state.filter((city) => city.id === el.id)[0].name,
				};
			});
	})
	.on(deleteItem, (state, elId) => state.filter((el) => el.id !== elId))
	.on(setCitiesWeather, (_, value) => value);

$citiesWeather.watch(citiesWeatherLocalStorage);

export const Gate = createGate<DaDataSuggestion<DaDataAddress>>();

const { tick } = interval({
	timeout: 60000,
	start: startReloadTrigger,
	stop: stopReloadTrigger,
});

sample({
	clock: tick,
	source: $citiesWeather,
	target: reloadCityWeatherFX,
});

sample({
	clock: Gate.open,
	target: startReloadTrigger,
});

sample({
	clock: Gate.close,
	target: stopReloadTrigger,
});

sample({
	clock: Gate.state,
	filter: (state) => state.data.geo_lat !== '',
	fn: (currentWeather: DaDataSuggestion<DaDataAddress>) => {
		return {
			coordinates: {
				lat: currentWeather.data.geo_lat,
				lon: currentWeather.data.geo_lon,
			},
			correctName: currentWeather.data.city,
		};
	},
	target: getCityWeatherFX,
});

sample({
	clock: Gate.state,
	filter: (state) =>
		!JSON.parse(localStorage.getItem('citiesWeather') || '{}').length &&
		state.data.geo_lat == '',
	fn: () => DEFAULT_CITY,
	target: getCityWeatherFX,
});
