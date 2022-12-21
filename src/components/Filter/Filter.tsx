import React, { useState, useEffect } from 'react'
import styles from './Filter.module.css'
import { IFilterProps } from './Filter.props'
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { addUsersAC } from '../redux/actions/userAction';
import { IUser } from "../../interfaces/user.interface";
import OneUser from '../OneUser/OneUser';
import { fetchToDB, filterFetchToDB } from '../helpers';
import Button from '../Button/Button';
import cn from 'classnames'
import Modal from '../Modal/Modal';
import InputForm from '../InputForm/InputForm';




export default function Filter({ list, setList, filterPage, setfilterFlag, filterFlag, setFilterPage, setCurrentPage, ...props}: IFilterProps): JSX.Element {
    // const [filterPage, setFilterPage] = useState(1)

    // useEffect (() => {
    //     filterFetchToDB (filterPage, setList)
    // }, [currentPage])

    return (
        <div className={styles.container} {...props}>
            Фильтровать
            <InputForm filter={true} setList={setList} filterPage={filterPage} setfilterFlag={setfilterFlag} filterFlag={filterFlag} setFilterPage={setFilterPage} setCurrentPage={setCurrentPage}/>
            {/* <Button clickHandler={()=> {}}>Фильтровать</Button> */}
        </div>
    )
}