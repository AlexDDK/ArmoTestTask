import React, { useEffect, useState } from 'react'
import Button from './components/Button/Button'
import PageButtons from './components/PageButtons/PageButtons'
import UserList from './components/UserList/UserList'

export default function App(): JSX.Element {

  return (
    <div className='container'>
      <div className='sideContainer'>
      {/* <Button /> */}
      </div>
      <div className='mainContainer'>
        <UserList />
      </div>
    </div>
  )
}

