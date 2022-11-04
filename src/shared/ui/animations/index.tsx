import { keyframes } from "styled-components"

export const appear = keyframes`
0% {
    transform:scale(0);
}
50% {
    transform:scale(1.05)
}
75% {
    transform:scale(0.95)
}
100% {
transform:scale(1)
}
`

export const weatherIconMove = keyframes`
50% { 
    transform: translateY(-8px); 
}
`

export const titleAppear = keyframes`
from {
    opacity: 0;
    transform: translateX(150px);
}
to {
    opacity: 1;
    transform: translateX(0px);
}
`

export const hideCard = keyframes`
0% {
    transform:scale(1);
    opacity: 1
}
50% {
    transform:scale(0.2);
    opacity: 0.75
}
75% {
    transform:scale(0.6);
    opacity: 0.5
}
100% {
    transform:scale(0.4);
    opacity: 0
}
`