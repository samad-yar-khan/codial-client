import {UPDATE_POSTS}  from '../actions/actionTypes' 

let defaultPostState = [];

export default function posts (state = defaultPostState , action){

    switch(action.type){
        
        case UPDATE_POSTS : 
            return action.posts

        default :
            return state;

    }
}
