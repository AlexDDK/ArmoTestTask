import React from 'react'
// import styles from './Button.module.css'
import { IButtonProps } from './Button.props'
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { addUsersAC } from '../redux/actions/userAction';
import { IUser } from "../../interfaces/user.interface";




export default function Button({className, ...props}: IButtonProps): JSX.Element {
    const dispatch = useAppDispatch();
    console.log(process.env.DOMAIN);
    
    const listHandler = async () => {
        const resp = await fetch(`${process.env.DOMAIN}/users`)

        if (resp.ok) {
            const list : Array<IUser> = await resp.json()
            console.log('LIST>>', list);
            dispatch(addUsersAC(list))
        }
    }

    return (
    <button onClick={listHandler}>Получить список пользователей!</button>
    )
}