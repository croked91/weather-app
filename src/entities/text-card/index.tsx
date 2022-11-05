import React, { FC, memo } from 'react';
import { Box } from 'shared/ui/box';
import { H2 } from 'shared/ui/H2';
import { TextCardT } from './model';
import { Flex } from 'shared/ui/flex';
import { appearFromEmpty, rightSideAppear } from 'shared/ui/animations';

export const TextCard: FC<TextCardT> = memo(({ children }) => {
	return (
		<Box animation={appearFromEmpty} width="70vw">
			<Flex direction="column" align="center" justify="center">
				<H2 animation={rightSideAppear} position="block">
					{children}
				</H2>
			</Flex>
		</Box>
	);
});
