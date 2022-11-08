import {useGate, useStore} from 'effector-react';
import {TextCard} from 'entities/text-card';
import {WeatherCard} from 'entities/weather-card';
import React from 'react';
import {
    $currentCity,
    getCurrentCity,
} from 'features/address-suggestions/model';
import {StyledAdressSuggestions} from 'features/address-suggestions/ui';
import {
    $citiesWeather,
    deleteItem,
    Gate,
    getCityWeatherFx,
    reloadCityWeatherFx,
} from 'features/weather-screen/model';
import {Flex} from 'shared/ui/flex';
import {Spinner} from 'shared/ui/loader';
import {DADATA_API_TOKEN} from "../../shared/config";


export const Weather = () => {
    const currentCity = useStore($currentCity);
    const citiesWeather = useStore($citiesWeather);
    const isLoading = useStore(getCityWeatherFx.pending);
    const isReload = useStore(reloadCityWeatherFx.pending);
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
                <StyledAdressSuggestions callback={getCurrentCity} value={currentCity}
                                         className={"containerClassName"}/>
                {isLoading && <Spinner/>}
                {isReload && <Spinner/>}
                <Flex direction="row" justify="center" wrap="wrap">
                    {mapWeather.length > 0 ? (
                        mapWeather
                    ) : (
                        <TextCard>Добавьте город</TextCard>
                    )}
                </Flex>
            </Flex>
        </>
    );
};
