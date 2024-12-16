import React, { useState } from 'react';
import './navbar.css';
import logom from '../logom.svg';

const Navbar = () => {
    const [menu, setMenu] = useState("home");

    return (
        <div className="navbar">
            <img src={logom} alt="logo" style={{ width: '65px', height: '65px' }} />
            <ul className="nav-menu">
                <li>
                    <p
                        onClick={() => setMenu("home")}
                        className={menu === "home" ? "active" : ""}
                    >
                        Home
                    </p>
                </li>
                <li>
                    <p
                        onClick={() => setMenu("about")}
                        className={menu === "about" ? "active" : ""}
                    >
                        About me
                    </p>
                </li>
                <li>
                    <p
                        onClick={() => setMenu("services")}
                        className={menu === "services" ? "active" : ""}
                    >
                        Services
                    </p>
                </li>
                <li>
                    <p
                        onClick={() => setMenu("work")}
                        className={menu === "work" ? "active" : ""}
                    >
                        Portfolio
                    </p>
                </li>
                <li>
                    <p
                        onClick={() => setMenu("contact")}
                        className={menu === "contact" ? "active" : ""}
                    >
                        Contact
                    </p>
                </li>
            </ul>
            <div className="nav-connect">Connect with me</div>
        </div>
    );
};

export default Navbar;
