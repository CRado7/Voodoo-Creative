import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        businessName: '',
        businessSite: '',
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
        setFormData({
            reason: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            businessName: '',
            businessSite: '',
            message: '',
            image: null,
        });
    };

    return (
        <div className="container">
            <h1>Contact Us</h1>
            <p>
                Ready to chat about your digital marketing goals? Just fill out our consultation form, and one of our team members will reach out to you soon.
                <br />
                We're all about helping businesses thrive online, and we're stoked to connect with you!
            </p>
            <p>Fields marked with an * are required</p>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name*"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="input-field"
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name*"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="input-field"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email*"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number*"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-field"
                />
                <input
                    type="text"
                    name="businessName"
                    placeholder="Business Name"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="input-field"
                />
                <input
                    type="url"
                    name="businessSite"
                    placeholder="Business Website (URL)"
                    value={formData.businessSite}
                    onChange={handleChange}
                    className="input-field"
                />
                <select
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    required
                    className="input-field"
                >
                    <option value="" disabled>What is your reason for getting in touch with us</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Project Request">Start a Project</option>
                    <option value="Collaboration">Employment</option>
                    <option value="Other">Other</option>
                </select>
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="input-field"
                />
                <div className="file-upload">
                    <label htmlFor="image">Upload any relevant images or PDFs:</label>
                    <input
                        type="file"
                        name="image"
                        accept="image/*, .pdf"
                        onChange={handleChange}
                        multiple
                        className="input-field"
                        />
                </div>
                <button type="submit" className="input-field">Send</button>
            </form>
        </div>
    );
};

export default Contact;

