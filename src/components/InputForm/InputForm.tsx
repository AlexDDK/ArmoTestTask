import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import styles from './InputForm.module.css'
import { IInputFormProps } from './InputForm.props'
import { changeFetchToDB, dateFromForm, dateToForm, fetchToDB, postFetchToDB } from '../helpers';
import Button from '../Button/Button';
import cn from 'classnames'




export default function InputForm({ children, user, setActive, setOneUser, setList, currentPage, ...props}: IInputFormProps): JSX.Element {

    const initialState = user ? {
        'firstName' : user.firstName,
        'lastName' : user.lastName,
        'access' : user.access,
        'birthDate' : user.birthDate,
        'email' : user.email,
    } : {
        'firstName' : '',
        'lastName' : '',
        'access' : false,
        'birthDate' : '',
        'email' : '',
    }
    const [inputs, setInputs] = useState(initialState);
    


    type HTMLElementEvent<T extends HTMLElement> = ChangeEvent & {
        target: T;
    }


    const handleChange = (event: HTMLElementEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = name == 'birthDate' ? dateFromForm(event.target.value) : (name == 'access' ? JSON.parse(event.target.value) : event.target.value)
        setInputs(values => ({...values, [name]: value}))
    }
    
    const handleSubmit = (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        user ? changeFetchToDB(user.id, inputs, setOneUser) : postFetchToDB(inputs, currentPage, setList)
        setActive(false)
        setInputs(initialState)
    }

    return (
        <div {...props} className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.formContainer}> 

            <label>
                First Name
                <input type="text" required value={inputs.firstName} onChange={handleChange} name='firstName'/>
            </label>

            <label>
                Last Name
                <input type="text" required value={inputs.lastName} onChange={handleChange} name='lastName'/>
            </label>

            <label>
                Email
                <input type="email" required value={inputs.email} onChange={handleChange} name='email'/>
            </label>

            <label> 
                birthDate
                <input type="datetime-local" required defaultValue={dateToForm(inputs.birthDate)} onChange={handleChange} name='birthDate' />
            </label>

            <div>
                Access
                <input type="radio" id='false' value={'false'} onChange={handleChange} name='access' checked={!inputs.access ? true : false}/>
                <label htmlFor = 'false'>false</label>
                
                <input type="radio" id='true' value={'true'} onChange={handleChange} name='access' checked={inputs.access ? true : false}/>
                <label htmlFor = 'true'>true</label>
            </div>    
            <input type="submit" />
            </form>
        </div>
    )
}