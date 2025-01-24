import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header bg-purple text-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <div className="logo">JustDance</div>
          </div>
          <div className="col-md-8 text-right">
            <div className="contact-info">
              <p>Location | Phone | Email</p>
            </div>
            <nav className="nav d-inline">
              <ul className="nav-list list-unstyled d-inline">
                <li className="d-inline mx-2">Home</li>
                <li className="d-inline mx-2">About</li>
                <li className="d-inline mx-2">Events</li>
                <li className="d-inline mx-2">Blogs</li>
                <li className="d-inline mx-2">Pages</li>
                <li className="d-inline mx-2">Contact Us</li>
              </ul>
              <button className="btn btn-primary ml-3">Register Now</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
