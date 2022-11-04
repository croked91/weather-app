import { memo } from "react";
import styled from "styled-components";



export const H3 = memo(styled.h3<{
  animation: string
  top: string
  left: string
  right: string
  bottom: string
  opacity: number
}>`
    position: absolute;
    font-weight:300;
    font-size:28px;
    color: #B8B8B8;
    opacity: ${props => props.opacity || 0};
    top: ${props => props.top};
    right: ${props => props.right};
    left: ${props => props.left || "35px"};
    bottom: ${props => props.bottom};
    animation: ${props => props.animation} 1s ease-out 500ms forwards;   
`)