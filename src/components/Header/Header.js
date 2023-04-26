import React from 'react'
import InfoBar from './InfoBar'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='fixed w-[100%] bg-white'>
        <InfoBar/>
        <Navbar/>
    </div>
  )
}

export default Header