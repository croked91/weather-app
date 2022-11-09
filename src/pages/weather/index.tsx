import React, {useMemo} from 'react';
import {useGate, useUnit} from 'effector-react';
import {
    $currentCity,
    getCurrentCity,
} from 'features/address-suggestions/model';
import {StyledAdressSuggestions} from 'features/address-suggestions/ui';
import {WeatherCard} from 'entities/weather/ui';
import {weatherModel} from 'entities/weather'
import {TextCard} from "../../shared/ui/text-card";
import {Flex} from 'shared/ui/flex';
import {Spinner} from 'shared/ui/loader';



const {
    $citiesWeather,
    deleteItem,
    Gate,
    getCityWeatherFx,
    reloadCityWeatherFx,
} = weatherModel

export const Weather = () => {
    const currentCity = useUnit($currentCity);
    const citiesWeather = useUnit($citiesWeather);
    const isLoading = useUnit(getCityWeatherFx.pending);
    const isReload = useUnit(reloadCityWeatherFx.pending);
    useGate(Gate, currentCity);


    const mapWeather = useMemo(() => citiesWeather.map((el) => (
        <WeatherCard
            callback={() => deleteItem(el.id)}
            key={el.id}
            city={el.name}
            temperature={Math.ceil(el.main.temp).toString()}
            icon={el.weather[0].icon}
        />
    )), [citiesWeather]);

    return (
        <>
            <Flex direction="column" align="center" margin="20px 0 0 0">
                <StyledAdressSuggestions
                    callback={getCurrentCity}
                    value={currentCity}
                    className='containerClassName'
                />
                {isLoading && <Spinner/>}
                {isReload && <Spinner/>}
                <Flex direction="row" justify="center" wrap="wrap">
                    {mapWeather.length > 0
                        ?
                        mapWeather
                        :
                        <TextCard>Добавьте город</TextCard>
                    }
                </Flex>
            </Flex>
        </>
    );
};
