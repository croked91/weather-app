import styled from 'styled-components';

export const Flex = styled.div<{
	direction?: string;
	align?: string;
	justify?: string;
	wrap?: string;
	alignContent?: string;
	width?: string;
	margin?: string;
}>`
	display: flex;
	position: relative;
	flex-direction: ${(props) => props.direction};
	align-items: ${(props) => props.align};
	justify-content: ${(props) => props.justify};
	flex-wrap: ${(props) => props.wrap};
	align-content: ${(props) => props.alignContent};
	width: ${(props) => props.width};
	margin: ${(props) => props.margin};
`;
