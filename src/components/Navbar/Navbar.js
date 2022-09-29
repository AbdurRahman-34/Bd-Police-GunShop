import React from 'react';
import './Navbar.css'
import Logo from '../../police.png'
import {BsFillCartFill} from "react-icons/bs"  // bs is icon name first letters

const Navbar = ({openModal, cart}) => {
    return (
            <nav className='navbar-container'>
            <div className='logo-area'>
            <img src={Logo} alt="" />
            <h2>BD Police Gun Shop</h2>
            </div>


            <div className='cart-count' onClick={openModal}>
                <span>{cart.length}</span>
                <BsFillCartFill size={20} color={"#2E3192"}></BsFillCartFill>
                
            </div>
           </nav>
        
    );
};

export default Navbar;