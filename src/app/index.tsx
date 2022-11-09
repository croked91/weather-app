import React from 'react';
import {Weather} from 'pages/weather';
import {GlobalStyle} from './styles';

import 'react-dadata/dist/react-dadata.css';


export const App = () => {
    return (
        <>
            <GlobalStyle/>
            <Weather/>
        </>
    );
};
