import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import styles from './InputForm.module.css'
import { IInputFormProps } from './InputForm.props'
import { changeFetchToDB, dateFromForm, dateToForm, fetchToDB, filterFetchToDB, postFetchToDB } from '../helpers';
import Button from '../Button/Button';
import cn from 'classnames'
import { IChange } from '../../interfaces/user.interface';




export default function InputForm({ children, user, setActive, setOneUser, setList, currentPage, setCurrentPage, filter, active, filterPage, setfilterFlag, filterFlag, setFilterPage, ...props}: IInputFormProps): JSX.Element {

    const initialState : IChange =  {
        'firstName' : user ? user.firstName : '',
        'lastName' : user ? user.lastName : '',
        'access' : user ? user.access : filter ? null : false,
        'birthDate' : user ? user.birthDate : '',
        'email' : user ? user.email : ''
    } 

    const [inputs, setInputs] = useState(initialState);
    const [userId, setUserId] = useState('')


    useEffect (() => {
        filterFlag && filterFetchToDB (inputs, userId, setList, filterPage)
        !filterFlag && setInputs(initialState)
        !filterFlag && setUserId('')
    }, [filterPage])
    

    type HTMLElementEvent<T extends HTMLElement> = ChangeEvent & {
        target: T;
    }

    const handleChange = (event: HTMLElementEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = name == 'birthDate' ? dateFromForm(event.target.value) : (name == 'access' ? JSON.parse(event.target.value) : event.target.value)
        setInputs(values => ({...values, [name]: value}))
    }

    const filterChange = (event: HTMLElementEvent<HTMLInputElement>) => {
        const value =  event.target.value;
        setUserId(value)
    }
    
    const handleSubmit = (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(user) {
            changeFetchToDB(user.id, inputs, setOneUser)
        } else if (!filter ) {
            postFetchToDB(inputs, currentPage, setList)
        } else {
            filterPage == 1 ? filterFetchToDB(inputs, userId, setList, filterPage) : setFilterPage(1)
        }
        !user ? !filter ? setInputs(initialState) : null : null
        !filter && setActive(false)
        filter && setfilterFlag(true)
    }


    const cleanHandler = () => {
        filter && setInputs(initialState)
        filter && setUserId('')
        setFilterPage(1)
        setCurrentPage(1)
        fetchToDB(currentPage, setList)
        setfilterFlag(false)
    }

    return (
        <div {...props} className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.formContainer}> 
            {
                filter && <label>
                USER ID
                <input type="text" value={userId} onChange={filterChange} name='id'/>
            </label>
            }
            <label>
                First Name
                {filter && <input type="text" value={inputs.firstName } onChange={handleChange} name='firstName'/>}
                {!filter && <input type="text" required value={inputs.firstName } onChange={handleChange} name='firstName'/>}
            </label>

            <label>
                Last Name
                {filter && <input type="text" value={inputs.lastName} onChange={handleChange} name='lastName'/>}
                {!filter && <input type="text" required value={inputs.lastName} onChange={handleChange} name='lastName'/>}
            </label>

            <label>
                Email
                {filter && <input type="email" value={inputs.email} onChange={handleChange} name='email'/>}
                {!filter && <input type="email" required value={inputs.email} onChange={handleChange} name='email'/>}
            </label>

            <label> 
                birthDate
                {filter && <input type="datetime-local" value={dateToForm(inputs.birthDate) } onChange={handleChange} name='birthDate' />}
                {!filter && <input type="datetime-local" required value={dateToForm(inputs.birthDate) || ''} onChange={handleChange} name='birthDate' />}
            </label>

            <div>
                Access
                <input type="radio" id='false' value={'false'} onChange={handleChange} name='access' checked={inputs.access == false? true : false}/>
                <label htmlFor = 'false'>false</label>
                
                <input type="radio" id='true' value={'true'} onChange={handleChange} name='access' checked={ inputs.access == true? true : false}/>
                <label htmlFor = 'true'>true</label>
            </div> 
            

            <input type="submit" />
            </form>
            {filterFlag && <Button clickHandler={cleanHandler}><p>Сбросить фильтры</p></Button>}
        </div>
    )
}