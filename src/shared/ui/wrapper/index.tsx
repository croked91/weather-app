import { memo } from "react";
import styled, { css } from 'styled-components';

export const Wrapper = memo(styled.div<{ 
    hider?: boolean
    animation?: string
}>`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    animation: ${props => props.hider && css`${props.animation} 0.7s linear`}
`)