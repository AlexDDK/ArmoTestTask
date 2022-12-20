import React, { useState, useEffect } from 'react'
import styles from './UserList.module.css'
import { IUserListProps } from './UserList.props'
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { addUsersAC } from '../redux/actions/userAction';
import { IUser } from "../../interfaces/user.interface";
import OneUser from '../OneUser/OneUser';
import PageButtons from '../PageButtons/PageButtons';




export default function UserList({className, ...props}: IUserListProps): JSX.Element {
    const [list , setList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    
    useEffect (() => {
        fetch(`${process.env.DOMAIN}?_page=${currentPage}&_limit=10`)
        .then((resp) =>  resp.json())
        .then((data) => setList(data))
        .catch(err => alert(err))
    }, [currentPage])
    
    

    console.log('LIST', list);
    
    return (
        <div className={styles.userList}>
            {list && list.map(el => <div key={el.id}><OneUser user={el} setList={setList}/></div>)}
            <PageButtons currentPage={currentPage}/>
        </div>
    )
}