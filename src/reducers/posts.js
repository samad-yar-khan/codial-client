import {ADD_COMMENT, ADD_POST, UPDATE_POSTS}  from '../actions/actionTypes' 

let defaultPostState = [];

export default function posts (state = defaultPostState , action){

    switch(action.type){
        
        case UPDATE_POSTS : 
            return action.posts
        case ADD_POST:
            return [
                action.post,
                ...state
            ]
        case ADD_COMMENT :
            const newPost = state.map((post)=>{
                if(post._id === action.postId ){
                    return {
                        ...post ,
                        comments : [action.comment , ...post.comments]
                    };
                }

                return post
            });
            return newPost

        default :
            return state;

    }
}
