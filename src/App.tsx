import React, { useEffect, useState } from 'react'
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

