import React, { useRef, useState } from 'react';
import './navbar.css';
import logom from '../logom.svg';
import AnchorLink from '../AnchorLink';
import menu_open from '../assets/menu.svg';
import menu_close from '../assets/menu.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <img src={logom} alt="logo" style={{ width: '65px', height: '65px' }} />
      <img src={menu_open} onClick={openMenu} alt="menu" className="nav-mob-open" style={{ width: '40px', height: '40px' }} />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="menu_close" className="nav-mob-close" style={{ width: '40px', height: '40px' }} />
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#home">
            <p
              onClick={() => setMenu("home")}
              className={menu === "home" ? "active" : ""}
            >
              Home
            </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p
              onClick={() => setMenu("about")}
              className={menu === "about" ? "active" : ""}
            >
              About me
            </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p
              onClick={() => setMenu("services")}
              className={menu === "services" ? "active" : ""}
            >
              Services
            </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p
              onClick={() => setMenu("work")}
              className={menu === "work" ? "active" : ""}
            >
              Portfolio
            </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p
              onClick={() => setMenu("contact")}
              className={menu === "contact" ? "active" : ""}
            >
              Contact
            </p>
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect with me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
