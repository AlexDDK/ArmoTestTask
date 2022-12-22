import React from 'react'
import styles from './Filter.module.css'
import { IFilterProps } from './Filter.props'
import InputForm from '../InputForm/InputForm';




export default function Filter({ list, setList, filterPage, setfilterFlag, filterFlag, setFilterPage, setCurrentPage, ...props}: IFilterProps): JSX.Element {

    return (
        <div className={styles.container} {...props}>
            <h3>Фильтровать</h3>
            <InputForm filter={true} setList={setList} filterPage={filterPage} setfilterFlag={setfilterFlag} filterFlag={filterFlag} setFilterPage={setFilterPage} setCurrentPage={setCurrentPage}/>
        </div>
    )
}