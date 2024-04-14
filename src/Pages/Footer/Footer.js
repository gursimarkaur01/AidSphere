import React from 'react';
import './Footer.css'; // Import the CSS file we'll create next

const Footer = () => {
 return (
    <footer className="healthcare-footer">
      <div className="footer-content">
        <p>&copy; 2023 Healthcare App. All rights reserved.</p>
        <nav>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
        </nav>
        
        
      </div>
    </footer>
 );
};

export default Footer;
