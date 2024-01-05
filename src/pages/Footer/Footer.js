
import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'white', color: '#fff', padding: '20px', textAlign: 'center' }}>
      <div>
        <h3  style={{ color: 'black', marginRight: '10px' }}>Contact Us</h3>
        <p  style={{ color: 'gray', marginRight: '10px' }}>Email: yumster@2023.com</p>
        <p  style={{ color: 'gray', marginRight: '10px' }}>Phone: (123) 369-7894</p>
      </div>
      <div>
        <h3  style={{ color: 'black', marginRight: '10px' }}>Follow Us</h3>
        <p>
          <a href="https://facebook.com" style={{ color: 'gray', marginRight: '10px' }}>Facebook</a>
          <a href="https://twitter.com" style={{ color: 'gray', marginRight: '10px' }}>Twitter</a>
          <a href="https://instagram.com" style={{ color: 'gray' }}>Instagram</a>
        </p>
      </div>
      <div>
        <h3  style={{ color: 'black', marginRight: '10px' }}>Quick Links</h3>
        <p>
          <a href="/home">Home</a>
          <a href="/Navbar">Menu</a>
          <a href="/">Contact Us</a>
        </p>
      </div>
      <div>
        <p  style={{ color: 'gray', marginRight: '10px' }}>&copy; Yumster 2023. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
