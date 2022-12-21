import React, { useEffect, useState } from 'react'
import Button from './components/Button/Button'
import Modal from './components/Modal/Modal'
import UserList from './components/UserList/UserList'

export default function App(): JSX.Element {

  return (
    <div className='container'>
      <div className='sideContainer'>
      </div>
      <div className='mainContainer'>
        <UserList />
      </div>
    </div>
  )
}

