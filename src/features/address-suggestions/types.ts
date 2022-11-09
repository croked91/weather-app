import { DaDataAddress, DaDataSuggestion } from 'react-dadata';

export interface IWrappedAddressSuggestions {
	className?: string;
	value: DaDataSuggestion<DaDataAddress>;
	callback: (e: DaDataSuggestion<DaDataAddress>) => void;
}
