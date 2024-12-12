import React from 'react';
import './navbar.css';
import logom from '../logom.svg'; 

const Navbar = () => { 
    return (
        <div className="navbar">
           <img src={logom} alt="logo" style={{width: '65px', height: '65px'}} />
            <ul className="nav-menu">
                <li>Home</li>
                <li>About me</li>
                <li>Portfolio</li>
                <li>Contact</li>
                <li>Media</li>
            </ul>
            <div className="nav-connect">Connect with me</div>
        </div>
    );
};

export default Navbar;
