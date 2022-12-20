import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IUser } from "../../interfaces/user.interface";

export interface IOneUserProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    user: IUser,
    setList: Function,
    currentPage: number,
    setModalActive: Function
}