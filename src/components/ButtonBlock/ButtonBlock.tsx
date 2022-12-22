import React from 'react'
import styles from './ButtonBlock.module.css'
import { IButtonBlockProps } from './ButtonBlock.props'
import Button from '../Button/Button';
import cn from 'classnames'





export default function ButtonBlock({ currentPage, setCurrentPage, list, ...props}: IButtonBlockProps): JSX.Element {

    return (
        <div {...props}>
            {(list.length == 0) && <p>Ой, кажется тут ничего нет</p>}
            {(currentPage > 2) && <Button className={styles.button} clickHandler={() => setCurrentPage(1)}><p>К началу</p></Button>}
            {(currentPage > 1) && <Button className={styles.button} clickHandler={() => setCurrentPage(currentPage - 1)}><p>Предыдущая</p></Button>}
            {(currentPage > 1) && <Button className={styles.button} clickHandler={() => setCurrentPage(currentPage - 1)}><p>{currentPage-1}</p></Button>}
            {(list.length > 0) && <Button className={cn(styles.button, styles.active)} clickHandler={() => {}}><p>{currentPage}</p></Button>}
            {(list.length > 9) && <Button className={styles.button} clickHandler={() => setCurrentPage(currentPage +1)}><p>{currentPage+1}</p></Button>}
            {(list.length > 9) && <Button className={styles.button} clickHandler={() => setCurrentPage(currentPage +1)}><p>Следующая</p></Button>}
        </div>
    )
}