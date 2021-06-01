import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../actions/auth';


class Navbar extends React.Component {

  
  logoutUser = ()=>{

    localStorage.removeItem('token');
    this.props.dispatch(logoutUser());

  }


  render(){

    const {user , isLoggedIn} = this.props.auth;

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
            {isLoggedIn &&
              <div className="user">
              <img
                src="https://image.flaticon.com/icons/png/512/1946/1946429.png"
                alt="user-dp"
                id="user-dp"
              />
              <span>{user.name}</span>
            </div>

            }
            <div className="nav-links">
              <ul>
                {!isLoggedIn ? 
                  <ul>
                   <li><Link to='/login'>Login</Link></li>
                   <li><Link to='/register'>Register</Link></li>
                  </ul>
                  :
                  <ul>
                   <li onClick={this.logoutUser}>Logout</li>
                  </ul>
                }
                
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }

 
}

function mapStateToProps(state){
  return{
    auth : state.auth
  }
};

const connectedNavbar = connect(mapStateToProps)(Navbar);
export default connectedNavbar;
