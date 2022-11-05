import { useGate, useStore } from 'effector-react';
import { TextCard } from 'entities/text-card';
import { WeatherCard } from 'entities/weather-card';
import {
	$currentCity,
	getCurrentCity,
} from 'features/address-suggestions/model';
import { WrappedAdressSuggestions } from 'features/address-suggestions/ui';
import {
	$citiesWeather,
	deleteItem,
	Gate,
	getCityWeatherFX,
	reloadCityWeatherFX,
} from 'features/weather-screen/model';
import { Flex } from 'shared/ui/flex';
import { Spinner } from 'shared/ui/loader';

export const Weather = () => {
	const currentCity = useStore($currentCity);
	const citiesWeather = useStore($citiesWeather);
	const isLoading = useStore(getCityWeatherFX.pending);
	const isReload = useStore(reloadCityWeatherFX.pending);
	useGate(Gate, currentCity);

	const mapWeather =
		citiesWeather &&
		citiesWeather.map((el) => (
			<WeatherCard
				callback={() => deleteItem(el.id)}
				key={el.id}
				city={el.name}
				temperature={Math.ceil(el.main.temp).toString()}
				icon={el.weather[0].icon}
			/>
		));

	return (
		<>
			<Flex direction="column" align="center" margin="20px 0 0 0">
				<WrappedAdressSuggestions
					value={currentCity}
					callback={getCurrentCity}
				/>
				{isLoading && <Spinner />}
				{isReload && <Spinner />}
				<Flex direction="row" justify="center" wrap="wrap">
					{mapWeather.length ? mapWeather : <TextCard>Добавьте город</TextCard>}
				</Flex>
			</Flex>
		</>
	);
};
