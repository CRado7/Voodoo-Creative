import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        reason: '',
        message: '',
        image: null, // State to store the uploaded image
    });

    const handleChange = (e) => {
        if (e.target.name === 'image') {
            // Handle file input change
            setFormData({ ...formData, [e.target.name]: e.target.files[0] });
        } else {
            // Handle other form fields
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to server)
        alert('Message sent! We’ll get back to you soon.');
        setFormData({ name: '', email: '', reason: '', message: '', image: null });
    };

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <select
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    required
                >
                    <option value="" disabled>Select a reason</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Project Request">Let's Start a Project</option>
                    <option value="Collaboration">I Want a Job!</option>
                    <option value="Other">Other</option>
                </select>
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="image">Upload any relevant images or PDF's:</label>
                <input
                    type="file"
                    name="image"
                    accept="image/*, .pdf"
                    onChange={handleChange}
                    multiple
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Contact;
