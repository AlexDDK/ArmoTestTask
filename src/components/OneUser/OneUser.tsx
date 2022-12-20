import React, { useState, useEffect } from 'react'
import styles from './OneUser.module.css'
import { IOneUserProps } from './OneUser.props'
import { useAppSelector, useAppDispatch } from '../redux/hooks'



export default function OneUser({className,user,setList, ...props}: IOneUserProps): JSX.Element {
    
    const birth: Date = new Date(user.birthDate)
    const year = birth.getFullYear()
    const month = birth.getMonth()
    const date = birth.getDate()

    const delHandler = () => {
        fetch(`${process.env.DOMAIN}/${user.id}`, {
            method: "DELETE",
        })
        .then(data => fetch(`${process.env.DOMAIN}?_page=1&_limit=10`))
        .then(resp =>  resp.json())
        .then(data => setList(data))
        .catch(err => alert(err))
    }
        
    return (
        <div className={styles.oneUser}>
            <h2>{user.id}. {user.firstName} {user.lastName} (Birth: {date}.{month}.{year})</h2>
            <p><b>Email:</b> {user.email}</p>
            <p><b>Access:</b> {String(user.access)}</p>
            <button onClick={delHandler}>Delete user!</button>
        </div>
    )
}