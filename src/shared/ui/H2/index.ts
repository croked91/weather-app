import { memo } from "react";
import styled from "styled-components";



export const H2 = memo(styled.h2<{
  animation?: string
  top?: string
  left?: string
  right?: string
  bottom?: string
  opacity?: number
  transform?: string
  position?: string
}>`
    position: ${props => props.position || "absolute"};
    font-weight:300;
    font-size:80px;
    color: #B8B8B8;
    opacity: ${props => props.opacity || 0};
    top: ${props => props.top};
    right: ${props => props.right};
    left: ${props => props.left || "35px"};
    bottom: ${props => props.bottom || "0px"};
    transform: ${props => props.transform || "translateX(150px)"} ;
    animation: ${props => props.animation} 500ms ease-out 500ms forwards;   
`)