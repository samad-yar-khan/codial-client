import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    console.log('PROPS ', this.props);
    const { posts } = this.props;

    return (
      <div className="App">
        <div className="post-list">
          {posts.map((post) => {
            return (
              <div className="post-wrapper">
                <div className="post-header">
                  <div className="post-avatar">
                    <img
                      alt={'user'}
                      src={
                        'https://image.flaticon.com/icons/png/512/1946/1946429.png'
                      }
                    />

                    <div className={'post-author'}>{post.user.name}</div>
                    <div className="post-time">5 minutes ago</div>
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

                    <div className="post-comment-icon">
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
                    <div className="post-comments-item">

                      <div className="post-comment-header">
                        <span className="post-comment-author">Samad</span>
                        <span className="post-comment-time">a minute ago</span>
                        <span className="post-comment-likes">22</span>
                      </div>
                        
                     <div className='post-comment-content'>
                        Random Comment 
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
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
