import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/navlogo.png'
import navProfile from '../../assets/nav-profile.svg'
const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo} alt="navlogo" className='navlogo'/>
        <img src={navProfile} alt="navlogo" className='navprofile'/>


    </div>
  )
}

export default Navbar