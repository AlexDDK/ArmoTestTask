import React, { useEffect, useState } from 'react'
import Button from './components/Button/Button'
import Modal from './components/Modal/Modal'
import UserList from './components/UserList/UserList'

export default function App(): JSX.Element {
  const [modalActive, setModalActive] = useState(false)

  return (
    <div className='container'>
      <div className='sideContainer'>
        <Button clickHandler={()=> setModalActive(true)}><p>Modal</p></Button>
      </div>
      <div className='mainContainer'>
        <UserList setModalActive={setModalActive}/>
      </div>
      <Modal active={modalActive} setActive={setModalActive}/>
    </div>
  )
}

