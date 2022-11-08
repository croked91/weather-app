import styled, { css, Keyframes } from 'styled-components';

export const HidingAnimationContainer = styled.div<{
	hider?: boolean;
	animation?: Keyframes;
    animationDescr?: string;
}>`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	animation: ${(props) =>
		props.hider &&
		css`
        ${props.animation} ${props.animationDescr} 
		`};
`;
