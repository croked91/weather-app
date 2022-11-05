import styled, { Keyframes } from 'styled-components';

export const Closer = styled.img<{
	animation?: Keyframes;
	width?: string;
	height?: string;
	top?: string;
	left?: string;
	right?: string;
	bottom?: string;
	opacity?: number;
}>`
	width: ${(props) => props.width || '16px'};
	height: ${(props) => props.height || '16px'};
	position: absolute;
	top: ${(props) => props.top || '26px'};
	right: ${(props) => props.right || '26px'};
	left: ${(props) => props.left};
	bottom: ${(props) => props.bottom};
	opacity: ${(props) => props.opacity || 0};
	animation: ${(props) => props.animation} 1s ease-out 500ms forwards;
	cursor: pointer;
	filter: opacity(30%);
	z-index: 5;
`;
