import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {BrowserRouter as Router , Link , Route} from 'react-router-dom'

import { fetchPosts } from '../actions/posts';

import { PostsList , Navbar} from './index';

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
        <PostsList posts={posts} />
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
