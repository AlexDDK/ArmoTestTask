import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IPageButtonsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    currentPage : number
}