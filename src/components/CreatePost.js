import React from 'react';
import {createPost} from '../actions/posts'
import { connect } from 'react-redux';

 
class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  handleOnClick = () => {


  
      this.props.dispatch(createPost(this.state.content));
    

  };

  render() {
    return (
      <div className="create-post">
        <textarea
          className="add-post"
          onChange={this.handleChange}
          value={this.state.content}
        />

        <div>
          <button id="add-post-btn" onClick={this.handleOnClick}>
            Post
          </button>
        </div>
      </div>
    );
  }
}


const ConnectedCreatePostComponent = connect()(CreatePost);

export default ConnectedCreatePostComponent;

