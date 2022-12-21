import { DetailedHTMLProps, HTMLAttributes} from "react";
import { IUser } from "../../interfaces/user.interface";


export interface IButtonBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    list : Array<IUser>,
    currentPage: number,
    setCurrentPage: Function,
}