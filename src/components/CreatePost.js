import React from 'react';

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  handleOnClick = () => {
    //action to d
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

export default CreatePost;
