import React, { useState, useEffect } from 'react'
import styles from './UserList.module.css'
import { IUserListProps } from './UserList.props'
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { addUsersAC } from '../redux/actions/userAction';
import { IUser } from "../../interfaces/user.interface";
import OneUser from '../OneUser/OneUser';
import { fetchToDB } from '../helpers';
import Button from '../Button/Button';
import cn from 'classnames'




export default function UserList({ ...props}: IUserListProps): JSX.Element {
    const [list , setList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    

    
    useEffect (() => {
        fetchToDB(currentPage, setList)
    }, [currentPage])
    
    

    console.log('LIST', list);
    
    return (
        <div className={styles.userList} {...props}>
            <h1>Список пользователей:</h1>
            {list && list.map(el => <div key={el.id}>
                <OneUser user={el} setList={setList} currentPage={currentPage}/>
            </div>)}
            {(list.length == 0) && <p>К сожалению, спиcок пользователей закончен</p>}
            {(currentPage > 2) && <Button className={styles.button} setPage={() => setCurrentPage(1)}><p>К началу</p></Button>}
            {(currentPage > 1) && <Button className={styles.button} setPage={() => setCurrentPage(currentPage - 1)}><p>Предыдущая</p></Button>}
            {(currentPage > 1) && <Button className={styles.button} setPage={() => setCurrentPage(currentPage - 1)}><p>{currentPage-1}</p></Button>}
            {(list.length > 0) && <Button className={cn(styles.button, styles.active)} setPage={() => {}}><p>{currentPage}</p></Button>}
            {(list.length > 9) && <Button className={styles.button} setPage={() => setCurrentPage(currentPage +1)}><p>{currentPage+1}</p></Button>}
            {(list.length > 9) && <Button className={styles.button} setPage={() => setCurrentPage(currentPage +1)}><p>Следующая</p></Button>}
        </div>
    )
}