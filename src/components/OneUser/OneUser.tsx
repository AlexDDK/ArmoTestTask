import React, { useState, useEffect } from 'react'
import styles from './OneUser.module.css'
import { IOneUserProps } from './OneUser.props'
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { changeFetchToDB, delFetchToDB } from '../helpers'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'
import InputForm from '../InputForm/InputForm'



export default function OneUser({className,user,setList,currentPage, ...props}: IOneUserProps): JSX.Element {
    const [oneUser, setOneUser] = useState(user)
    const [active, setActive] = useState(false)


    const birth: Date = new Date(oneUser.birthDate)
    const year = birth.getFullYear()
    const month = birth.getMonth() + 1
    const date = birth.getDate()

        
    return (
        <div className={styles.oneUser}>
            <h2>{oneUser.id}. {oneUser.firstName} {oneUser.lastName} (Birth: {date}.{month}.{year})</h2>
            <p><b>Email:</b> {oneUser.email}</p>
            <p><b>Access:</b> {String(oneUser.access)}</p>
            <Button clickHandler={() => delFetchToDB(user.id, setList, currentPage)}><p>Delete</p></Button>
            <Button clickHandler={() => setActive(true)}><p>Change user</p></Button>
            <Modal active={active} setActive={setActive}>
                <InputForm user={oneUser} setActive={setActive} active={active}setOneUser={setOneUser}/>
            </Modal>
        </div>
    )
}