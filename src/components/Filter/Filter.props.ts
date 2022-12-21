import { DetailedHTMLProps, HTMLAttributes} from "react";
import { IUser } from "../../interfaces/user.interface";


export interface IFilterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    list : Array<IUser>,
    setList : Function,
    filterPage: number,
    setfilterFlag : Function,
    filterFlag: boolean,
    setFilterPage: Function,
    setCurrentPage: Function
}