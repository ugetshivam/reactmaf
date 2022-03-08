import React from 'react'
import "./Navbar.css"
import Search from '../Search/Search'
import Cart from '../Cart/Cart'
const Navbar = () => {
  return (
    <nav className='nav'>
      <ul>
        <li>FakeKart</li>
        <li><Search/></li>
        <li><Cart/></li>
      </ul>
    </nav>
  )
}

export default Navbar
