import React from 'react';
import './Footer.css';
import { Navbar } from '../../UI/Navbar/Navbar';
import { ItemNavbar } from '../../UI/ItemNavbar/ItemNavbar';
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className='footer-page'>
      <Navbar>
        <ul>
          <ItemNavbar content={CiFacebook} />
          <ItemNavbar content={FaWhatsapp} />
          <ItemNavbar content={SiGmail} />
        </ul>
      </Navbar>
    </footer>
  );
};
