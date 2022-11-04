import { memo } from "react";
import styled from 'styled-components';


export const Box = memo(styled.div<{
    animation: string
    width: string
    height: string
  }>`
margin:  20px 5px;
border-radius: 20px;
position: relative;
overflow: hidden;
width: ${props => props.width || "270px"} ;
height: ${props => props.height || "270px"} ;
background-color: white;
box-shadow: 0px 0px 25px 1px rgba(50, 50, 50, 0.1);
animation: ${props => props.animation} 500ms ease-out forwards;
`)