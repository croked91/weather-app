import styled from 'styled-components';
import {rotate360} from '../animations';
import {breakpoints} from "shared/lib/breakpoints";

const {
    mobile,
    tablet,
    laptop,
    desktop,
    desktopL
} = breakpoints.devices


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
    ${desktopL}{
		right: calc(32.5%);
	}
    ${desktop}{
		right: calc(31.5%);
	}
    ${laptop}{
		right: calc(32%);
	}
    ${tablet}{
		right: calc(29%);
	}
    ${mobile}{
		right: calc(1%);
	}
`;
