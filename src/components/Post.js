import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { CreateComment , Comment} from './index'

class Post extends React.Component {


    render() {

        let post = this.props.post;
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

              <CreateComment postId={post._id}/>

              <div className="post-comments-list">
                { post.comments.map((comment)=>{
                  return <Comment comment={comment} key={comment._id}/>
                })}
              </div>
            </div>
          </div>
        );
    
    }
}


export default connect()(Post);