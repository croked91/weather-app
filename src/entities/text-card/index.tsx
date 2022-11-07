import React, {FC} from 'react';
import {Box} from 'shared/ui/box';
import {TextCardT} from './model';
import {Flex} from 'shared/ui/flex';
import {appearFromEmpty, rightSideAppear} from 'shared/ui/animations';
import {Text} from "../../shared/ui/text";

export const TextCard: FC<TextCardT> = ({children}) => {
    return (
        <Box animation={appearFromEmpty} width="70vw">
            <Flex direction="column" align="center" justify="center">
                <Text tag={"h2"} animation={rightSideAppear} position="block">
                    {children}
                </Text>
            </Flex>
        </Box>
    );
};
