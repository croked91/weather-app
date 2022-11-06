import React, { FC } from 'react';
import { AddressSuggestions } from 'react-dadata';
import { DADATA_API_TOKEN } from 'shared/config';
import { InputContainer } from 'shared/ui/inputContainer';
import { AddressSuggestionsConfig } from './config';
import { WrappedAdressSuggestionsT } from './model';
import './styles/styles.css';

export const WrappedAdressSuggestions: FC<WrappedAdressSuggestionsT> = ({
	callback,
	value,
}) => {
	return (
		<InputContainer>
			<AddressSuggestions
				containerClassName="input"
				filterLocations={AddressSuggestionsConfig.filterLocations}
				token={DADATA_API_TOKEN}
				value={value}
				onChange={(e) => e != null && callback(e)}
			/>
		</InputContainer>
	);
};
