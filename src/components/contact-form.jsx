import { useState } from "react";
import "../style/components.css"


export function ContactForm ({  setContactOpen }) {
    
    const [ contact, setContact ] = useState({
        email: "",
        message: ""
    })

    function handleSubmit (e) {
        e.preventDefault();
    }

    function handleChange (e) {
        setContact({ ...contact, [e.target.name]: e.target.value })
    }

    return (
        <div className="contact-form-container">
            <div className="form-wrapper">
                <div className="contact-form-header">
                    <span onClick={() => setContactOpen(false)} > {"<"}</span>

                    <span>Contact Us</span>
                </div>

                <form onSubmit={handleSubmit} className="contact-form-main">
                    <input type="email" placeholder="Email Address" name="email" value={contact.email} onChange={handleChange} />
                    <textarea placeholder="Message" name="message" value={contact.message} onChange={handleChange} />
                    
                    <button className="button" type='submit'>
                        Send
                    </button>
                </form>
            </div>

            <div className="contact-form-blur"/>
        </div>
    )
}