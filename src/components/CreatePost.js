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
    //trim will remove the white space efore and after a string , so for empty strings we get  null string 
   //only publiish non empty strings
   
     if(this.state.content.trim()){
      this.props.dispatch(createPost(this.state.content));
    }
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

