import React from 'react';
import {createComment} from '../actions/posts';
import {connect} from 'react-redux';

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

    handleAddComment= ()=>{
        if(this.state.commentContent.trim()){
            this.props.dispatch(createComment(this.state.commentContent  , this.props.postId));
        }
    }

    handleAddCommentViaEnter= (e)=>{
        if(this.state.commentContent.trim()&& e.key === 'Enter'){
            this.props.dispatch(createComment(this.state.commentContent  , this.props.postId))
        }
    }
    


    render() {
        return (
            <div className="post-comment-box">
                <input 
                    placeholder="What are your thoughts ?" 
                    value={this.state.commentContent}
                    onChange={this.handleCommentChange}
                    onKeyPress={this.handleAddCommentViaEnter}
                />
                {
                    this.state.commentContent.trim() && 
                    <button id="add-comment-btn" onClick={this.handleAddComment}>Post</button>
                }   
            </div>     

      )
    }
}




export default connect()(CreateComment);
