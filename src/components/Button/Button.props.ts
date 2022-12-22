import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode,
    clickHandler?: Function
}