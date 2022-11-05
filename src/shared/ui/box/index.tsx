import styled, {Keyframes} from 'styled-components';


export const Box = styled.div<{
    animation?: Keyframes
    width?: string
    height?: string
  }>`
margin:  20px 6px;
border-radius: 20px;
position: relative;
overflow: hidden;
width: ${props => props.width || "270px"} ;
height: ${props => props.height || "270px"} ;
background-color: white;
box-shadow: 0px 0px 25px 1px rgba(50, 50, 50, 0.1);
animation: ${props => props.animation} 500ms ease-out forwards;`
