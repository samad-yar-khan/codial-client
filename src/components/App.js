import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import jwt_decode  from 'jwt-decode';//import everrything

import { fetchPosts } from '../actions/posts';

import { Home, Navbar, Error404 ,Login ,Register ,Settings , UserProfile} from './index';
import { authenticateUser } from '../actions/auth';

import {getAuthTokenFromLocalStorage} from '../helper/utils';
import { fetchUserFriends } from '../actions/friends';

// const Settings = () => <div>SETTINGS</div>;

const PrivateRoute = (privateRouteProps) => {
  
  const {component : Component , path , isLoggedIn } = privateRouteProps;

  return <Route  
            path={path}
            render = {(props)=>{
              return isLoggedIn ? <Component {...props}/> : <Redirect to={{
                pathname:'/login',
                state : {
                  from : props.location /* This is put here to logim can redirect too the old location once user is logged in */
                }
              }}/>;
            }}
        />
}

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());

    //we check if a jwt ltoken exists in local
    //if it exists we login the user
    const token = getAuthTokenFromLocalStorage();
    if(token){
      const user = jwt_decode(token);
      console.log(user);
      this.props.dispatch(authenticateUser({
        name : user.name,
        email : user.email,
        _id : user._id
      }));

      this.props.dispatch(fetchUserFriends());
    }
    //now if we found user using a jwt token we will dipatch a diferet actio

  }

  render() {
    console.log('PROPS ', this.props);
    const { posts , auth , friends} = this.props;

    return (
      <div className="App">
        {/* <PostsList posts={posts} /> */}

        <Router>
          <Navbar />
          <Switch>
            <Route
              exact={true}
              path={'/'}
              render={(props) => {
                //the props here are basically the default props passed by the router
                return <Home {...props} posts={posts} isLoggedIn={auth.isLoggedIn} friends={friends}/>;
              }}
            />
            <Route
              exact={true}
              path={'/home'}
              render={(props) => {
                //the props here are basically the default props passed by the router
                return <Home {...props} posts={posts} />;
              }}
            />
            <Route exact={true} path={'/login'} component={Login} />
            <Route exact={true} path={'/register'} component={Register} />
            <PrivateRoute 
              component = {Settings}
              isLoggedIn = {auth.isLoggedIn}
              path = {'/settings'}
            />
           <PrivateRoute 
              component = {UserProfile}
              isLoggedIn = {auth.isLoggedIn}
              path = {'/user/:userId'}
            />
            <Route component={Error404} />
          </Switch>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    auth: state.auth,
    friends: state.friends
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};

let connectedAppComponent = connect(mapStateToProps)(App);
export default connectedAppComponent;
