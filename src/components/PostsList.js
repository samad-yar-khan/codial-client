import React from 'react';
import PropTypes from 'prop-types';

import {CreatePost ,Post} from './index'

class PostsList extends React.Component {
  render() {
    let { posts , isLoggedIn } = this.props;

    return (
      <div className="posts-list">
        {isLoggedIn && <CreatePost/>}

        {posts.map((post) => {
          return <Post post={post} key={post._id}/>
      
        })
      }
      </div>
    );
  }
}
 
//we beed prop types because we may change the type of prop beng passed over time and our app may break
//so if our app crashed dur to change in type ofprops , this will through an erro
PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostsList;
