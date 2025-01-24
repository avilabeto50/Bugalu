import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header bg-purple text-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <div className="logo">Bugalu Dance Co.</div>
          </div>
          <div className="col-md-8 text-center">
            <nav className="nav d-inline">
              <ul className="nav-list list-unstyled d-inline">
                <li className="d-inline mx-4"><a href="#">Home</a></li>
                <li className="d-inline mx-4"><a href="#">About</a></li>
                <li className="d-inline mx-4"><a href="#">Events</a></li>
                <li className="d-inline mx-4"><a href="#">Blogs</a></li>
                <li className="d-inline mx-4"><a href="#">Pages</a></li>
                <li className="d-inline mx-4"><a href="#">Contact Us</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
