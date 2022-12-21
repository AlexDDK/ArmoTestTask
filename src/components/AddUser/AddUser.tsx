import React, { useState, useEffect } from 'react'
import styles from './AddUser.module.css'
import { IAddUserProps } from './AddUser.props'
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { addUsersAC } from '../redux/actions/userAction';
import { IUser } from "../../interfaces/user.interface";
import OneUser from '../OneUser/OneUser';
import { fetchToDB } from '../helpers';
import Button from '../Button/Button';
import cn from 'classnames'
import Modal from '../Modal/Modal';
import InputForm from '../InputForm/InputForm';




export default function AddUser({ currentPage, list, setList, ...props}: IAddUserProps): JSX.Element {
    const [active, setActive] = useState(false)

    
    return (
        <div className={styles.container} {...props}>
            <Button clickHandler={()=> setActive(true)}>Добавить пользователя</Button>
            <Modal active={active} setActive={setActive}>
                {list.length < 10 ?  
                    <InputForm setActive={setActive} setList={setList} currentPage={currentPage}/> :
                    <InputForm setActive={setActive} />
                }
            </Modal>
        </div>
    )
}