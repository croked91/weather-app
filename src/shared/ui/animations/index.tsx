import { keyframes } from 'styled-components';

export const appearFromEmpty = keyframes`
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
`;

export const floating = keyframes`
50% { 
    transform: translateY(-8px); 
}
`;

export const rightSideAppear = keyframes`
from {
    opacity: 0;
    transform: translateX(150px);
}
to {
    opacity: 1;
    transform: translateX(0px);
}
`;

export const hideItem = keyframes`
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
`;

export const rotate360 = keyframes`
from {
transform: rotate(0deg);
}
to {
transform: rotate(360deg);
}
`;
