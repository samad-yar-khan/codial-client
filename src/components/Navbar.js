import React from 'react';

function Navbar(props) {
    return (
        <div>
            <nav className="nav">
          <div className="left-div">
            <img
              className="site-logo"
              src="https://image.flaticon.com/icons/png/512/3698/3698156.png"
              alt="logo"
            />
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
            <div className='nav-links'>
               <ul>
                  <li>
                     Login
                  </li>
                  <li>
                     Logout
                  </li>
                  <li>
                     Register
                  </li>

               </ul>

            </div>
          </div>
        </nav>
        </div>
    );
}

export default Navbar;