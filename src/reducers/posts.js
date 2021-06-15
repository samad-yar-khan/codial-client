import {ADD_COMMENT, ADD_POST, UPDATE_POSTS , UPDATE_POST_LIKES}  from '../actions/actionTypes' 

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
        case UPDATE_POST_LIKES : 
            const updatedPost = state.map((post)=>{
                if(post._id === action.postId ){
                    return {
                        ...post ,
                        likes : [...post.likes , action.userId]
                    };
                }

                return post
            });

            return updatedPost

        default :
            return state;

    }
}
