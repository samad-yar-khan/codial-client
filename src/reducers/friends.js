import {
    FETCH_FRIENDS_FAILURE ,
    FETCH_FRIENDS_SUCCESS,
    ADD_FRIEND_FAILURE,
    ADD_FRIEND_SUCCESS,
    REMOVE_FRIEND_FAILURE,
    REMOVE_FRIEND_SUCCESS
} from '../actions/actionTypes'

const defaultFriendsState = {
    friendList : [],
    error : null,
    success : false
}

export default function friends(state = defaultFriendsState , action){

    switch (action.type){
        case FETCH_FRIENDS_SUCCESS :
            return {
                ...state ,
                friendList : action.friendList,
                error : false,
                success : true
            };
        case FETCH_FRIENDS_FAILURE :
            return {
                ...state ,
                error : action.error,
                success : false
            };
        case  ADD_FRIEND_SUCCESS :
            return{
                ...state ,
                friendList : state.friendList.concat(action.friendship)
            }
        case ADD_FRIEND_FAILURE :
            return {
                ...state,
                error : action.error
            }
        default :
            return state
    }   

};