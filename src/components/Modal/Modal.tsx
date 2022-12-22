import React from 'react'
import styles from './Modal.module.css'
import { IModalProps } from './Modal.props'
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
            <h3>Введите данные</h3>
            {children}
        </div>
        </div>


    )
}