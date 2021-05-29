import React from 'react';
import { Link } from 'react-router-dom';
function Navbar(props) {
  return (
    <div>
      <nav className="nav">
        <div className="left-div">
          <Link to='/'>
            <img
              className="site-logo"
              src="https://image.flaticon.com/icons/png/512/3698/3698156.png"
              alt="logo"
            />
          </Link>        
        </div>
        <div className="search-container">
          <img
            className="search-icon"
            src="https://image.flaticon.com/icons/png/512/622/622669.png"
            alt="search"
          />

          <input placeholder="Search" />

          <div className="search-results">
            <ul>
              <li className="search-results-row">
                <img
                  src="https://image.flaticon.com/icons/png/512/1946/1946429.png"
                  alt="user-avatar"
                />
                <span>Sameer Khan</span>
              </li>
              <li className="search-results-row">
                <img
                  src="https://image.flaticon.com/icons/png/512/1946/1946429.png"
                  alt="user-avatar"
                />
                <span>Sameer Khan</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-nav">
          <div className="user">
            <img
              src="https://image.flaticon.com/icons/png/512/1946/1946429.png"
              alt="user-dp"
              id="user-dp"
            />
            <span>Samad</span>
          </div>
          <div className="nav-links">
            <ul>
              <li><Link to='/login'>Login</Link></li>
              <li><Link to='/logout'>Logout</Link></li>
              <li><Link to='/register'>Register</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
