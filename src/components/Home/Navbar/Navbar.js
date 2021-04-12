import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light  navbar-container">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link mr-5 active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mr-5" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mr-5" href="#">Dental Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mr-5 text-light" href="#">Reviews</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mr-5 text-light" href="#">Blogs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mr-5 text-light" href="#">Contact us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;