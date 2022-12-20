import { IUser } from "../../../interfaces/user.interface"

export const addUsersAC = (payload: Array<IUser>) => ({type: 'ADDUSERS', payload})
export const delUserAC = (payload: number) => ({type: 'DELUSER', payload})