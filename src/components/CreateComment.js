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

    handleAddComment= ()=>{
        if(this.state.commentContent.trim()){
            console.log(this.state.commentContent.trim());
        }
    }

    handleAddCommentViaEnter= (e)=>{
        if(this.state.commentContent.trim()&& e.key === 'Enter'){
            console.log(this.state.commentContent.trim());
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

export default CreateComment;