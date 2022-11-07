import React, {FC, ReactNode} from "react";
import styled, {Keyframes} from "styled-components";

interface IUnStyledImg {
    className?: string
    src: string
    animation?: Keyframes;
    width?: string;
    height?: string;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    opacity?: number;
    position?: "absolute" | "fixed" | "relative" | "static" | "inherit";
    cursor?: "auto" | "crosshair" | "default" | "e-resize" | "help" | "move" | "n-resize" | "ne-resize" | "nw-resize" | "pointer" | "progress" | "s-resize" | "se-resize" | "sw-resize" | "text" | "w-resize" | "wait" | "inherit";
    filter?: string;
    zIndex?: number;
    onClick?: () => void
    alt: string
    onKeyDown?: ()=>void
    animationDescr?: string
}

export const UnStyledImg: FC<IUnStyledImg> = ({className, src, onClick, alt, onKeyDown}) => {
    return (
            <img role="presentation" onKeyDown={onKeyDown} alt={alt} onClick={onClick} src={src} className={className}/>
    )
}

export const Img = styled(UnStyledImg)`
    width: ${(props) => props.width || '16px'};
    height: ${(props) => props.height || '16px'};
    position: ${(props) => props.position || 'absolute'};
    top: ${(props) => props.top || '26px'};
    right: ${(props) => props.right || '26px'};
    left: ${(props) => props.left};
    bottom: ${(props) => props.bottom};
    opacity: ${(props) => props.opacity};
    animation: ${(props) => props.animation} ${props=> props.animationDescr};
    cursor: ${(props) => props.cursor};
    filter: ${(props) => props.filter};
    z-index: ${(props) => props.zIndex};
`
