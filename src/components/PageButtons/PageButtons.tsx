import React from 'react'
import Button from '../Button/Button'
import { IPageButtonsProps } from './PageButtons.props'

export default function PageButtons({currentPage} : IPageButtonsProps) : JSX.Element {

  return (
    <div>
        PageButtons
        {(currentPage > 1) && <Button/>}
        <Button />
    </div>
  )
}
