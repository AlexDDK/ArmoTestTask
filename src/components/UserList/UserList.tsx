import React, { useState, useEffect } from 'react'
import styles from './UserList.module.css'
import { IUserListProps } from './UserList.props'

import OneUser from '../OneUser/OneUser';
import { fetchToDB} from '../helpers';
import AddUser from '../AddUser/AddUser';
import Filter from '../Filter/Filter';
import ButtonBlock from '../ButtonBlock/ButtonBlock';




export default function UserList({ ...props}: IUserListProps): JSX.Element {
    const [list , setList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [filterFlag, setfilterFlag] = useState(false)
    const [filterPage, setFilterPage] = useState(1)

    useEffect (() => {
        fetchToDB(currentPage, setList)
    }, [currentPage])

    const allUsersButtonHandler = () => {
        filterFlag && setfilterFlag(false)
        currentPage > 1 ? setCurrentPage(1) : fetchToDB(1, setList)
    }
    
    return (
        <div className={styles.userList} {...props}>
            <div className={styles.filterContainer}>
                <Filter setList={setList} list={list} filterPage={filterPage} setfilterFlag={setfilterFlag} filterFlag={filterFlag} setFilterPage={setFilterPage} setCurrentPage={setCurrentPage}/>
            </div>
            {/* <div className={styles.allUsersButtonContainer}>
                <Button className={styles.allUsersButton} clickHandler={allUsersButtonHandler}><p>Все пользователи</p></Button>
            </div> */}
            <AddUser setList={setList} currentPage={currentPage} list={list}/>
            <h1>Список пользователей:</h1>
            {list && list.map(el => <div key={el.id}>
                <OneUser user={el} setList={setList} currentPage={currentPage} />
            </div>)}
            <ButtonBlock 
                list={list} 
                currentPage={filterFlag ? filterPage : currentPage}
                setCurrentPage={filterFlag ? setFilterPage : setCurrentPage}
                />
        </div>
    )
}