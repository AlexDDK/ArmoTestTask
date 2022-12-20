import React, { Children } from 'react'
import styles from './Button.module.css'
import { IButtonProps } from './Button.props'
import cn from 'classnames'



export default function Button({ children,className,setPage, ...props}: IButtonProps): JSX.Element {
    
    const clickHandler = () => {
        console.log('CLICK HANDLER');
        setPage()
    }

    return (
    <button className={cn(styles.pageButton, className)}{...props} onClick={clickHandler}>{children}</button>
    )
}