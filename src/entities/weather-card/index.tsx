import React, {FC, memo, useState} from 'react';
import {HidingAnimationContainer} from 'shared/ui/wrapper';
import {Box} from 'shared/ui/box';
import {WeatherCardT} from './types';
import {
    appearFromEmpty,
    hideItem,
    rightSideAppear,
    floating,
} from 'shared/ui/animations';
import {Text} from "../../shared/ui/text";
import {Img} from "../../shared/ui/img";
import styled from "styled-components";

const WeatherCardBox = styled(Box)`
&.weather-card{
margin: 20px 6px;
}
`

export const WeatherCard: FC<WeatherCardT> = memo(
    ({city, temperature, callback, icon}) => {
        const [isClose, setIsClose] = useState(false);

        const onClickHandler = () => {
            setIsClose(true);
            callback && setTimeout(callback, 700);
        };

        return (
            <HidingAnimationContainer hider={isClose} animation={hideItem} animationDescr={"0.7s linear"}>
                <WeatherCardBox className={"weather-card"} animation={appearFromEmpty}
                                animationDescr={"500ms ease-out forwards"}>
                    <Img
                        opacity={0}
                        animation={rightSideAppear}
                        animationDescr={"1s ease-out 500ms forwards"}
                        onClick={onClickHandler}
                        src={'https://cdn-icons-png.flaticon.com/512/130/130887.png'}
                        cursor={"pointer"}
                        filter={"opacity(30%)"}
                        zIndex={5}
                        alt={""}
                    />
                    <Img
                        animation={floating}
                        animationDescr={"5s ease-in-out infinite"}
                        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                        width={"120px"}
                        height={"120px"}
                        right={"36px"}
                        bottom={"120px"}
                        alt={""}
                    />
                    <Text tag={"h2"} animation={rightSideAppear}
                          animationDescr={"500ms ease-out 500ms forwards"}>{temperature}°</Text>
                    <Text tag={"h3"} animation={rightSideAppear} animationDescr={"500ms ease-out 500ms forwards"}
                          bottom="0px">
                        {city}
                    </Text>
                </WeatherCardBox>
            </HidingAnimationContainer>
        );
    }
);
