import { memo } from "react";
import styled from "styled-components";



export const Closer = memo(styled.img<{
    animation: string
    width: string
    height: string
    top: string
    left: string
    right: string
    bottom: string
    opacity: number
  }>`
    width: ${props => props.width || "15px"} ;
    height: ${props => props.height || "15px"};
    position: absolute;
    top: ${props => props.top || "25px"};
    right: ${props => props.right || "25px"};
    left: ${props => props.left};
    bottom: ${props => props.bottom};
    opacity: ${props => props.opacity || 0};
    animation: ${props => props.animation} 1s ease-out 500ms forwards;
    cursor: pointer;
    filter: opacity(30%);
    z-index: 5;
`)