import React, { useState} from 'react'
import styles from './AddUser.module.css'
import { IAddUserProps } from './AddUser.props'
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import InputForm from '../InputForm/InputForm';




export default function AddUser({ currentPage, list, setList, ...props}: IAddUserProps): JSX.Element {
    const [active, setActive] = useState(false)

    
    return (
        <div className={styles.container} {...props}>
            <Button clickHandler={()=> setActive(true)} className={styles.button}><p>Добавить пользователя</p></Button>
            <Modal active={active} setActive={setActive}>
                {list.length < 10 ?  
                    <InputForm setActive={setActive} setList={setList} currentPage={currentPage}/> :
                    <InputForm setActive={setActive} />
                }
            </Modal>
        </div>
    )
}