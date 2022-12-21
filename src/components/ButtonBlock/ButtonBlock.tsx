import React, { useState, useEffect } from 'react'
import styles from './ButtonBlock.module.css'
import { IButtonBlockProps } from './ButtonBlock.props'
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { addUsersAC } from '../redux/actions/userAction';
import { IUser } from "../../interfaces/user.interface";
import OneUser from '../OneUser/OneUser';
import { fetchToDB } from '../helpers';
import Button from '../Button/Button';
import cn from 'classnames'
import Modal from '../Modal/Modal';
import InputForm from '../InputForm/InputForm';




export default function ButtonBlock({ currentPage, setCurrentPage, list, ...props}: IButtonBlockProps): JSX.Element {

    return (
        <div>
            {(list.length == 0) && <p>К сожалению, спиcок пользователей закончен</p>}
            {(currentPage > 2) && <Button className={styles.button} clickHandler={() => setCurrentPage(1)}><p>К началу</p></Button>}
            {(currentPage > 1) && <Button className={styles.button} clickHandler={() => setCurrentPage(currentPage - 1)}><p>Предыдущая</p></Button>}
            {(currentPage > 1) && <Button className={styles.button} clickHandler={() => setCurrentPage(currentPage - 1)}><p>{currentPage-1}</p></Button>}
            {(list.length > 0) && <Button className={cn(styles.button, styles.active)} clickHandler={() => {}}><p>{currentPage}</p></Button>}
            {(list.length > 9) && <Button className={styles.button} clickHandler={() => setCurrentPage(currentPage +1)}><p>{currentPage+1}</p></Button>}
            {(list.length > 9) && <Button className={styles.button} clickHandler={() => setCurrentPage(currentPage +1)}><p>Следующая</p></Button>}
        </div>
    )
}