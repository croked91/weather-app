import styled, { css, Keyframes } from 'styled-components';

export const Wrapper = styled.div<{
	hider?: boolean;
	animation?: Keyframes;
    animationDescr?: string;
}>`
	margin-top: 20px;
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
