import React, {FC} from 'react';
import {Box} from 'shared/ui/box';
import {TextCardT} from './types';
import {Flex} from 'shared/ui/flex';
import {appearFromEmpty, rightSideAppear} from 'shared/ui/animations';
import {Text} from "../../shared/ui/text";
import styled from "styled-components";

const TextCardBox = styled(Box)`
    &.text-card{
    margin: 20px;
}
`

export const TextCard: FC<TextCardT> = ({children}) => {
    return (
        <TextCardBox className="text-card" animation={appearFromEmpty} animationDescr={"500ms ease-out forwards"}
                     width="70vw">
            <Flex direction="column" align="center" justify="center">
                <Text tag={"h2"} opacity={0} animation={rightSideAppear} animationDescr={"1s ease-out 500ms forwards"}
                      position="block">
                    {children}
                </Text>
            </Flex>
        </TextCardBox>
    );
};

