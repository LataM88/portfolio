import React from "react";
import './header.css'
import profile from '../../profile.png';
import AnchorLink from "../../AnchorLink";

const Header = () => {
    return (
        <div id="home" className="header">
            <div className="header-left">
                <img className="profile-image" src={profile} alt="profile-pic" />
            </div>
            <div className="header-right">
                <div className="header-content">
                    <h1><span>I'm Michał Łata,</span> frontend developer<br /> from Poland</h1>
                    <p>I am a second-year computer science student,<br /> beginning my journey with frontend programming.</p>
                    <div className="header-action">
                        <div className="header-contact"><AnchorLink className="anchor-link" offset={50} href="#contact">Contact</AnchorLink></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;