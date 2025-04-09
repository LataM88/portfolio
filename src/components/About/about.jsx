import React from "react";
import './about.css'
import logom from '../../logom.svg'; 

const About = () => {
    return (
        <div id="about" className="about">
            <div className="about-title">
                <h1>About Me</h1>
                <img src={logom} alt="logo" />
            </div>
            <div className="about-content">
                <div className="about-text">
                    <p>I am a second-year Computer Science student and a beginner frontend developer with a strong interest in graphic design and visual aesthetics. Through my studies, I've gained foundational knowledge in various programming languages including JavaScript, Java, and React.</p>
                    <p>I enjoy working on creative projects, especially those that use databases to store information and enable seamless communication with websites. I'm excited to keep learning and improving my skills in this field, particularly in combining design with database-driven functionality.</p>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>2</h1>
                    <p>ND YEAR OF STUDIES</p>
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