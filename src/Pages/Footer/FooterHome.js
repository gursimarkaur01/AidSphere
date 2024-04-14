import React from 'react';
import './FooterHome.css'; // Import the CSS file we'll create next

const FooterHome = () => {
 return (
    <footer className="healthcare-footer1">
      <div className="footer-content1">
        <p>&copy; 2023 Healthcare App. All rights reserved.</p>
        <nav>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
        </nav>
        
        
      </div>
    </footer>
 );
};

export default FooterHome;
