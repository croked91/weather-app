import styled, { Keyframes } from 'styled-components';

export const H3 = styled.h3<{
	animation?: Keyframes;
	top?: string;
	left?: string;
	right?: string;
	bottom?: string;
	opacity?: number;
}>`
	position: absolute;
	font-weight: 300;
	font-size: 28px;
	color: #b8b8b8;
	opacity: ${(props) => props.opacity || 0};
	top: ${(props) => props.top};
	right: ${(props) => props.right};
	left: ${(props) => props.left || '36px'};
	bottom: ${(props) => props.bottom};
	animation: ${(props) => props.animation} 1s ease-out 500ms forwards;
`;
