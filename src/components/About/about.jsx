import React from "react";
import './about.css'
import profile from '../../profile.jpg';
import logom from '../../logom.svg'; 

const About = () => {
    return (
        <div id="about" className="about">
            <div className="about-title">
                <h1>About me</h1>
                <img src={logom} alt="logo" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile} alt="profile-pic" />
            </div>
            <div className="about-right">
                <div className="about-paragraph">
                <p>I am a beginner frontend developer with a strong interest in graphic design and visual aesthetics. I enjoy working on creative projects, especially those that use databases to store information and enable seamless communication with websites.</p>
                <p>I’m excited to keep learning and improving my skills in this field, particularly in combining design with database-driven functionality.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "50%"}}/></div>
                <div className="about-skill"><p>React JS</p><hr style={{width: "70%"}}/></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width: "60%"}}/></div>
                <div className="about-skill"><p>Basic Java</p><hr style={{width: "50%"}}/></div>
            </div>
        </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>1</h1>
                <p>YEAR OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>2</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
        </div>
    </div>
    )
}

export default About;