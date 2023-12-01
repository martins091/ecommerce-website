import React from 'react';
import './Footer.css'; // Import your CSS file

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: contact@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Main St, City, Country</p>
        </div>

        <div className="footer-section">
          <h3>Information</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Stay connected on social media:</p>
          <div className="social-icons">
            <a href="#" className="icon-facebook"></a>
            <a href="#" className="icon-twitter"></a>
            <a href="#" className="icon-instagram"></a>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Your E-commerce Store</p>
      </div>
    </footer>
  );
};

export default Footer;
