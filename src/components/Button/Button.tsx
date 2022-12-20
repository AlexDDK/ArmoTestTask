import React, { Children } from 'react'
import styles from './Button.module.css'
import { IButtonProps } from './Button.props'
import cn from 'classnames'



export default function Button({ children,className,clickHandler, ...props}: IButtonProps): JSX.Element {
    
    const handler = () => {
        console.log('CLICK HANDLER');
        clickHandler()
    }

    return (
    <button className={cn(styles.pageButton, className)}{...props} onClick={handler}>{children}</button>
    )
}