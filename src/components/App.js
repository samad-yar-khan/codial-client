import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {BrowserRouter as Router , Link , Route} from 'react-router-dom'

import { fetchPosts } from '../actions/posts';

import { Home , Navbar} from './index';


const Settings = ()=>{return <div>settings</div>};
const Login = ()=>{return <div>login</div>};


class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    console.log('PROPS ', this.props);
    const { posts } = this.props;

    return (
      <div className="App">
        <Navbar />

    
        {/* <PostsList posts={posts} /> */}
    
        <Router>
      
          <Route exact={true} path={'/'}  render={(props)=>{ 
            return <Home {...props} posts={posts} />
          }}/>
          <Route exact={true} path={'/home'} component={Home}/>
          <Route exact={true} path={'/settings'} component={Settings}/>
          <Route exact={true} path={'/login'} component={Login}/>

        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};

let connectedAppComponent = connect(mapStateToProps)(App);
export default connectedAppComponent;
