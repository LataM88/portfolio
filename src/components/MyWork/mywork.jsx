import React from "react";
import './mywork.css';
import logom from '../../logom.svg';
import GitHubIcon from '../../assets/github-icon.png';

const MyWork = () => {
    return (
        <div id="work" className="my-work">
            <div className="my-work-title">
                <h1>My works</h1>
                <img src={logom} alt="logo" />
            </div>
            <div className="my-work-container">
                <a href="https://github.com/LataM88" target="_blank" rel="noopener noreferrer">
                    <img src={GitHubIcon} alt="GitHub" className="github-icon" />
                </a>
            </div>
        </div>
    );
};

export default MyWork;