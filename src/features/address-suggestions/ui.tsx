import { IWrappedAddressSuggestions } from './types';
import React, { FC } from 'react';
import {AddressSuggestions} from 'react-dadata';
import styled from 'styled-components';
import { DADATA_API_TOKEN } from 'shared/config';
import { addressSuggestionsConfig } from './config';



const WrappedAddressSuggestions: FC<IWrappedAddressSuggestions> = ({
	className,
	value,
	callback,
}) => {
	return (
		<div className={className}>
			<AddressSuggestions
				filterLocations={addressSuggestionsConfig.filterLocations}
				value={value}
				onChange={(e) => e && callback(e)}
				token={DADATA_API_TOKEN}
			/>
		</div>
	);
};

export const StyledAdressSuggestions = styled(WrappedAddressSuggestions)`
	&.containerClassName {
		width: 30vw;
	}
`;
