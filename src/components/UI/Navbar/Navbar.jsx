import React from 'react'
import { ItemNavbar } from '../ItemNavbar/ItemNavbar'
import './Navbar.css'

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <ItemNavbar style='nav-home' content='Quienes somos' />
        <ItemNavbar content='Acerca de nosotros' />
        <ItemNavbar content='FAQ' />
      </ul>

    </nav>
  )
}
