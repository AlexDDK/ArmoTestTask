import React, { useState, useEffect } from 'react'
import styles from './Modal.module.css'
import { IModalProps } from './Modal.props'
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { addUsersAC } from '../redux/actions/userAction';
import { IUser } from "../../interfaces/user.interface";
import OneUser from '../OneUser/OneUser';
import { fetchToDB } from '../helpers';
import Button from '../Button/Button';
import cn from 'classnames'




export default function Modal({active, setActive, children, ...props}: IModalProps): JSX.Element {
        
    
    return (
        <div className={cn(styles.modal, {
            [styles.active] : active
        })} {...props} onClick={() => setActive(false)}>
        <div 
            className={cn(styles.modalContainer, {
            [styles.active]: active
            })} 
            onClick={e => e.stopPropagation()}
        >
            MODAL WINDOW
            {children}
        </div>
        </div>


    )
}