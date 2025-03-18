import React from 'react';
import '../styles/Footer.css'; // Make sure to add some styles for your footer

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 Voodoo Creative. All rights reserved.</p>
      <div className="social-links">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
