import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';

import {PostsList} from './index';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    console.log('PROPS ', this.props);
    const { posts } = this.props;

    return (
      <div className="App">
         <PostsList posts ={posts}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

let connectedAppComponent = connect(mapStateToProps)(App);
export default connectedAppComponent;
