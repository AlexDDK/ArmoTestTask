import React, { useState, useEffect } from 'react'
import styles from './UserList.module.css'
import { IUserListProps } from './UserList.props'
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { addUsersAC } from '../redux/actions/userAction';
import { IUser } from "../../interfaces/user.interface";
import OneUser from '../OneUser/OneUser';
import { fetchToDB, filterFetchToDB } from '../helpers';
import Button from '../Button/Button';
import cn from 'classnames'
import AddUser from '../AddUser/AddUser';
import Filter from '../Filter/Filter';
import ButtonBlock from '../ButtonBlock/ButtonBlock';




export default function UserList({ ...props}: IUserListProps): JSX.Element {
    const [list , setList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [filterFlag, setfilterFlag] = useState(false)
    const [filterPage, setFilterPage] = useState(1)


    console.log("FILTER PAGE>>>>>>>", filterPage);
    
    

    useEffect (() => {
        fetchToDB(currentPage, setList)
    }, [currentPage])

    // useEffect (() => {
    //     !filterFlag && fetchToDB(currentPage, setList)
    // }, [currentPage, filterFlag])

    const allUsersButtonHandler = () => {
        filterFlag && setfilterFlag(false)
        currentPage > 1 ? setCurrentPage(1) : fetchToDB(1, setList)
    }

    console.log('FILTER FLAG OUTSIDE', filterFlag);


    // console.log('LIST', list);
    
    return (
        <div className={styles.userList} {...props}>
            <Filter setList={setList} list={list} filterPage={filterPage} setfilterFlag={setfilterFlag} filterFlag={filterFlag} setFilterPage={setFilterPage} setCurrentPage={setCurrentPage}/>
            <div className={styles.allUsersButtonContainer}>
                <Button className={styles.allUsersButton} clickHandler={allUsersButtonHandler}><p>Все пользователи</p></Button>
            </div>
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
            {/* {(list.length == 0) && <p>К сожалению, спиcок пользователей закончен</p>}
            {(currentPage > 2) && <Button className={styles.button} clickHandler={() => setCurrentPage(1)}><p>К началу</p></Button>}
            {(currentPage > 1) && <Button className={styles.button} clickHandler={() => setCurrentPage(currentPage - 1)}><p>Предыдущая</p></Button>}
            {(currentPage > 1) && <Button className={styles.button} clickHandler={() => setCurrentPage(currentPage - 1)}><p>{currentPage-1}</p></Button>}
            {(list.length > 0) && <Button className={cn(styles.button, styles.active)} clickHandler={() => {}}><p>{currentPage}</p></Button>}
            {(list.length > 9) && <Button className={styles.button} clickHandler={() => setCurrentPage(currentPage +1)}><p>{currentPage+1}</p></Button>}
            {(list.length > 9) && <Button className={styles.button} clickHandler={() => setCurrentPage(currentPage +1)}><p>Следующая</p></Button>} */}
        </div>
    )
}