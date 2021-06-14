import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {CreatePost} from './index'

class PostsList extends React.Component {
  render() {
    let { posts , isLoggedIn } = this.props;

    return (
      <div className="posts-list">
        {isLoggedIn && <CreatePost/>}

        {posts.map((post) => {
          return (
            <div className="post-wrapper" key={post._id}>
              <div className="post-header">
                <div className="post-avatar">
                  <Link to={`/user/${post.user._id}`}>
                    <img
                      alt={'user'}
                      src={
                        'https://image.flaticon.com/icons/png/512/1946/1946429.png'
                      }
                    />
                  </Link>
                  <div>
                    <Link to={`/user/${post.user._id}`} className={'remove-link-style'}>
                      <div className={'post-author'}>{post.user.name}</div>
                    </Link>
                    <div className="post-time">5 minutes ago</div>
                  </div>
                </div>

                <div className="post-content">{post.content}</div>

                <div className="post-actions">
                  <div className="post-like">
                    <img
                      alt={'like'}
                      src={
                        'https://image.flaticon.com/icons/png/512/1077/1077035.png'
                      }
                    />
                    <span>{post.likes.length}</span>
                  </div>

                  <div className="post-comments-icon">
                    <img
                      alt={'comments'}
                      src={
                        'https://image.flaticon.com/icons/png/512/1380/1380338.png'
                      }
                    />
                    <span>{post.comments.length}</span>
                  </div>
                </div>

                <div className="post-comment-box">
                  <input placeholder="What are your thoughts ?" />
                </div>

                <div className="post-comments-list">
                  <div className="post-comment-item">
                    <div className="post-comment-header">
                      <span className="post-comment-author">Samad</span>
                      <span className="post-comment-time">a minute ago</span>
                      <span className="post-comment-likes">22</span>
                    </div>

                    <div className="post-comment-content">Random Comment</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
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
