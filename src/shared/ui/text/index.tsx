import React, {FC, ReactNode} from "react";
import styled, {Keyframes} from "styled-components";


interface IText {
    tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"
    children?: ReactNode
    className?: string
    animation?: Keyframes;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    opacity?: number;
    transform?: string;
    position?: string;
    color?: string
}

const UnStyledText: FC<IText> = ({tag, children, className}) => {
    return (
        <>
            {tag === "h1" && <h1 className={['h1', `${className}`].join(' ')}>{children}</h1>}
            {tag === "h2" && <h2 className={['h2', `${className}`].join(' ')}>{children}</h2>}
            {tag === "h3" && <h3 className={['h3', `${className}`].join(' ')}>{children}</h3>}
            {tag === "h4" && <h4 className={['h4', `${className}`].join(' ')}>{children}</h4>}
            {tag === "h5" && <h5 className={['h5', `${className}`].join(' ')}>{children}</h5>}
            {tag === "h6" && <h6 className={['h6', `${className}`].join(' ')}>{children}</h6>}
            {tag === "p" && <p className={['p', `${className}`].join(' ')}>{children}</p>}
        </>
    )
}

export const Text = styled(UnStyledText)`
    &.h1{

    }

    &.h2{
        position: ${(props) => props.position || 'absolute'};
        font-weight: 300;
        font-size: 80px;
        color: ${(props) => props.color ||  "#b8b8b8"};
        opacity: ${(props) => props.opacity || 0};
        top: ${(props) => props.top};
        right: ${(props) => props.right};
        left: ${(props) => props.left || '36px'};
        bottom: ${(props) => props.bottom || '0px'};
        transform: ${(props) => props.transform || 'translateX(150px)'};
        animation: ${(props) => props.animation} 500ms ease-out 500ms forwards;
    }

    &.h3{
        position: absolute;
        font-weight: 300;
        font-size: 28px;
        color: ${(props) => props.color || "#b8b8b8"};
        opacity: ${(props) => props.opacity || 0};
        top: ${(props) => props.top};
        right: ${(props) => props.right};
        left: ${(props) => props.left || '36px'};
        bottom: ${(props) => props.bottom};
        animation: ${(props) => props.animation} 1s ease-out 500ms forwards;
    }

    &.h4{

    }

    &.h5{

    }

    &.h6{

    }

    &.p{

    }
`

