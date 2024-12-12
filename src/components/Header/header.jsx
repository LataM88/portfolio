import React from "react";
import './header.css'
import profile from '../../profile.jpg';

const Header = () => {
    return (
        <div className="header">
            <img className="profile-image" src={profile} alt="profile-pic" />
            <div className="text">
                <h1><span>I'm Michał Łata,</span> frontend developer<br /> from Poland</h1>
                <p>I am a second-year computer science student,<br /> and i am beginning my journey with frontend programming.</p>           
            <div className="header-action">
                <div className="header-connect">Connect with me</div>
                <div className="header-resume">My resume</div>
                </div>
            </div>
        </div>
    )
}

export default Header;