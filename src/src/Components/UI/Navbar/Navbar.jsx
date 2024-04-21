// Navbar.js
import React from 'react';
import { ItemNavbar } from '../ItemNavbar/ItemNavbar';

export const Navbar = () => {
  return (
    <nav>
      <ul>

        <ItemNavbar content="quienes somos" style="red" />
        <ItemNavbar content="Acerca de nosotros" style="blue" />
        <ItemNavbar content="FAQ" style="green" />

      </ul>
    </nav>
  );
};


