import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../actions/auth';
import { searchUser } from '../actions/search';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  logoutUser = () => {
    localStorage.removeItem('token');
    this.props.dispatch(logoutUser());
  };

  handleSearchChange = (event) => {
    let searchText = event.target.value;
    searchText = searchText.trim(); //remove white space
    this.setState({
      searchText: searchText,
    });

    if (searchText) {
      this.props.dispatch(searchUser(searchText));
    }
  };

  render() {
    const { user, isLoggedIn } = this.props.auth;
    let { searchText } = this.state;
    let { inProgress, users, error } = this.props.search;

    return (
      <div>
        <nav className="nav">
          <div className="left-div">
            <Link to="/">
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

            <input
              placeholder="Looking for someone ?"
              onChange={this.handleSearchChange}
              value={searchText}
            />

            {searchText.trim() && (
              <div className="SearchLoader search-results">
                {inProgress && (
                  <div className="lds-ellipsis loader">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                )}

                {error && <div className="alert error-dailog">{error}</div>}

                <ul>
                  {users.length > 0 &&
                    users.map((user) => {
                      return (
                        <li className="search-results-row" key={user._id}>
                          <Link to={`/user/${user._id}`}>
                            <img
                              src="https://image.flaticon.com/icons/png/512/1946/1946429.png"
                              alt="user-avatar"
                            />
                            <span>{user.name}</span>
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </div>

            )}
          </div>
          <div className="right-nav">
            {isLoggedIn && (
              <div className="user">
                <Link to={'/settings'}>
                  <img
                    src="https://image.flaticon.com/icons/png/512/1946/1946429.png"
                    alt="user-dp"
                    id="user-dp"
                  />
                </Link>
                <span>{user.name}</span>
              </div>
            )}
            <div className="nav-links">
              <ul>
                {!isLoggedIn ? (
                  <ul>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/register">Register</Link>
                    </li>
                  </ul>
                ) : (
                  <ul>
                    <li onClick={this.logoutUser}>Logout</li>
                  </ul>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    search: state.search,
  };
}

const connectedNavbar = connect(mapStateToProps)(Navbar);
export default connectedNavbar;
