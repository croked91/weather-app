import { memo } from "react";
import styled from "styled-components";



export const Icon = memo(styled.img<{
    animation: string
    top: string
    left: string
    right: string
    bottom: string
    opacity: number
}>`
    position: absolute;
    width: 120px;
    height: 120px;
    top: ${props => props.top};
    right: ${props => props.right || "35px"};
    left: ${props => props.left};
    bottom: ${props => props.bottom || "120px"};
    animation: ${props => props.animation} 5s ease-in-out infinite;
`)