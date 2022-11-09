import {DaDataSuggestion, DaDataAddress} from 'react-dadata';
import {Weather} from 'shared/api/types';
import {ICityWeatherPayload} from './types';
import {createEffect, sample, createEvent, createStore, forward} from 'effector';
import {interval} from 'patronum';
import {createGate} from 'effector-react';
import connectLocalStorage from 'effector-localstorage/sync';
import {reloadWeatherFromArray} from 'shared/api/weather';
import {getCurrentWeather} from 'shared/api/weather';
import {getItemFromLS} from "shared/lib/getItemFromLS";
import {EMPTY_GEO_LAT, DEFAULT_CITY, CITIES_WEATHER} from './constants';


export const Gate = createGate<DaDataSuggestion<DaDataAddress>>();

export const startReloadTrigger = createEvent();
export const stopReloadTrigger = createEvent();
export const setCitiesWeather = createEvent();
export const deleteItem = createEvent<number>();

const citiesWeatherLocalStorage = connectLocalStorage('citiesWeather')
    .onError((err) => console.log(err))
    .onChange(setCitiesWeather);

export const getCityWeatherFx = createEffect(
    async (payload: ICityWeatherPayload): Promise<Weather> => {
        const {data} = await getCurrentWeather(payload.coordinates);
        return {...data, name: payload.correctName};
    }
);

export const reloadCityWeatherFx = createEffect(async (payload: Weather[]) => {
    const req = await reloadWeatherFromArray(payload);
    return req.map((el) => el.data);
});


export const $citiesWeather = createStore<Weather[]>(
    citiesWeatherLocalStorage.init([])
)
    .on(getCityWeatherFx.doneData, (state, res) => {
        if (state.find((item) => item.name === res.name) != null) {
            return state;
        }
        return [...state, res];
    })
    .on(reloadCityWeatherFx.doneData, (state, res) => {
        return res.map((el) => {
            return {
                ...el,
                name: state.filter((city) => city.id === el.id)[0].name,
            };
        });
    })
    .on(deleteItem, (state, elId) => state.filter((el) => el.id !== elId))
    .on(setCitiesWeather, (_, value) => value);

$citiesWeather.watch(citiesWeatherLocalStorage);


const {tick} = interval({
    timeout: 60000,
    start: startReloadTrigger,
    stop: stopReloadTrigger,
});

sample({
    clock: tick,
    source: $citiesWeather,
    target: reloadCityWeatherFx,
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
    filter: (state) => state.data.geo_lat !== EMPTY_GEO_LAT,
    fn: (currentWeather: DaDataSuggestion<DaDataAddress>) => {
        return {
            coordinates: {
                lat: currentWeather.data.geo_lat,
                lon: currentWeather.data.geo_lon,
            },
            correctName: currentWeather.data.city,
        };
    },
    target: getCityWeatherFx,
});

sample({
    clock: Gate.state,
    filter: (state) =>
        !JSON.parse(getItemFromLS(CITIES_WEATHER)).length &&
        state.data.geo_lat == null,
    fn: () => DEFAULT_CITY,
    target: getCityWeatherFx,
});
