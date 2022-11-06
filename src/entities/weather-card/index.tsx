import React, { FC, memo, useState } from 'react';
import { Wrapper } from 'shared/ui/wrapper';
import { Box } from 'shared/ui/box';
import { Closer } from 'shared/ui/closer';
import { Icon } from 'shared/ui/icon';
import { WeatherCardT } from './model';
import {
	appearFromEmpty,
	hideItem,
	rightSideAppear,
	floating,
} from 'shared/ui/animations';
import {Text} from "../../shared/ui/text";

export const WeatherCard: FC<WeatherCardT> = memo(
	({ city, temperature, callback, icon }) => {
		const [isClose, setIsClose] = useState(false);

		const onClickHandler = () => {
			setIsClose(true);
			callback != null && setTimeout(callback, 700);
		};

		return (
			<Wrapper hider={isClose} animation={hideItem}>
				<Box animation={appearFromEmpty}>
					<Closer
						animation={rightSideAppear}
						onClick={onClickHandler}
						src={'https://cdn-icons-png.flaticon.com/512/130/130887.png'}
					/>
					<Icon
						animation={floating}
						src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
					/>
					<Text tag={"h2"} animation={rightSideAppear}>{temperature}°</Text>
					<Text tag={"h3"} animation={rightSideAppear} bottom="0px">
						{city}
                    </Text>
				</Box>
			</Wrapper>
		);
	}
);
