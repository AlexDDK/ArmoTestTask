import React from 'react'
// import styles from './Button.module.css'
import { IOnePageButtonProps } from './OnePageButton.props'
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { addUsersAC } from '../redux/actions/userAction';


export default function OnePageButton({className, ...props}: IOnePageButtonProps): JSX.Element {
    
    const buttonHandler = async () => {

    }

    return (
    <button onClick={buttonHandler}>Получить список пользователей!</button>
    )
}