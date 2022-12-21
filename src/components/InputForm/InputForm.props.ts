import { DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";
import { IUser } from "../../interfaces/user.interface";


export interface IInputFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: ReactNode,
    user?: IUser,
    setActive?: Function,
    setOneUser?: Function,
    setList? : Function,
    currentPage? : number
    filter? : boolean
    active?: boolean,
    filterPage? : number,
    setfilterFlag? : Function,
    filterFlag?: boolean,
    setFilterPage? : Function,
    setCurrentPage? : Function
}