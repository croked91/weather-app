import { DaDataAddress, DaDataSuggestion } from 'react-dadata';
import { createEvent, createStore } from 'effector';
import { DEFAULT_DADATA_ADDRESS } from './constants';

export const getCurrentCity = createEvent<DaDataSuggestion<DaDataAddress>>();

export const $currentCity = createStore<DaDataSuggestion<DaDataAddress>>(
	DEFAULT_DADATA_ADDRESS
).on(getCurrentCity, (_, city) => city);
