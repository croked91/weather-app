import styled, {Keyframes} from 'styled-components';
import {FC, ReactNode} from 'react';

interface IUnStyledBox {
    className?: string;
    children?: ReactNode;
    animation?: Keyframes;
    width?: string;
    height?: string;
    animationDescr?: string;
    backgroundColor?: string;
}

const UnStyledBox: FC<IUnStyledBox> = ({className, children}) => {
    return <div className={className}>{children}</div>;
};

export const Box = styled(UnStyledBox)`
	border-radius: 20px;
	position: relative;
	overflow: hidden;
	width: ${(props) => props.width || '270px'};
	height: ${(props) => props.height || '270px'};
	background-color: ${(props) => props.backgroundColor || 'white'};
	box-shadow: 0px 0px 25px 1px rgba(50, 50, 50, 0.1);
	animation: ${(props) => props.animation} ${(props) => props.animationDescr};
`;

//
