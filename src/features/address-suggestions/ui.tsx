import React, {FC} from 'react';
import {AddressSuggestions, DaDataAddress, DaDataSuggestion} from 'react-dadata';
import {DADATA_API_TOKEN} from 'shared/config';
import {AddressSuggestionsConfig} from './config';
import './styles/styles.css';
import styled from "styled-components";
import {IWrappedAddressSuggestions} from "./types";


const WrappedAddressSuggestions: FC<IWrappedAddressSuggestions> = ({className, value, callback}) => {
    return (
        <div className={className}><AddressSuggestions filterLocations={AddressSuggestionsConfig.filterLocations}
                                                       value={value}
                                                       onChange={(e) => e && callback(e)}
                                                       token={DADATA_API_TOKEN}/></div>
    )
}

export const StyledAdressSuggestions = styled(WrappedAddressSuggestions)`
    &.containerClassName{
        width: 30vw;
}
`