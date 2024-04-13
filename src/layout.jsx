import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/static/style.css" />
        <title>{/* Add your title dynamically here */}</title>
      </head>
      <body>
        <div className="toolbar">
          <Link to="/" className="button">
            Home
          </Link>
          <div className="dropdown">
            <Link to="#" className="button">
              Programs
            </Link>
            <div className="dropdown-content">
              <Link to="/codefest">Spooktastic Codefest</Link>
              <Link to="#">Hour of Code (TBA) December 2023</Link>
              <Link to="#">CSHS Coding Competition (TBA) February 2024</Link>
              <Link to="#">CS Council Hackathon (TBA) April 2024</Link>
            </div>
          </div>
          <div className="logo">
            <img src="/static/images/logo.png" alt="Your Logo" />
          </div>
          <Link to="/about" className="button">
            About Us
          </Link>
          <a href="mailto:ehscscouncil@gmail.com" className="button">
            Contacts
          </a>
        </div>
        <div className="content">{children}</div>
      </body>
    </html>
  );
};

export default Layout;
