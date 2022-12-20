import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import styles from './InputForm.module.css'
import { IInputFormProps } from './InputForm.props'
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { addUsersAC } from '../redux/actions/userAction';
import { IUser } from "../../interfaces/user.interface";
import OneUser from '../OneUser/OneUser';
import { changeFetchToDB, dateFromForm, dateToForm, fetchToDB } from '../helpers';
import Button from '../Button/Button';
import cn from 'classnames'




export default function InputForm({ children, user, setActive, setOneUser, ...props}: IInputFormProps): JSX.Element {

    const [inputs, setInputs] = useState({
        'firstName' : user.firstName,
        'lastName' : user.lastName,
        'access' : user.access,
        'birthDate' : user.birthDate,
        'email' : user.email,
    });
    


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
        changeFetchToDB(user.id, inputs, setOneUser)
        setActive(false)
    }

    return (
        <div {...props} className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.formContainer}> 

            <label>
                First Name
                <input type="text" value={inputs.firstName} onChange={handleChange} name='firstName'/>
            </label>

            <label>
                Last Name
                <input type="text" value={inputs.lastName} onChange={handleChange} name='lastName'/>
            </label>

            <label>
                Email
                <input type="email" value={inputs.email} onChange={handleChange} name='email'/>
            </label>

            <label> 
                birthDate
                <input type="datetime-local" defaultValue={dateToForm(inputs.birthDate)} onChange={handleChange} name='birthDate' />
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