import { useState } from "react";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (!name || !email || !message) {
            alert("Please fill all the fields");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            alert("Please enter a vaild email");
            return;
        }

        alert("message submitted successfully!");

        setName(""),
        setEmail(""),
        setMessage("");
        
    }

    return (
        <div className="page form-page">

            <h1>Contact Us</h1>

            <p>Have any questions? Contact our showroom.</p>

            <form onSubmit={handleSubmit}>
                <input
                 type="text"
                 placeholder="Your Name"
                 value={name}
                 onChange={e => setName(e.target.value)}
                />

                <input
                 type="email"
                 placeholder="Your Email"
                 value={email}
                 onChange={e => setEmail(e.target.value)}
                />

                <textarea placeholder="Your Message" value={message} 
                onChange={e => setMessage(e.target.value)} 
                />

                <button type="submit">Send Message</button>
            </form>

        </div>
    );
}

export default Contact;