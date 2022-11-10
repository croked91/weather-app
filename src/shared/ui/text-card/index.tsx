import React, { FC } from 'react';
import { Box } from 'shared/ui/box';
import { ITextCard } from './types';
import { Flex } from 'shared/ui/flex';
import { appearFromEmpty, rightSideAppear } from 'shared/ui/animations';
import { Text } from 'shared/ui/text';
import styled from 'styled-components';
import {breakpoints} from "shared/lib/breakpoints";

const {
    mobile,
    tablet,
    laptop,
} = breakpoints.devices

const TextCardBox = styled(Box)`
	&.text-card {
        ${laptop}{
            height: 280px
        };
        ${tablet}{
            height: 200px
        };
		margin: 20px;
        ${mobile}{
            height: 100px
        };
	}
`;

const UnStyledTextCard: FC<ITextCard> = ({ children, className }) => {
	return (
		<TextCardBox
			className="text-card"
			animation={appearFromEmpty}
			animationDescr={'500ms ease-out forwards'}
			width="70vw"
		>
			<Flex direction="column" align="center" justify="center">
				<Text
					tag={'h2'}
					opacity={0}
					animation={rightSideAppear}
					animationDescr={'1s ease-out 500ms forwards'}
					position="block"
                    className={className}
				>
					{children}
				</Text>
			</Flex>
		</TextCardBox>
	);
};

export const TextCard = styled(UnStyledTextCard)`
    &.textCard-text{
            ${laptop}{
                font-size: 80px
            };
            ${tablet}{
                font-size: 60px
            };
            ${mobile}{
                font-size: 30px
            };
        }
    }
`