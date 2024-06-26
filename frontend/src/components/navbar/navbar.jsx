import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="Logo" className='logo' />
        <ul className="navbar-menu">
            <li>Home</li>
            <li>Menu</li>
            <li>Mobile-App</li>
            <li>Contact Us</li>

        </ul>
        <div className="navbarright">
            <img src={assets.search_icon} alt="NaN" />
            <div className="navbar-search-icon">
                <img src={assets.basket_icon.png} alt="" />
                <div className="dot"></div>
            </div>
            <button>Sign In</button>
        </div>
      
    </div>
  )
}

export default Navbar
