import { Weather } from 'pages/weather';
import 'react-dadata/dist/react-dadata.css';
import { GlobalStyle } from './styles';
import React from 'react';

export const App = () => {
	return (
		<>
			<GlobalStyle />
			<Weather />
		</>
	);
};
