import React from "react";
import './contact.css'
import logom from '../../logom.svg'
import email from '../../assets/email-icon.svg'
import location from '../../assets/location.svg'
import call from '../../assets/call-icon.svg'

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={logom} alt="logo" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I am always open to offering help and creating a new project.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={email} alt="" /> <p>latamichal88@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call} alt="" /> <p>999-998-997</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location} alt="" /> <p>PL, Kraków</p>
                        </div>
                    </div>
                </div>
                <form className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder="Enter your name" name="name" />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder="Enter your email" name="email" />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
                    <button type="submit" className="contact-submit">Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;