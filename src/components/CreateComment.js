import React from 'react';

class CreateComment extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            commentContent : ""
        }

    }

    handleCommentChange= (event)=> {
        this.setState({
            commentContent : event.target.value
        })
    }

    render() {
        return (
            <div className="post-comment-box">
                <input placeholder="What are your thoughts ?" value={this.state.commentContent} onChange={this.handleCommentChange}/>
                {
                    this.state.commentContent.trim() && 
                    <button id="add-comment-btn">Post</button>
                }   
            </div>     

      )
    }
}

export default CreateComment;