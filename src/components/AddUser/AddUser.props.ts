import { DetailedHTMLProps, HTMLAttributes} from "react";
import { IUser } from "../../interfaces/user.interface";


export interface IAddUserProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    currentPage: number,
    list : Array<IUser>,
    setList : Function
}