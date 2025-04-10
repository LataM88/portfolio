import React, { useState } from "react";
import './contact.css'
import logom from '../../logom.svg'
import email from '../../assets/email-icon.svg'
import location from '../../assets/location.svg'
import call from '../../assets/call-icon.svg'

const Contact = () => {

    const [result, setResult] = useState("")

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "47f08db2-cf8b-4a3d-a720-288b2dcbe7e4");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }

        setTimeout(() => {
            setResult("");
        }, 4000);
      };
    

    return (
        <div id="contact" className="contact">
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
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder="Enter your name" name="name" />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder="Enter your email" name="email" />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
                    <div className="form-footer">
                        <button type="submit" className="contact-submit">Submit now</button>
                        {result && <span className="result-message">{result}</span>}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;