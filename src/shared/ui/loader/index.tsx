import styled from 'styled-components';
import { rotate360 } from '../animations';

export const Spinner = styled.div`
	animation: ${rotate360} 1s linear infinite;
	transform: translateZ(0);
	border-top: 2px solid grey;
	border-right: 2px solid grey;
	border-bottom: 2px solid grey;
	border-left: 4px solid black;
	background: transparent;
	width: 24px;
	height: 24px;
	border-radius: 50%;
	position: absolute;
	top: 5px;
	@media (max-width: 1440px) {
		right: calc(32.5%);
	}
	@media (max-width: 1280px) {
		right: calc(31.5%);
	}
	@media (max-width: 720px) {
		right: calc(29%);
	}
	@media (max-width: 480px) {
		right: calc(25%);
	}
	@media (max-width: 320px) {
		right: calc(22%);
	}
`;
